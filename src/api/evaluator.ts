import { AttrCondition } from '@/models';
import { mvuAdapter } from './mvuAdapter';

// ==========================================
// 輔助函式：取得判斷目標的資料集
// ==========================================
async function getTargetData(condition: AttrCondition, contextNpc?: any): Promise<any> {
    if (condition.targetType === 'environment') {
        return await mvuAdapter.readMvuVariable('environment');
    }
    if (condition.targetType === 'player') {
        return await mvuAdapter.readMvuVariable('player');
    }
    if (condition.targetType === 'npc') {
        // 如果傳入了遍歷中的當前 NPC 上下文，則直接返回該上下文，避免重複讀取整個 npcs
        if (contextNpc) {
            return contextNpc;
        }
        const npcs = await mvuAdapter.readMvuVariable<any>('npcs') || {};
        if (condition.targetNpcId) {
            return npcs[condition.targetNpcId];
        }
        return null;
    }
    return null;
}

// ==========================================
// evaluator 核心條件判定器
// ==========================================
export const evaluator = {
    /**
     * 判定單一屬性條件是否成立 (支援 contextNpc 傳遞)
     */
    async evaluateCondition(condition: AttrCondition, contextNpc?: any): Promise<boolean> {
        // ==========================================
        // 複合/子條件判定邏輯 (如 any_if / all_if)
        // ==========================================
        if (condition.subConditions && condition.subConditions.length > 0) {
            const matchMode = condition.subMatchMode || 'and';
            
            // 如果為 any_if 或 all_if 則需要遍歷所有 NPC
            if (condition.targetType === 'npc' && (condition.targetNpcId === 'all_if' || condition.targetNpcId === 'any_if')) {
                const npcs = await mvuAdapter.readMvuVariable<Record<string, any>>('npcs') || {};
                const npcList = Object.values(npcs);
                
                if (npcList.length === 0) return false;
                
                if (condition.targetNpcId === 'any_if') {
                    for (const npc of npcList) {
                        const isMatch = await this.evaluateAllConditions(condition.subConditions, matchMode, npc);
                        if (isMatch) return true;
                    }
                    return false;
                } else {
                    for (const npc of npcList) {
                        const isMatch = await this.evaluateAllConditions(condition.subConditions, matchMode, npc);
                        if (!isMatch) return false;
                    }
                    return true;
                }
            }
            
            // 若為特定目標的複合條件，直接取得目標資料進行子條件判定
            const targetData = await getTargetData(condition, contextNpc);
            if (!targetData) return false;
            return await this.evaluateAllConditions(condition.subConditions, matchMode, targetData);
        }

        // ==========================================
        // 單一屬性條件判定邏輯
        // ==========================================
        const data = await getTargetData(condition, contextNpc);
        if (!data) return false;

        let actualValue: any = undefined;

        if (condition.fixedStat) {
            // 智慧相容 locationId：若在 locationState 下則讀取之
            if (condition.fixedStat === 'locationId') {
                actualValue = data.locationId !== undefined ? data.locationId : data.locationState?.locationId;
            } else {
                actualValue = data[condition.fixedStat];
            }
        } else if (condition.dynamicStat) {
            const { collection, entityId, property } = condition.dynamicStat;
            if (data[collection] && data[collection][entityId]) {
                actualValue = data[collection][entityId][property];
            }
        }

        if (actualValue === undefined) return false;

        switch (condition.operator) {
            case '==': return actualValue == condition.value;
            case '!=': return actualValue != condition.value;
            case '>=': return Number(actualValue) >= Number(condition.value);
            case '<=': return Number(actualValue) <= Number(condition.value);
            case '>': return Number(actualValue) > Number(condition.value);
            case '<': return Number(actualValue) < Number(condition.value);
            case 'contains': {
                if (Array.isArray(actualValue)) return actualValue.includes(condition.value);
                if (actualValue && typeof actualValue === 'object') return (condition.value as string) in actualValue;
                if (typeof actualValue === 'string') return actualValue.includes(String(condition.value));
                return false;
            }
            case 'contains_any': {
                if (!Array.isArray(condition.value)) return false;
                const vals = condition.value as any[];
                if (Array.isArray(actualValue)) return vals.some(v => actualValue.includes(v));
                if (actualValue && typeof actualValue === 'object') return vals.some(v => v in actualValue);
                if (typeof actualValue === 'string') return vals.some(v => actualValue.includes(String(v)));
                return false;
            }
            case 'contains_all': {
                if (!Array.isArray(condition.value)) return false;
                const vals = condition.value as any[];
                if (Array.isArray(actualValue)) return vals.every(v => actualValue.includes(v));
                if (actualValue && typeof actualValue === 'object') return vals.every(v => v in actualValue);
                if (typeof actualValue === 'string') return vals.every(v => actualValue.includes(String(v)));
                return false;
            }
            case 'not_contains': {
                if (Array.isArray(actualValue)) return !actualValue.includes(condition.value);
                if (actualValue && typeof actualValue === 'object') return !((condition.value as string) in actualValue);
                if (typeof actualValue === 'string') return !actualValue.includes(String(condition.value));
                return true;
            }
            default: return false;
        }
    },

    /**
     * 判定一組條件是否成立 (支援傳入 contextNpc)
     */
    async evaluateAllConditions(conditions: AttrCondition[], matchMode: 'and' | 'or' = 'and', contextNpc?: any): Promise<boolean> {
        if (!conditions || conditions.length === 0) return true;
        
        for (const condition of conditions) {
            const result = await this.evaluateCondition(condition, contextNpc);
            if (matchMode === 'and' && !result) return false;
            if (matchMode === 'or' && result) return true;
        }
        
        return matchMode === 'and';
    }
};

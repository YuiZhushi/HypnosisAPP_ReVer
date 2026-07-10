import { AttrCondition } from '@/models';
import { mvuAdapter } from './mvuAdapter';

/**
 * 取得判斷目標的資料集
 */
async function getTargetData(condition: AttrCondition): Promise<any> {
    if (condition.targetType === 'environment') {
        return await mvuAdapter.readMvuVariable('environment');
    }
    if (condition.targetType === 'player') {
        return await mvuAdapter.readMvuVariable('player');
    }
    if (condition.targetType === 'npc') {
        const npcs = await mvuAdapter.readMvuVariable<any>('npcs') || {};
        if (condition.targetNpcId) {
            return npcs[condition.targetNpcId];
        }
        return null;
    }
    return null;
}

export const evaluator = {
    /**
     * 判定單一屬性條件是否成立
     */
    async evaluateCondition(condition: AttrCondition): Promise<boolean> {
        const data = await getTargetData(condition);
        if (!data) return false;

        let actualValue: any = undefined;

        if (condition.fixedStat) {
            actualValue = data[condition.fixedStat];
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
            default: return false;
        }
    },

    /**
     * 判定一組條件是否成立 (可選擇 AND 或 OR 模式)
     */
    async evaluateAllConditions(conditions: AttrCondition[], matchMode: 'and' | 'or' = 'and'): Promise<boolean> {
        if (!conditions || conditions.length === 0) return true;
        
        for (const condition of conditions) {
            const result = await this.evaluateCondition(condition);
            if (matchMode === 'and' && !result) return false;
            if (matchMode === 'or' && result) return true;
        }
        
        return matchMode === 'and';
    }
};

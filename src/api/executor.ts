import { AttrOperation } from '@/models';
import { mvuAdapter } from './mvuAdapter';

function applyMath(currentValue: any, op: AttrOperation): any {
    const val = op.value;
    switch (op.operator) {
        case '+': return (Number(currentValue) || 0) + Number(val);
        case '-': return (Number(currentValue) || 0) - Number(val);
        case '*': return (Number(currentValue) || 0) * Number(val);
        case '=': 
        case 'set': 
            return val;
        case 'push': {
            const arr = Array.isArray(currentValue) ? [...currentValue] : [];
            const items = Array.isArray(val) ? val : [val];
            for (const item of items) {
                if (!arr.includes(item)) arr.push(item);
            }
            return arr;
        }
        case 'remove': {
            if (!Array.isArray(currentValue)) return currentValue;
            const items = Array.isArray(val) ? val : [val];
            return currentValue.filter((item: any) => !items.includes(item));
        }
        case 'toggle': {
            const arr = Array.isArray(currentValue) ? [...currentValue] : [];
            const items = Array.isArray(val) ? val : [val];
            for (const item of items) {
                const idx = arr.indexOf(item);
                if (idx !== -1) arr.splice(idx, 1);
                else arr.push(item);
            }
            return arr;
        }
        default: return currentValue;
    }
}

function applyOpToData(data: any, op: AttrOperation) {
    if (op.fixedStat) {
        data[op.fixedStat] = applyMath(data[op.fixedStat], op);
    } else if (op.dynamicStat) {
        const { collection, entityId, property } = op.dynamicStat;
        if (!data[collection]) data[collection] = {};
        if (!data[collection][entityId]) data[collection][entityId] = {};
        data[collection][entityId][property] = applyMath(data[collection][entityId][property], op);
    }
}

export const executor = {
    /**
     * 執行單一操作寫入
     */
    async executeOperation(operation: AttrOperation): Promise<void> {
        return this.executeAllOperations([operation]);
    },

    /**
     * 執行多個操作寫入 (依照 targetType 分組以減少讀寫次數)
     */
    async executeAllOperations(operations: AttrOperation[]): Promise<void> {
        // 只過濾出需要直接寫入的 (isdirect === true)
        const directOps = operations.filter(o => o.isdirect);

        const envOps = directOps.filter(o => o.targetType === 'environment');
        const playerOps = directOps.filter(o => o.targetType === 'player');
        const npcOps = directOps.filter(o => o.targetType === 'npc');

        if (envOps.length > 0) {
            const env = await mvuAdapter.readMvuVariable<any>('environment') || {};
            for (const op of envOps) {
                applyOpToData(env, op);
            }
            await mvuAdapter.writeMvuVariable('environment', env);
        }

        if (playerOps.length > 0) {
            const player = await mvuAdapter.readMvuVariable<any>('player') || {};
            for (const op of playerOps) {
                applyOpToData(player, op);
            }
            await mvuAdapter.writeMvuVariable('player', player);
        }

        if (npcOps.length > 0) {
            const npcs = await mvuAdapter.readMvuVariable<any>('npcs') || {};
            for (const op of npcOps) {
                if (!op.targetNpcId) continue;
                if (!npcs[op.targetNpcId]) npcs[op.targetNpcId] = {};
                applyOpToData(npcs[op.targetNpcId], op);
            }
            await mvuAdapter.writeMvuVariable('npcs', npcs);
        }
    },

    /**
     * 對從資料庫取出的 baseValue，應用一系列 isdirect=false 的狀態疊加，取得最終結果。
     * 計算優先順序: +,- -> * -> =,set
     */
    calculateFinalValue(baseValue: number, applicableEffects: AttrOperation[]): number {
        let finalValue = baseValue;
        
        const additiveOps = applicableEffects.filter(o => o.operator === '+' || o.operator === '-');
        const multiplicativeOps = applicableEffects.filter(o => o.operator === '*');
        const overrideOps = applicableEffects.filter(o => o.operator === '=' || o.operator === 'set');

        // 1. 加減法
        for (const op of additiveOps) {
            if (op.operator === '+') finalValue += Number(op.value);
            if (op.operator === '-') finalValue -= Number(op.value);
        }

        // 2. 乘法
        for (const op of multiplicativeOps) {
            finalValue *= Number(op.value);
        }

        // 3. 強制設定
        if (overrideOps.length > 0) {
            const lastOverride = overrideOps[overrideOps.length - 1];
            finalValue = Number(lastOverride.value);
        }

        return finalValue;
    }
};

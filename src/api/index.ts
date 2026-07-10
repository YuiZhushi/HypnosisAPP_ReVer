import { AttrCondition, AttrOperation, PlayerCoreData, EnvironmentData, MajorNpcState, ItemDef } from '@/models';
import { evaluator } from './evaluator';
import { executor } from './executor';
import { legacyApi } from './legacyApi';
import { mvuAdapter } from './mvuAdapter';

export const api = {
    // -----------------------------------
    // 條件與操作引擎
    // -----------------------------------
    checkConditions(conditions: AttrCondition[], matchMode: 'and' | 'or' = 'and'): Promise<boolean> {
        return evaluator.evaluateAllConditions(conditions, matchMode);
    },

    applyOperations(operations: AttrOperation[]): Promise<void> {
        return executor.executeAllOperations(operations);
    },

    /**
     * 讀取某個屬性，並自動疊加所有非直接寫入的 Buff 效果 (isdirect=false)
     */
    async getFinalStat(targetType: 'player' | 'npc' | 'environment', statName: string, npcId?: string): Promise<number> {
        let data: any = null;
        if (targetType === 'player') data = await mvuAdapter.readMvuVariable('player');
        if (targetType === 'environment') data = await mvuAdapter.readMvuVariable('environment');
        if (targetType === 'npc') {
            const npcs = await mvuAdapter.readMvuVariable<any>('npcs');
            if (npcs && npcId) data = npcs[npcId];
        }

        const baseValue = data ? (Number(data[statName]) || 0) : 0;

        // 這裡需要掃描現有啟動的狀態 (例如裝備、改造、催眠等)
        // 為了簡化，先預留接口。實際實作中，我們會從 player/npc 內找出 activeBodyModifications 等，
        // 將對應的 isdirect=false 操作傳入 calculateFinalValue。
        const activeEffects: AttrOperation[] = [];

        // 範例：從 player 讀取裝備效果
        // if (targetType === 'player' && data.equipment) { ...提取效果... }

        return executor.calculateFinalValue(baseValue, activeEffects);
    },

    // -----------------------------------
    // 高階資料讀取
    // -----------------------------------
    async getPlayerData(): Promise<PlayerCoreData | null> {
        return await mvuAdapter.readMvuVariable<PlayerCoreData>('player');
    },

    async getEnvironmentData(): Promise<EnvironmentData | null> {
        return await mvuAdapter.readMvuVariable<EnvironmentData>('environment');
    },

    async getNpcData(npcId: string): Promise<MajorNpcState | null> {
        const npcs = await mvuAdapter.readMvuVariable<Record<string, MajorNpcState>>('npcs') || {};
        return npcs[npcId] || null;
    },

    async getItemDef(itemId: string): Promise<ItemDef | null> {
        const items = await mvuAdapter.readChatVariable<Record<string, ItemDef>>('items') || {};
        return items[itemId] || null;
    },

    // -----------------------------------
    // 兼容舊 API 介面 (Settings, NpcBackground 等)
    // -----------------------------------
    legacy: legacyApi
};

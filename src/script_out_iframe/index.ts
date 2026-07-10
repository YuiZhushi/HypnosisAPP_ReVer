import { z } from 'zod';
import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';
import { Schema } from './schema';
import { defaultItems } from '../mock/defs/items';
import { defaultHypnosis } from '../mock/defs/hypnosis';
import { defaultLocations, defaultZones } from '../mock/defs/locations';
import { mockPosts } from '../mock/defs/posts';
import { mockMinorNpcs } from '../mock/defs/minorNpcs';
import { mockCalendarEvents } from '../mock/defs/calendar';
import { mockBodyParts } from '../mock/defs/bodyParts';
import { mockBodyMods } from '../mock/defs/bodyMods';
import { mockAchievementsAndQuests } from '../mock/defs/achievements';

$(() => {
    registerMvuSchema(Schema);
    console.log('[HypnosisAPP_ReVer] MVU Schema registered from outside iframe. Initialization delegated to mvu_zod.');

    // 同時初始化靜態的 Chat 變數庫 (不需要響應式的全域配置)
    const helper = (globalThis as any).TavernHelper;
    if (helper) {
        try {
            const chatVars = helper.getVariables({ type: 'chat' }) || {};
            
            if (!chatVars.items) {
                helper.updateVariablesWith((vars: any) => {
                    vars.items = Object.fromEntries(defaultItems.map(i => [i.id, i]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.hypnosis) {
                helper.updateVariablesWith((vars: any) => {
                    vars.hypnosis = Object.fromEntries(defaultHypnosis.map(h => [h.id, h]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.locations) {
                helper.updateVariablesWith((vars: any) => {
                    vars.locations = Object.fromEntries(defaultLocations.map(l => [l.id, l]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.zones) {
                helper.updateVariablesWith((vars: any) => {
                    vars.zones = Object.fromEntries(defaultZones.map(z => [z.id, z]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.posts) {
                helper.updateVariablesWith((vars: any) => {
                    vars.posts = Object.fromEntries(mockPosts.map(p => [p.id, p]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.minorNpcs) {
                helper.updateVariablesWith((vars: any) => {
                    vars.minorNpcs = Object.fromEntries(mockMinorNpcs.map(n => [n.id, n]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.calendarEvents) {
                helper.updateVariablesWith((vars: any) => {
                    vars.calendarEvents = Object.fromEntries(mockCalendarEvents.map(e => [e.id, e]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.bodyParts) {
                helper.updateVariablesWith((vars: any) => {
                    vars.bodyParts = Object.fromEntries(mockBodyParts.map(b => [b.id, b]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.bodyMods) {
                helper.updateVariablesWith((vars: any) => {
                    vars.bodyMods = Object.fromEntries(mockBodyMods.map(m => [m.id, m]));
                    return vars;
                }, { type: 'chat' });
            }

            if (!chatVars.achievementsAndQuests) {
                helper.updateVariablesWith((vars: any) => {
                    vars.achievementsAndQuests = Object.fromEntries(mockAchievementsAndQuests.map(a => [a.id, a]));
                    return vars;
                }, { type: 'chat' });
            }
            
            console.log('[HypnosisAPP_ReVer] 靜態 Chat 變數初始化完成。');
        } catch (e) {
            console.error('[HypnosisAPP_ReVer] 靜態 Chat 變數初始化失敗:', e);
        }
    }
});

import { BodyModificationDef } from '@/models';

export const mockBodyMods: BodyModificationDef[] = [
  {
    id: 'mod_cat_tail',
    name: '仿生貓尾植入',
    description: '在尾椎處植入仿生貓尾，增加新的敏感帶。',
    scope: 'global',
    bodyPartChanges: {
      add: [
        {
          id: 'bp_tail',
          name: '尾巴',
          isCustom: true,
          hasSensitivity: true,
          hasTightness: false,
          hasProficiency: false,
          canOrgasm: false,
          baseModSlots: 1,
          description: '後天植入的尾巴'
        }
      ]
    },
    loadCost: 10,
    isTemporary: false,
    installCost: [{ targetType: 'player', fixedStat: 'money', operator: '-', value: 45000, isdirect: true }],
    effect: [{ targetType: 'npc', fixedStat: 'lust', operator: '+', value: 10, isdirect: false }]
  },
  {
    id: 'mod_lactation',
    name: '泌乳改造',
    description: '改造胸部使其能源源不絕分泌具有催眠與安定效果的乳汁。',
    scope: 'local',
    targetParts: ['bp_chest'],
    loadCost: 5,
    isTemporary: false,
    installCost: [{ targetType: 'player', fixedStat: 'money', operator: '-', value: 30000, isdirect: true }],
    effect: [{
      targetType: 'npc',
      dynamicStat: { collection: 'bodyParts', entityId: 'bp_chest', property: 'sensitivity' },
      operator: '+',
      value: 20,
      isdirect: false
    }]
  }
];

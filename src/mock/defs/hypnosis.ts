import { HypnosisDef } from '@/models';

export const defaultHypnosis: HypnosisDef[] = [
  {
    id: 'trial_basic',
    name: '潛意識引導',
    description: '讓被催眠者無意識下遵循一個簡單指示。無法讓被催眠者做出主觀上不願意的行為。',
    isCustom: false,
    unlockcost: [],
    unlockconditions: [],
    usagecost: [
      { targetType: 'player', fixedStat: 'money', operator: '-', value: 500, isdirect: true },
      { targetType: 'player', fixedStat: 'mcEnergy', operator: '-', value: 5, isdirect: true }
    ],
    usageeffect: [
      { targetType: 'npc', fixedStat: 'alertness', operator: '-', value: 10, isdirect: true }
    ]
  },
  {
    id: 'vip1_truth_serum',
    name: '短期說謊禁止',
    description: '在生效期間內，被催眠者主動說話與回答問題時，沒辦法主動說謊，但可以保持沉默。',
    isCustom: false,
    unlockcost: [
      { targetType: 'player', fixedStat: 'mcPoints', operator: '-', value: 10, isdirect: true },
      { targetType: 'player', fixedStat: 'money', operator: '-', value: 1000, isdirect: true }
    ],
    unlockconditions: [],
    usagecost: [
      { targetType: 'player', fixedStat: 'mcEnergy', operator: '-', value: 4, isdirect: true }
    ]
  },
  {
    id: 'vip2_pleasure_grant',
    name: '快感賦予',
    description: '讓被催眠者的指定部位在指定時間內持續處於無來源的快感狀態。',
    isCustom: false,
    unlockcost: [
      { targetType: 'player', fixedStat: 'mcPoints', operator: '-', value: 50, isdirect: true },
      { targetType: 'player', fixedStat: 'money', operator: '-', value: 4500, isdirect: true }
    ],
    unlockconditions: [],
    usagecost: [
      { targetType: 'player', fixedStat: 'mcEnergy', operator: '-', value: 12, isdirect: true }
    ],
    usageeffect: [
      { targetType: 'npc', fixedStat: 'arousal', operator: '+', value: 20, isdirect: true }
    ]
  },
  {
    id: 'vip5_meat_puppet',
    name: '肉人偶化',
    description: '永久催眠。植入隱蔽的開關暗號，接收到暗號後瞬間切換成絕對服從且沒有自我意識的肉人偶模式。',
    isCustom: false,
    unlockcost: [
      { targetType: 'player', fixedStat: 'mcPoints', operator: '-', value: 1000, isdirect: true },
      { targetType: 'player', fixedStat: 'money', operator: '-', value: 150000, isdirect: true }
    ],
    unlockconditions: [],
    usagecost: [
      { targetType: 'player', fixedStat: 'mcEnergy', operator: '-', value: 5000, isdirect: true }
    ],
    usageeffect: [
      { targetType: 'npc', fixedStat: 'obedience', operator: '=', value: 100, isdirect: true }
    ]
  }
];

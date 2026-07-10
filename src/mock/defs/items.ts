import { ItemDef } from '@/models';

export const defaultItems: ItemDef[] = [
  {
    id: 'item_mc_potion_s',
    name: '低階能量藥水',
    description: '特製的能量飲料，飲用後可恢復些許MC精神力。',
    type: 'consumable',
    rarity: 'common',
    isCustom: false,
    isStackable: true,
    maxStack: 99,
    isSellable: true,
    purchase: {
      cost: [
        { targetType: 'player', fixedStat: 'money', operator: '-', value: 500, isdirect: true },
        { targetType: 'player', fixedStat: 'mcPoints', operator: '-', value: 2, isdirect: true }
      ]
    },
    consumable: {
      selfConsume: 1,
      effect: {
        description: '恢復 50 點 MC 能量。',
        operations: [{ targetType: 'player', fixedStat: 'mcEnergy', operator: '+', value: 50, isdirect: true }]
      },
      duration: 'onetime'
    }
  },
  {
    id: 'item_suspicion_remover',
    name: '避嫌噴霧',
    description: '特製的化學香水，噴灑後可以降低主角身上可疑的氣息，平息懷疑。',
    type: 'consumable',
    rarity: 'rare',
    isCustom: false,
    isStackable: true,
    maxStack: 10,
    isSellable: true,
    purchase: {
      cost: [
        { targetType: 'player', fixedStat: 'money', operator: '-', value: 2000, isdirect: true },
        { targetType: 'player', fixedStat: 'mcPoints', operator: '-', value: 5, isdirect: true }
      ]
    },
    consumable: {
      selfConsume: 1,
      effect: {
        description: '使主角的可疑度降低 10%。',
        operations: [{ targetType: 'player', fixedStat: 'suspicion', operator: '-', value: 10, isdirect: true }]
      },
      duration: 'onetime'
    }
  },
  {
    id: 'item_vip_card_passive',
    name: 'VIP尊榮卡',
    description: '放在背包中即可生效，使您在購買手機模組或商店交易時享有 9 折優惠。',
    type: 'passive',
    rarity: 'epic',
    isCustom: false,
    isStackable: false,
    isSellable: false,
    purchase: {
      cost: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '-', value: 50, isdirect: true }]
    }
  },
  {
    id: 'item_eye_mask',
    name: '睡眠眼罩',
    description: '柔軟且完全遮光的眼罩。戴上後能阻斷視覺，讓目標產生不安與感官放大效果。',
    type: 'equipment',
    rarity: 'common',
    isCustom: false,
    isStackable: false,
    isSellable: true,
    purchase: {
      cost: [{ targetType: 'player', fixedStat: 'money', operator: '-', value: 800, isdirect: true }]
    },
    equippable: {
      specifyslot: 'eye',
      effect: {
        description: '大幅降低警戒度增加速度，並在催眠中增加其服從。'
      }
    }
  }
];

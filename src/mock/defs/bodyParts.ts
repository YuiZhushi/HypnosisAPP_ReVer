import { BodyPartsDef } from '@/models';

export const mockBodyParts: BodyPartsDef[] = [
  {
    id: 'bp_head',
    name: '頭部',
    isCustom: false,
    hasSensitivity: true,
    hasTightness: false,
    hasProficiency: false,
    canOrgasm: false,
    baseModSlots: 1,
    description: '包含臉部與頭髮'
  },
  {
    id: 'bp_chest',
    name: '胸部',
    isCustom: false,
    hasSensitivity: true,
    hasTightness: false,
    hasProficiency: true,
    canOrgasm: false,
    baseModSlots: 2,
    description: '女性特徵之一'
  },
  {
    id: 'bp_crotch',
    name: '下體',
    isCustom: false,
    hasSensitivity: true,
    hasTightness: true,
    hasProficiency: true,
    canOrgasm: true,
    baseModSlots: 3,
    description: '最重要的敏感部位'
  },
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
];

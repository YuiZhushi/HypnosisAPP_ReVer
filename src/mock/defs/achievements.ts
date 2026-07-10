import { AchievementOrQuestDef } from '@/models';

export const mockAchievementsAndQuests: AchievementOrQuestDef[] = [
  // Achievements
  {
    id: 'ach_newbie',
    name: '初次接触',
    dataType: 'achievement',
    isCustom: false,
    description: '累计消耗超过 10 点 MC 能量。',
    completionCondition: {
      type: 'program',
      conditions: [{ targetType: 'player', fixedStat: 'totalConsumedMc', operator: '>=', value: 10 }],
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 5, isdirect: true }],
  },
  {
    id: 'ach_vip2',
    name: '进阶会员',
    dataType: 'achievement',
    isCustom: false,
    description: '解锁 VIP 2 权限 (累计消耗 100 MC)。',
    completionCondition: {
      type: 'program',
      conditions: [{ targetType: 'player', fixedStat: 'totalConsumedMc', operator: '>=', value: 100 }],
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 20, isdirect: true }],
  },
  {
    id: 'ach_rich',
    name: '资金充裕',
    dataType: 'achievement',
    isCustom: false,
    description: '持有金钱超过 50,000 円。',
    completionCondition: {
      type: 'program',
      conditions: [{ targetType: 'player', fixedStat: 'money', operator: '>=', value: 50000 }],
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 10, isdirect: true }],
  },
  {
    id: 'ach_sus',
    name: '隐秘行动',
    dataType: 'achievement',
    isCustom: false,
    description: '将可疑度控制在 5% 以下。',
    completionCondition: {
      type: 'program',
      conditions: [{ targetType: 'player', fixedStat: 'suspicion', operator: '<=', value: 5 }],
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 50, isdirect: true }],
  },

  // Quests
  {
    id: 'quest_naked_public_no_hypno',
    name: '清醒的裸露',
    dataType: 'quest',
    description: '在不催眠的情况下让角色在有他人的地方全裸。',
    isCustom: false,
    completionCondition: {
      type: 'ai',
      description: '在不催眠的情况下让角色在有他人的地方全裸。',
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 50, isdirect: true }],
  },
  {
    id: 'quest_cuckold_request',
    name: '绿帽请求',
    dataType: 'quest',
    description: '让阿宅君请求你跟爱丽莎发生关系。',
    isCustom: false,
    completionCondition: {
      type: 'ai',
      description: '让阿宅君请求你跟爱丽莎发生关系。',
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 40, isdirect: true }],
  },
  {
    id: 'quest_placebo_hypno',
    name: '安慰剂效应',
    dataType: 'quest',
    description: '让一名没被催眠的角色以为自己被催眠了。',
    isCustom: false,
    completionCondition: {
      type: 'ai',
      description: '让一名没被催眠的角色以为自己被催眠了。',
    },
    reward: [{ targetType: 'player', fixedStat: 'mcPoints', operator: '+', value: 30, isdirect: true }],
  }
];

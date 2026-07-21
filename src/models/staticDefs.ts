import { AttrCondition, AttrOperation, PeriodicEffect } from './core';

export type ItemType = 'consumable' | 'equipment' | 'material' | 'passive';
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type TagDef = string;

// ==========================================
// 身分定義 (IdentityDef)
// ==========================================
export interface IdentityDef {
  id: string;
  name: string;
  description: string;
}

// ==========================================
// 催眠術定義
// ==========================================
export interface HypnosisDef {
  id: string;
  name: string;
  isCustom: boolean;

  unlock: {
    unlockConditions?: AttrCondition[];
    matchMode?: 'and' | 'or';
  };

  usage: {
    usageConditions?: AttrCondition[];
    matchMode?: 'and' | 'or';
  };

  description: string;

  PlotTag?: TagDef[]; // 輔助 AI 描述用的標籤 (參照 TagDef id)

  PeriodicEffect?: PeriodicEffect;
}

// ==========================================
// 物品定義
// ==========================================
export interface ItemDef {
  id: string;
  name: string;
  description: string;
  type: ItemType;
  rarity: ItemRarity;
  isCustom: boolean;
  isStackable: boolean;
  maxStack?: number;

  purchase?: {
    conditions?: AttrCondition[];
    matchMode?: 'and' | 'or';
  };

  craft?: {
    conditions?: AttrCondition[];
    matchMode?: 'and' | 'or';
  };

  consumable?: {
    selfConsume: number;
    extraCost?: AttrOperation[];
    effect: {
      description: string;
      operations?: AttrOperation[];
    };
    duration?: number | 'onetime' | 'permanent';
  };

  equippable?: {
    maxActivationsTimes?: number;
    specifyslot?: string;
    effect?: {
      description: string;
      operations?: AttrOperation[];
    };
  };

  ExtraEffects?: AttrOperation[];
  maxExtraEffectsctivationsTimes?: number;

  PeriodicEffect?: PeriodicEffect;

  PlotTag?: TagDef[]; // 輔助 AI 描述用的標籤 (參照 TagDef id)

  isSellable: boolean;
  sellEffects?: AttrOperation[];
}

// ==========================================
// 身體部位定義
// ==========================================
export interface BodyPartsDef {
  id: string;
  parentId?: string;
  name: string;
  isCustom: boolean;
  hasSensitivity?: boolean;
  hasTightness?: boolean;
  hasProficiency?: boolean;
  canOrgasm?: boolean;
  baseModSlots: number;
  description: string;
}

// ==========================================
// 身體改造定義
// ==========================================
export interface BodyModificationDef {
  id: string;
  name: string;
  description: string;
  scope: 'global' | 'local';
  targetParts?: string[];

  bodyPartChanges?: {
    add?: BodyPartsDef[];
    remove?: string[];
  };

  loadCost: number;
  isTemporary: boolean;

  unlockConditions?: AttrCondition[];
  installConditions?: AttrCondition[];
  installCost: AttrOperation[];
  effect: AttrOperation[];

  ExtraEffects?: AttrOperation[];
  PeriodicEffect?: PeriodicEffect;

  PlotTag?: TagDef[]; // 輔助 AI 描述用的標籤 (參照 TagDef id)
}

// ==========================================
// 地點/區域/路徑定義
// ==========================================
export interface EdgePathState {
  status: 'open' | 'temporary' | 'locked';
  description: string;

  travelCost?: AttrOperation[];

  unlock?: {
    unlockConditions?: AttrCondition[];
    matchMode?: 'and' | 'or';
  };

  temporary?: {
    temporaryConditions?: AttrCondition[];
    matchMode?: 'and' | 'or';
  };
}

export interface Zone {
  id: string;
  name: string;
  description: string;
  displayStatus: 'visible' | 'undiscovered' | 'owned' | 'locked' | 'hidden';
}

export interface Area {
  id: string;
  name: string;
  description: string;
  zoneId: string;
  displayStatus: 'visible' | 'undiscovered' | 'owned' | 'locked' | 'hidden';

  parentId?: string; // 隸屬的父級區域 ID (層級設計)
  connections: Record<string, EdgePathState>;

  unlock?: {
    unlockConditions?: AttrCondition[];
    unlockMatchMode?: 'and' | 'or';
  };

  discovery?: {
    discoveryConditions?: AttrCondition[];
    discoveryMatchMode?: 'and' | 'or';
  };
}

export interface LocationNode {
  id: string;
  name: string;
  description: string;
  areaId: string;
  displayStatus: 'visible' | 'undiscovered' | 'owned' | 'locked' | 'hidden';

  parentId?: string; // 隸屬的父級地點 ID (層級設計)
  connections: Record<string, EdgePathState>;

  unlock?: {
    unlockConditions?: AttrCondition[];
    unlockMatchMode?: 'and' | 'or';
  };

  purchase?: {
    purchaseCost?: AttrOperation[];
    purchaseConditions?: AttrCondition[];
    purchaseMatchMode?: 'and' | 'or';
  };

  discovery?: {
    discoveryConditions?: AttrCondition[];
    discoveryMatchMode?: 'and' | 'or';
  };
}

// ==========================================
// 節日/行事曆定義
// ==========================================
export interface CalendarEvent {
  id: string;
  name: string;
  startDateTime: string;
  endDateTime: string;
  isCustom: boolean;
  isHoliday: boolean;
  description: string;

  effect?: AttrOperation[];
}

// ==========================================
// 成就/任務定義
// ==========================================
export interface AchievementOrQuestDef {
  id: string;
  name: string;
  dataType: 'achievement' | 'quest';
  description: string;
  isCustom: boolean;
  completionCondition: {
    type: 'program' | 'ai';
    description?: string;
    conditions?: AttrCondition[];
  };
  reward: AttrOperation[];
}

// ==========================================
// 貼子資料
// ==========================================
export interface CommentReply {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
}

export interface PostComment {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  replies: CommentReply[];
}

export interface PostData {
  id: string;
  boardType: 'discussion' | 'chat' | 'help' | 'showcase';
  authorId: string;
  title: string;
  content: string;
  createdAt: string;
  comments: PostComment[];
}

// ==========================================
// 聊天資料
// ==========================================
export interface ChatMessage {
  id: string;
  senderId: string;
  replyToId?: string;
  content: string;
  createdAt: string;
}

export interface ChatRecord {
  id: string;
  title: string;
  createdAt: string;
  chatType: 'single' | 'group';
  messages: ChatMessage[];
}

// ==========================================
// 主要NPC世界書資料
// ==========================================
// 注意：yaml 與 EJSnode 型別來自 legacyInterfaces
import { EJSnode, yaml } from './legacyInterfaces';

export interface CharacterBackgroundData {
  basic: yaml;
  behavior: Record<string, EJSnode[]>;
}

// ==========================================
// OS運作所需背景資料
// ==========================================
export interface MockApiSettings {
  apiEndpoint: string;
  apiKey: string;
  modelName: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  presencePenalty: number;
  frequencyPenalty: number;
  streamMode: 'non_streaming' | 'streaming' | 'fake_streaming';
}

export interface OSBackgroundData {
  apiSettings: MockApiSettings;
}

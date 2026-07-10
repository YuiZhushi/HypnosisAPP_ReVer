import { AttrOperation } from './core';

// ==========================================
// 環境資料 (EnvironmentData)
// ==========================================
export interface EnvironmentData {
  virtualTime: string;
  year: string;
  month: string;
  week: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  season: string;
  holidayId: string;
  weather: string;
  achievementProgress: Record<string, { claimed: boolean }>;
  questProgress: Record<string, { status: 'accepted' | 'completed' | 'claimed' }>;
}

// ==========================================
// 獨立子狀態
// ==========================================
export interface LocationDiscoveryState {
  discoveredAt?: string;
  isOwnedProperty: boolean;
  customNotes?: string;
}

export interface HypnosisOwnedState {
  enabled: boolean;
  unlockedAt?: string;
}

export interface BodyModOwnedState {
  enabled: boolean;
  unlockedAt?: string;
}

export interface ActiveBodyModState {
  installedVirtualTime: string;
  TempEndTime?: number;
  isActive: boolean;
  description?: string;
}

export interface InventoryItemState {
  isEnable: boolean;
  quantity: number;
  description?: string;
}

export interface EquipmentItemStat {
  isEnable: boolean;
  occupyslot: string;
  isCountAsOccupy: boolean;
  description?: string;
}

export interface HypnosisEffectState {
  installedVirtualTime: string;
  hypnosisType: number | 'permanent' | 'oneTime';
  isEnable: boolean;
  description?: string;
}

export type PlayerBodyPartStat = Record<string, number>;
export type NpcBodyPartStat = Record<string, number>;

export interface NpcLocationState {
  locationId: string;
  locationStatus: string;
}

// ==========================================
// 玩家資料 (PlayerCoreData)
// ==========================================
export interface PlayerCoreData {
  userName: string;
  money: number;
  mcEnergy: number;
  mcEnergyMax: number;
  mcPoints: number;
  totalConsumedMc: number;
  vipTier: number;
  vipEndVirtualMinutes: number;
  vipAutoRenew: boolean;
  suspicion: number;
  currentLocationId: string;

  discoveredLocations: Record<string, LocationDiscoveryState>;
  ownedHypnosis: Record<string, HypnosisOwnedState>;
  ownedBodyModifications: Record<string, BodyModOwnedState>;

  bodyParts: Record<string, PlayerBodyPartStat>;
  inventory: Record<string, InventoryItemState>;
  equipment: Record<string, EquipmentItemStat>;
  activeBodyModifications: Record<string, ActiveBodyModState>;
  activeHypnosisEffects: Record<string, HypnosisEffectState>;
}

// ==========================================
// 主要NPC資料 (MajorNpcState)
// ==========================================
export interface MajorNpcState {
  id: string;
  name: string;
  identities: string[];

  alertness: number;
  affection: number;
  obedience: number;
  lust: number;
  arousal: number;

  bodyParts: Record<string, NpcBodyPartStat>;
  inventory: Record<string, InventoryItemState>;
  equipment: Record<string, EquipmentItemStat>;
  activeBodyModifications: Record<string, ActiveBodyModState>;
  activeHypnosisEffects: Record<string, HypnosisEffectState>;

  locationState?: NpcLocationState;
}

// ==========================================
// 不重要NPC資料 (MinorNpcState)
// ==========================================
export interface MinorNpcState {
  id: string;
  name: string;
  identities?: string[];
  gender?: string;
  description?: string;
  locationId?: string;
}

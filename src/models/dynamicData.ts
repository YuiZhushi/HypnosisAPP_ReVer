// ==========================================
// 環境資料獨立子狀態
// ==========================================

export interface achievementProgress {
  claimed: boolean;
}

export interface questProgress {
  status: 'accepted' | 'completed' | 'claimed';
}

export interface LocationOwenedItemsState {
  quantity: number;
  description?: string;
}

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
  achievementProgress: Record<string, achievementProgress>;
  questProgress: Record<string, questProgress>;
  LocationsOwenedItems: Record<string, LocationOwenedItemsState>;
}

// ==========================================
// 玩家資料與NPC資料獨立子狀態
// ==========================================
export interface LocationDiscoveryState {
  discoveredAt?: string;
  isOwnedProperty: boolean;
  customNotes?: string;
}

export interface GradeState {
  academicability: string;

  japanese: number;
  english: number;
  math: number;
  science: number;
  history: number;
  music: number;
  art: number;
  computerscience: number;
  homeeconomics: number;
  pe: number;
  health: number;
}

export interface HypnosisOwnedState {
  enabled: boolean;
  unlockedAt?: string;
}

export interface BodyModOwnedState {
  enabled: boolean;
  unlockedAt?: string;
}

// (IdentitiesDescription 已移至 staticDefs.ts 作為靜態定義，此處動態資料僅儲存 string[])

export interface ActiveBodyModState {
  installedVirtualTime: string;
  TempEndTime?: number;
  isActive: boolean;
  description?: string;
}

export interface InventoryItemState {
  activatedTimes?: number;
  isEnable: boolean;
  quantity: number;
  description?: string;
}

export interface EquipmentItemStat {
  activatedTimes?: number;
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

// ==========================================
// 玩家資料 (PlayerCoreData)
// ==========================================
export interface PlayerCoreData {
  userName: string;
  gender: 'male' | 'female' | 'other' | string;
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

  identities: string[];
  grade: Record<string, GradeState>;

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
  gender: 'male' | 'female' | 'other' | string;
  identities: string[];

  alertness: number;
  affection: number;
  obedience: number;
  lust: number;
  Licentiousness: number;

  bodyParts: Record<string, NpcBodyPartStat>;
  inventory: Record<string, InventoryItemState>;
  equipment: Record<string, EquipmentItemStat>;
  activeBodyModifications: Record<string, ActiveBodyModState>;
  activeHypnosisEffects: Record<string, HypnosisEffectState>;

  locationId?: string;
  locationStatus?: string;
}

// ==========================================
// 不重要NPC資料 (MinorNpcState)
// ==========================================
export interface MinorNpcState {
  id: string;
  name: string;
  identities?: string[];
  gender?: 'male' | 'female' | 'other' | string;
  description?: string;
  locationId?: string;
  locationStatus?: string;
}

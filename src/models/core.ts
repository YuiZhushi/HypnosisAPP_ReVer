// ==========================================
// 固定屬性名稱 (鍵名不會隨實例而改變)
// ==========================================
export type PlayerFixedStat =
  | 'gender' | 'identities'
  | 'money' | 'mcEnergy' | 'mcEnergyMax' | 'mcPoints' | 'totalConsumedMc' | 'suspicion' | 'vipTier'
  | 'suspicion' | 'currentLocationId';

export type NpcFixedStat =
  | 'gender' | 'identities'
  | 'alertness' | 'affection' | 'obedience' | 'lust' | 'Licentiousness'
  | 'locationId';

export type EnvironmentStat =
  | 'virtualTime' | 'weather'
  | 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'season' | 'holidayId';

// ==========================================
// 動態屬性路徑
// ==========================================
export interface DynamicStatPath {
  collection: 'achievementProgress' | 'questProgress' | 'LocationsOwenedItems'
  | 'discoveredLocations' | 'ownedHypnosis' | 'ownedBodyModifications'
  | 'grade'
  | 'bodyParts' | 'inventory' | 'equipment' | 'activeBodyModifications' | 'activeHypnosisEffects';
  entityId: string;
  property: string;
}

// ==========================================
// 屬性操作 (AttrOperation)
// ==========================================
export interface AttrOperation {
  targetType: 'player' | 'npc' | 'environment';
  targetNpcId?: string;
  isdirect: boolean;

  fixedStat?: PlayerFixedStat | NpcFixedStat | EnvironmentStat;
  dynamicStat?: DynamicStatPath;

  operator: '+' | '-' | '*' | '=' | 'set' | 'push' | 'remove' | 'toggle'; // 新增陣列操作
  value: number | string | boolean | string[]; // 支援字串陣列
}

// ==========================================
// 屬性判定 (AttrCondition)
// ==========================================
export interface AttrCondition {
  targetType: 'player' | 'npc' | 'environment';
  targetNpcId?: string | 'all_if' | 'any_if'; // 若為 all_if，則會遍歷所有npc進行判斷。新增 any_if 表示任意 NPC 滿足即可

  fixedStat?: PlayerFixedStat | NpcFixedStat | EnvironmentStat;
  dynamicStat?: DynamicStatPath;

  operator?: '==' | '!=' | '>=' | '<=' | '>' | '<' | 'contains' | 'contains_any' | 'contains_all' | 'not_contains'; // 新增陣列專用運算子
  value?: number | string | boolean | string[]; // 支援字串陣列

  // ==========================================
  // 條件附帶花費支援
  // ==========================================
  subCost?: AttrOperation[];

  // ==========================================
  // 複合條件與子條件支援
  // ==========================================
  subConditions?: AttrCondition[];
  subMatchMode?: 'and' | 'or';
}

// ==========================================
// 週期效果
// ==========================================
export interface PeriodicEffect {
  isOneTime: boolean;
  interval?: number;
  duration?: number;
  effect: AttrOperation[];
}

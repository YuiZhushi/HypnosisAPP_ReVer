// ==========================================
// 固定屬性名稱 (鍵名不會隨實例而改變)
// ==========================================
export type PlayerFixedStat =
  | 'money' | 'mcEnergy' | 'mcEnergyMax' | 'mcPoints'
  | 'totalConsumedMc' | 'suspicion' | 'vipTier'
  | 'currentLocationId';

export type NpcFixedStat =
  | 'alertness' | 'affection' | 'obedience' | 'lust' | 'arousal'
  | 'locationId';

export type EnvironmentStat =
  | 'virtualTime' | 'weather'
  | 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'season' | 'holidayId';

// ==========================================
// 動態屬性路徑
// ==========================================
export interface DynamicStatPath {
  collection: 'bodyParts' | 'inventory' | 'equipment' | 'activeBodyModifications' | 'activeHypnosisEffects';
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

  operator: '+' | '-' | '*' | '=' | 'set';
  value: number | string | boolean;
}

// ==========================================
// 屬性判定 (AttrCondition)
// ==========================================
export interface AttrCondition {
  targetType: 'player' | 'npc' | 'environment';
  targetNpcId?: string;

  fixedStat?: PlayerFixedStat | NpcFixedStat | EnvironmentStat;
  dynamicStat?: DynamicStatPath;

  operator: '==' | '!=' | '>=' | '<=' | '>' | '<';
  value: number | string | boolean;
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

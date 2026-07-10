export type yaml = any;
export type operator = '<' | '<=' | '>=' | '>' | '==' | 'else';

export interface EJSnode {
  logic: {
    operator: operator;
    value?: number;
  };
  contant: yaml;
}

export interface PromptTemplate {
  id: string;
  name: string;
  content: string;
  isSystem: boolean;
}

// 用於 App.tsx 啟用的舊有型別，直到它們被重構完畢
export interface MockUserData {
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
  ownedHypnoModules: any;
  ownedHypnosis: any;
  ownedCombos: any;
  ownedAchievements: any;
  ownedQuests: any;
  inventory: any;
  effectiveVipTier: number;
}

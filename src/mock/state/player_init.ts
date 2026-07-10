import { PlayerCoreData } from '@/models';

export const initialPlayerState: PlayerCoreData = {
  userName: '主角',
  money: 5000,
  mcEnergy: 100,
  mcEnergyMax: 100,
  mcPoints: 0,
  totalConsumedMc: 0,
  vipTier: 3,
  vipEndVirtualMinutes: 0,
  vipAutoRenew: false,
  suspicion: 0,
  currentLocationId: 'loc_home_room',
  discoveredLocations: {
    'loc_home_room': { isOwnedProperty: true },
    'loc_school_gate': { isOwnedProperty: false }
  },
  ownedHypnosis: {},
  ownedBodyModifications: {},
  bodyParts: {
    'head': { sensitivity: 10 },
    'chest': { sensitivity: 10 },
    'crotch': { sensitivity: 10 }
  },
  inventory: {
    'item_old_key': { isEnable: true, quantity: 1 }
  },
  equipment: {},
  activeBodyModifications: {},
  activeHypnosisEffects: {},
};

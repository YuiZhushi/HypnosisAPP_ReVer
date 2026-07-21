import { PlayerCoreData } from '@/models';

export const initialPlayerState: PlayerCoreData = {
  userName: '主角',
  gender: 'male',
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
  identities: [],
  grade: {
    'grade_secondary_school_1_1': {
      academicability: 'G',
      japanese: 0,
      english: 0,
      math: 0,
      science: 0,
      history: 0,
      music: 0,
      art: 0,
      computerscience: 0,
      homeeconomics: 0,
      pe: 0,
      health: 0
    },
  },
  ownedHypnosis: {},
  ownedBodyModifications: {},
  bodyParts: {
    'bp_head': {},
    'bp_head_hair': {},
    'bp_head_eyes': {},
    'bp_head_ears': { sensitivity: 10, orgasms: 0 },
    'bp_head_nose': { sensitivity: 10 },
    'bp_head_mouth': { sensitivity: 10, tightness: 10, proficiency: 0, orgasms: 0 },
    'bp_head_face': {},
    'bp_arms_left': { proficiency: 0 },
    'bp_arms_right': { proficiency: 0 },
    'bp_legs_left': { proficiency: 0 },
    'bp_legs_right': { proficiency: 0 },
    'bp_torso': {},
    'bp_torso_abdomen_lower_bladder': { sensitivity: 10, orgasms: 0 },
    'bp_torso_pelvis_male_penis': { sensitivity: 10, tightness: 0, proficiency: 0, orgasms: 0 },
    'bp_torso_pelvis_male_testicles': { sensitivity: 10 },
    'bp_torso_pelvis_anus': { sensitivity: 10, tightness: 10, proficiency: 0, orgasms: 0 }
  },
  inventory: {
    'item_old_key': { isEnable: true, quantity: 1 }
  },
  equipment: {},
  activeBodyModifications: {},
  activeHypnosisEffects: {},
};

import { MajorNpcState } from '@/models';

export const initialMajorNpcState: MajorNpcState[] = [
  {
    id: 'npc_alisa',
    name: '愛麗莎',
    identities: ['student', 'classmate'],
    alertness: 50,
    affection: 10,
    obedience: 0,
    lust: 0,
    arousal: 0,
    bodyParts: {
      'head': { sensitivity: 10 },
      'chest': { sensitivity: 20 },
      'crotch': { sensitivity: 30 }
    },
    inventory: {},
    equipment: {},
    activeBodyModifications: {},
    activeHypnosisEffects: {},
    locationState: {
      locationId: 'loc_school_classroom',
      locationStatus: 'idle'
    }
  },
  {
    id: 'npc_teacher_sayuri',
    name: '小百合',
    identities: ['teacher'],
    alertness: 60,
    affection: 5,
    obedience: 0,
    lust: 0,
    arousal: 0,
    bodyParts: {
      'head': { sensitivity: 10 },
      'chest': { sensitivity: 15 },
      'crotch': { sensitivity: 25 }
    },
    inventory: {},
    equipment: {},
    activeBodyModifications: {},
    activeHypnosisEffects: {},
    locationState: {
      locationId: 'loc_school_office',
      locationStatus: 'working'
    }
  }
];

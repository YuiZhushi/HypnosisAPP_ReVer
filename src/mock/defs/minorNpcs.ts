import { MinorNpcState } from '@/models';

export const mockMinorNpcs: MinorNpcState[] = [
  {
    id: 'npc_student_a',
    name: '男學生A',
    identities: ['student'],
    gender: 'male',
    description: '普通的路人男學生',
    locationState: {
      locationId: 'loc_school_gate',
      locationStatus: 'loitering',
    },
  },
  {
    id: 'npc_student_b',
    name: '女學生B',
    identities: ['student'],
    gender: 'female',
    description: '普通的路人女學生',
    locationState: {
      locationId: 'loc_school_classroom',
      locationStatus: 'in_class',
    },
  },
  {
    id: 'npc_shop_clerk',
    name: '便利商店店員',
    identities: ['clerk'],
    gender: 'female',
    description: '總是看起來很累的店員',
    locationState: {
      locationId: 'loc_convenience_store',
      locationStatus: 'working',
    },
  },
];

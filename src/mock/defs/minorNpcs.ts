import { MinorNpcState } from '@/models';

export const mockMinorNpcs: MinorNpcState[] = [
  {
    id: 'npc_student_a',
    name: '男學生A',
    identities: ['student'],
    gender: 'male',
    description: '普通的路人男學生',
    locationId: 'loc_school_gate'
  },
  {
    id: 'npc_student_b',
    name: '女學生B',
    identities: ['student'],
    gender: 'female',
    description: '普通的路人女學生',
    locationId: 'loc_school_classroom'
  },
  {
    id: 'npc_shop_clerk',
    name: '便利商店店員',
    identities: ['clerk'],
    gender: 'female',
    description: '總是看起來很累的店員',
    locationId: 'loc_convenience_store'
  }
];

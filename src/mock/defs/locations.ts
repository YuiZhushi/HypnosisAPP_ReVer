import { LocationNode, Zone } from '../../models';

export const defaultZones: Zone[] = [
  { id: 'zone_school', name: '學校', description: '主要的校園區域' }
];

export const defaultLocations: LocationNode[] = [
  {
    id: 'loc_classroom_1a',
    name: '1A 教室',
    description: '普通的教室',
    zoneId: 'zone_school',
    displayStatus: 'visible',
    connections: {}
  }
];

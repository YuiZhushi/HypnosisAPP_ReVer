import { CalendarEvent } from '@/models';

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: 'evt_school_2027_01_0',
    name: '元旦(祝日)',
    startDateTime: '2027-01-01T00:00:00Z',
    endDateTime: '2027-01-01T23:59:59Z',
    isCustom: false,
    isHoliday: true,
    description: '學校行事曆: 元旦(祝日)',
  },
  {
    id: 'evt_school_2027_02_14',
    name: '情人节',
    startDateTime: '2027-02-14T00:00:00Z',
    endDateTime: '2027-02-14T23:59:59Z',
    isCustom: false,
    isHoliday: false,
    description: '學校行事曆: 情人节',
  },
  {
    id: 'evt_school_2026_04_01',
    name: '愚人节',
    startDateTime: '2026-04-01T00:00:00Z',
    endDateTime: '2026-04-01T23:59:59Z',
    isCustom: false,
    isHoliday: false,
    description: '學校行事曆: 愚人节',
  },
  {
    id: 'evt_school_2026_08_13',
    name: '盂兰盆节',
    startDateTime: '2026-08-13T00:00:00Z',
    endDateTime: '2026-08-16T23:59:59Z',
    isCustom: false,
    isHoliday: true,
    description: '學校行事曆: 盂兰盆节',
  },
  {
    id: 'evt_school_2026_12_25',
    name: '圣诞节/寒假开始',
    startDateTime: '2026-12-25T00:00:00Z',
    endDateTime: '2026-12-25T23:59:59Z',
    isCustom: false,
    isHoliday: true,
    description: '學校行事曆: 圣诞节/寒假开始',
  }
];

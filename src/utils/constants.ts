export interface NavPageType {
  name: string;
  href: string;
  description: string;
  lastUpdateTime?: Date;
  disable: boolean;
}
export interface SidePageType {
  name: string;
  href: string;
  description: string;
  disable: boolean;
}

export const navPages: NavPageType[] = [
  {
    name: '德田生活',
    href: '/life',
    // href: '/life/information',
    description: '德田館是資工社畜的家，每當考試前夕，總是聚集許多捲捲人，通宵在新館把所有人捲爆。',
    disable: false,
  },
  {
    name: '課程評價網',
    href: '/rate',
    description: '歷年課程的回饋與評價，可以在選課前參考參考。',
    // lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
  },
  {
    name: '課程資料庫',
    href: '/database',
    description: '考古題資料庫。',
    // lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
  },
  {
    name: '教授訪談',
    href: '/interview',
    description: '系上教授訪談。',
    lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
  },
];

export const sidePages: SidePageType[] = [
  {
    name: '德田生活',
    href: '/life',
    description: '德田館是資工社畜的家，每當考試前夕，總是聚集許多捲捲人，通宵在新館把所有人捲爆。',
    disable: false,
  },
  {
    name: '課程評價網',
    href: '/rate',
    description: '歷年課程的回饋與評價，可以在選課前參考參考。',
    // lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
  },
  {
    name: '課程資料庫',
    href: '/database',
    description: '考古題資料庫。',
    // lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
  },
  {
    name: '教授訪談',
    href: '/interview',
    description: '系上教授訪談。',
    lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
  },
];

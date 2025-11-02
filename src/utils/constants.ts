import { env } from '@/env';

export type TabItem =
  | { type: 'text'; label: string }
  | { type: 'image'; icon: string; alt: string };

export interface CommentLink {
  label: string;
  href: string;
}

export interface CommentItem {
  title: string;
  content: string | CommentLink;
}

export type CommentType = CommentItem | CommentItem[];

export interface HomePageType {
  name: string;
  href: string;
  description: string;
  lastUpdateTime?: Date;
  disable: boolean;
  gif: string;
}

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
  lastUpdateTime?: Date;
}

export interface SettingOption {
  id: string;
  label: string;
  description?: string;
  enabled: boolean;
}

export const homePages: HomePageType[] = [
  {
    name: '德田生活',
    href: '/life',
    // href: '/life/information',
    description:
      '德田館是資工社畜的家，每當考試前夕，總是聚集許多捲捲人，通宵在新館把所有人捲爆。',
    disable: false,
    gif: '/activities/azalea.png',
  },
  {
    name: '課程評價網',
    href: '/rate',
    description: '歷年課程的回饋與評價，可以在選課前參考參考。',
    // lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: !env.NEXT_PUBLIC_ENABLE_DEVELOPING_PAGES,
    gif: '/activities/bbq.png',
  },
  {
    name: '課程資料庫',
    href: '/database',
    description: '考古題資料庫。',
    // lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: !env.NEXT_PUBLIC_ENABLE_DEVELOPING_PAGES,
    gif: '/activities/camp.png',
  },
  {
    name: '教授訪談',
    href: '/interview',
    description: '系上教授訪談。',
    lastUpdateTime: new Date('August 11, 2024 08:57:00'),
    disable: false,
    gif: '/activities/chicken.png',
  },
];

export const lifePages: NavPageType[] = [
  {
    name: '教授及幹事訪談',
    href: '/life/interview',
    description: '資工系師長對新生的建議與期許。',
    disable: false,
  },
  {
    name: '系學會',
    href: '/life/council',
    description:
      '資工系學會介紹，可以了解各部會的職責、舉辦的活動、以及運動系隊等等。',
    disable: false,
  },
  {
    name: '課程資訊',
    href: '/life/course/0',
    description: '大一必修及適合大一的部分系選修介紹，可以了解上課方式與內容。',
    disable: false,
  },
  {
    name: '生活資訊',
    href: '/life/information/facility',
    description:
      '介紹資工系學生日常生活會接觸到的各種資源，包含系館空間、網路服務、輔導資源、附近美食等等。',
    disable: false,
  },
];

export const sidePages: SidePageType[] = [
  {
    name: '德田生活',
    href: '/life',
    description:
      '德田館是資工社畜的家，每當考試前夕，總是聚集許多捲捲人，通宵在新館把所有人捲爆。',
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

export enum SidebarOptionKey {
  INTERVIEW = 'interview',
  COUNCIL = 'council',
  SPACE = 'space',
  COURSE = 'course',
  INFORMATION = 'information',
}

export const SettingOptions: SettingOption[] = [
  {
    id: 'dark_mode',
    label: 'Enable Dark Mode',
    //description: 'Toggles the user interface to a dark theme.',
    enabled: true,
  },
  {
    id: 'email_notifications',
    label: 'Email Notifications',
    //description: 'Receive email notifications for important updates and messages.',
    enabled: true,
  },
  {
    id: 'english_interface',
    label: 'English Interface',
    //description: 'Turn on for English content and turn off for Chinese ones.',
    enabled: false,
  },
];
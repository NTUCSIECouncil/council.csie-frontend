export type FilterOptionKeys = 'courseGrade' | 'courseCategory';

interface FilterOption {
  key: string;
  choices: { value: string; description: string }[];
  defaultValue: string;
}

export const FILTER_OPTIONS = {
  courseGrade: {
    key: 'grade',
    choices: [
      { value: '', description: '年級' },
      { value: '1', description: '大一' },
      { value: '2', description: '大二' },
      { value: '3', description: '大三' },
      { value: '4', description: '大四' },
    ],
    defaultValue: 'all',
  },
  courseCategory: {
    key: 'requiredOrOptionalCourses',
    choices: [
      { value: '', description: '必選修類別' },
      { value: 'required', description: '大學部必修' },
      { value: 'optional', description: '大學部選修' },
      { value: 'cs', description: '資工所' },
      { value: 'network', description: '網媒所' },
    ],
    defaultValue: '',
  },
} as const satisfies Record<FilterOptionKeys, FilterOption>;

export type SidebarOptionKeys = 'lifeInterview' | 'lifeCouncil' | 'lifeSpace' | 'lifeCourse' | 'lifeInformation';

interface SidebarOption {
  choices: { value: string; description: string }[];
}

export const SIDEBAR_OPTIONS = {
  lifeInterview: {
    choices: [
      { value: '/life/interview/chusong', description: '陳祝嵩教授' },
      { value: '/life/interview/hungsh', description: '洪士灝教授' },
      { value: '/life/interview/yvchen', description: '陳縕儂教授' },
      { value: '/life/interview/pangfeng', description: '劉邦鋒教授' },
      { value: '/life/interview/cmchou', description: '周承滿幹事' },
      { value: '/life/interview/cwlin', description: '林忠緯教授' },
      { value: '/life/interview/pjcheng', description: '鄭卜壬教授' },
      { value: '/life/interview/cmchou', description: '莊永裕教授' },
      { value: '/life/interview/hsinmu', description: '蔡欣穆教授' },
      { value: '/life/interview/sehuang', description: '黃上恩教授' },
      // { value: '/ctliang', description: '梁啟德教授' },
    ],
  },
  lifeCouncil: {
    choices: [
      { value: '/life/council/leader', description: '會長的話' },
      { value: '/life/council/departments', description: '各部會介紹' },
      { value: '/life/council/teams', description: '各系隊介紹' },
      { value: '/life/council/activities', description: '系上活動' },
    ],
  },
  lifeSpace: {
    choices: [
      { value: '', description: '' },
    ],
  },
  lifeCourse: {
    choices: [
      { value: '', description: '' },
    ],
  },
  lifeInformation: {
    choices: [
      { value: '', description: '' },
    ],
  },
} as const satisfies Record<SidebarOptionKeys, SidebarOption>;

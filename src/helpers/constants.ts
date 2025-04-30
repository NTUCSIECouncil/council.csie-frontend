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
      { value: '/', description: '陳祝嵩教授' },
      { value: '/', description: '洪士灝教授' },
      { value: '/', description: '陳縕儂教授' },
      { value: '/', description: '劉邦鋒教授' },
      { value: '/', description: '周承滿幹事' },
    ],
  },
  lifeCouncil: {
    choices: [
      { value: '', description: '' },
    ],
  },
  lifeSpace: {
    choices: [
      { value: '', description: '' },
    ],
  },
  lifeCourse: {
    choices: [
      { value: '/life/course/0', description: '計算機程式設計' },
      { value: '/life/course/1', description: '微積分 1/2/3/4 （傅班）' },
      { value: '/life/course/2', description: '微積分 1/2/3/4 （蔡班）' },
      { value: '/life/course/3', description: '微積分 1/2/3/4 （余班）' },
      { value: '/life/course/4', description: '普通物理學甲' },
      { value: '/life/course/5', description: '普通生物學丙' },
      { value: '/life/course/6', description: '普通物理學乙' },
      { value: '/life/course/7', description: '普通化學丙' },
      { value: '/life/course/8', description: '計算機概論（單班）' },
      { value: '/life/course/9', description: '計算機概論（雙班）' },
      { value: '/life/course/10', description: '資料結構與演算法' },
      { value: '/life/course/11', description: '網路管理與系統管理' },
      { value: '/life/course/12', description: '離散數學（呂）' },
      { value: '/life/course/13', description: '離散數學（陳）' },
      { value: '/life/course/14', description: '探索學分' },
    ],
  },
  lifeInformation: {
    choices: [
      { value: '', description: '' },
    ],
  },
} as const satisfies Record<SidebarOptionKeys, SidebarOption>;

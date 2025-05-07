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
      { value: '/life/interview/cyy', description: '莊永裕教授' },
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
      { value: '/life/information/internet', description: '系館空間介紹' },
      { value: '/life/information/internet', description: '網路與資訊服務' },
      { value: '/life/information/food', description: '美食地圖' },
      { value: '/life/information/counsel', description: '輔導資源' },
      { value: '/life/information/others', description: '雜項' },
    ],
  },
} as const satisfies Record<SidebarOptionKeys, SidebarOption>;

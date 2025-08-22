/**
 * This is not in ./constants.ts because this is server-side specific.
 * To prevent it be run in the browser (which crashes since `fs` module is not available), we move it here.
 */
import interviewData from '@/data/life/interview';
import { SidebarOptionKey } from './constants';

export interface SidebarOptionValue {
  choices: { value: string; description: string }[];
}

export const SIDEBAR_OPTIONS = {
  [SidebarOptionKey.INTERVIEW]: {
    // Example data:
    //   choices: [
    //     { value: '/life/interview/劉邦鋒', description: '劉邦鋒' },
    //   ]
    choices: Object.keys(interviewData).map(professorName => ({
      value: `/life/interview/${professorName}`,
      description: interviewData[professorName].title,
    })),
  },
  [SidebarOptionKey.COUNCIL]: {
    choices: [
      { value: '/life/council/leader', description: '會長的話' },
      { value: '/life/council/departments', description: '部會介紹' },
      { value: '/life/council/teams', description: '系隊介紹' },
      { value: '/life/council/activities', description: '系上活動' },
    ],
  },
  [SidebarOptionKey.SPACE]: {
    choices: [
      { value: '', description: '' },
    ],
  },
  [SidebarOptionKey.COURSE]: {
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
  [SidebarOptionKey.INFORMATION]: {
    choices: [
      { value: '/life/information/facility', description: '系館空間介紹' },
      { value: '/life/information/internet', description: '網路與資訊服務' },
      { value: '/life/information/food', description: '美食地圖' },
      { value: '/life/information/counsel', description: '輔導資源' },
      { value: '/life/information/others', description: '雜項' },
    ],
  },
} as const satisfies Record<SidebarOptionKey, SidebarOptionValue>;

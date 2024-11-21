export type FilterOptionKeys = 'courseGrade' | 'courseCategory' | 'searchCriteria';

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
  searchCriteria: {
    key: 'searchby',
    choices: [
      { value: 'courseName', description: '課程名稱' },
      { value: 'teacher', description: '授課教師' },
    ],
    defaultValue: 'courseName',
  },
} as const satisfies Record<FilterOptionKeys, FilterOption>;

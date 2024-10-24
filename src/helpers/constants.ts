export type FilterOptionKeys = 'courseGrade' | 'courseType';

interface FilterOption {
  key: string;
  choices: { value: string; description: string }[];
  defaultValue: string;
}

export const FILTER_OPTIONS = {
  courseGrade: {
    key: 'grade',
    choices: [
      { value: 'all', description: '年級' },
      { value: 'freshman', description: '大一' },
      { value: 'sophomore', description: '大二' },
      { value: 'junior', description: '大三' },
      { value: 'senior', description: '大四' },
    ],
    defaultValue: 'all',
  },
  courseType: {
    key: 'requiredOrOptionalCourses',
    choices: [
      { value: 'all', description: '必選修類別' },
      { value: 'required', description: '大學部必修' },
      { value: 'optional', description: '大學部選修' },
      { value: 'cs', description: '資工所' },
      { value: 'network', description: '網媒所' },
    ],
    defaultValue: 'all',
  },
} as const satisfies Record<FilterOptionKeys, FilterOption>;

import DropdownSelect from '@/components/dropdown-select';

export enum FilterOptionKey {
  GRADE = 'courseGrade',
  CATEGORY = 'courseCategory',
}

interface FilterOption {
  key: string;
  choices: { value: string; description: string }[];
  defaultValue: string;
}

export const FILTER_OPTIONS = {
  [FilterOptionKey.GRADE]: {
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
  [FilterOptionKey.CATEGORY]: {
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
} as const satisfies Record<FilterOptionKey, FilterOption>;

interface FilterProps {
  filterKey: FilterOptionKey;
  name: string;
}

export const Filter = ({ filterKey, name }: FilterProps) => {
  return (
    <DropdownSelect
      key={FILTER_OPTIONS[filterKey].key}
      choices={FILTER_OPTIONS[filterKey].choices}
      defaultValue={
        FILTER_OPTIONS[filterKey].defaultValue
      }
      name={name}
    />
  );
};

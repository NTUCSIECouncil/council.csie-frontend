import DropdownSelect from '@/components/filter-buttons';
import { FILTER_OPTIONS, type FilterOptionKeys } from '@/helpers/constants';

interface FilterProps {
  filterKey: FilterOptionKeys;
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

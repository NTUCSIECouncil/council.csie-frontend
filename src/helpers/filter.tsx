import { DropdownSelect } from '@/components/filter-buttons';
import { FILTER_OPTIONS, type FilterOptionKeys } from '@/helpers/constants';

export const renderFilter = (key: FilterOptionKeys) => {
  return (
    <DropdownSelect
      key={FILTER_OPTIONS[key].key}
      choices={FILTER_OPTIONS[key].choices}
      defaultValue={
        FILTER_OPTIONS[key].defaultValue
      }
    />
  );
};

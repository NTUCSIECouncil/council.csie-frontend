import { DropdownSelect } from '@/components/filter-buttons';

const Filters = (): React.JSX.Element => {
  const filters = [
    {
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
    {
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
  ];

  return (
    <>
      {filters.map(filter => (
        <DropdownSelect
          key={filter.key}
          choices={filter.choices}
          defaultValue={filter.defaultValue}
        />
      ))}
    </>
  );
};

export default Filters;

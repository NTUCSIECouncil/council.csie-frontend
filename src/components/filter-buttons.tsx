const DropdownSelect = ({
  choices,
  defaultValue: defaultChoice,
}: {
  choices: {
    value: string;
    description: string;
  }[];
  defaultValue: string;
}): React.JSX.Element => {
  return (
    <select
      className="
        p-1.5 rounded-md block
        bg-gray-700 border-gray-600 placeholder-gray-400
        font-medium
        border
      "
      defaultValue={defaultChoice}
    >
      {/* {!choices.includes(defaultChoice) && (
        <option value={defaultChoice} disabled>
          {defaultChoice}
        </option>
      )} */}
      {choices.map(choice => (
        <option key={choice.value} value={choice.value}>
          {choice.description}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;

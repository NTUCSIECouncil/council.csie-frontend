export const InformationBlock = ({
  avatar,
  primary,
  secondary,
}: {
  avatar?: React.JSX.Element;
  primary: string;
  secondary?: string;
}): React.JSX.Element => {
  return (
    <div className="flex items-center px-3 py-2 gap-4">
      {avatar}
      <div>
        <p>{primary}</p>
        <p>{secondary}</p>
      </div>
    </div>
  );
};

const InformationBlock = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <p className="ml-1 text-sm md:text-md text-gray-500" style={{ whiteSpace: 'pre-line' }}>
      {content}
    </p>
  );
};

export default InformationBlock;

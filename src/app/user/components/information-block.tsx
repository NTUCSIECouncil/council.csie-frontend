const InformationBlock = ({ content }: { content: string }): React.JSX.Element => {
  return (
    <p className="text-lg text-gray-400" style={{ whiteSpace: 'pre-line' }}>
      {content}
    </p>
  );
};

export default InformationBlock;

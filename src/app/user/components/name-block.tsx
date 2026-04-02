const NameBlock = ({ content }: { content: string }): React.JSX.Element => {
  return (
    <p className="text-4xl font-bold" style={{ whiteSpace: 'pre-line' }}>
      {content}
    </p>
  );
};

export default NameBlock;

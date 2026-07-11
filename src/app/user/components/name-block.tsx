const NameBlock = ({ content }: { content: string }): React.JSX.Element => {
  return (
    <p className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ whiteSpace: 'pre-line' }}>
      {content}
    </p>
  );
};

export default NameBlock;

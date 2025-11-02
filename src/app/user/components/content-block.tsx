{/* Stolen from life-component */}
const ContentBlock = ({ content }: { content: string }): React.JSX.Element => {
  return (
    <p className="text-xl/8 text-justify" style={{ whiteSpace: 'pre-line' }}>
      {content}
    </p>
  );
};

export default ContentBlock;

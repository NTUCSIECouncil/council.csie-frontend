const Tag = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <div className="py-1 px-2 rounded bg-cyan-900">{content}</div>
  );
};

export default Tag;

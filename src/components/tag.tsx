const Tag = ({ content }: { content: string }): React.JSX.Element => {
  return <div className="py-1 px-3 rounded-md bg-slate-700 text-sm text-white hover:bg-slate-600 transition cursor-pointer">{content}</div>;
};

export default Tag;

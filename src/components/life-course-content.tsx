const LifeSubTopic = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <p className="font-bold text-xl whitespace-pre-line">{content}</p>
  );
};

export default LifeSubTopic;

const LifeSubTopic = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <div className="bg-white text-[#1c1c29] text-2xl py-1 px-3 font-extrabold rounded-xl my-2">{content}</div>
  );
};

export default LifeSubTopic;

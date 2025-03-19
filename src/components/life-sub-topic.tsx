const LifeSubTopic = ({
  content,
  textSize = 'text-2xl',
}: {
  content: string;
  textSize?: string;
}): React.JSX.Element => {
  return (
    <div className={`bg-white text-[#1c1c29] ${textSize} py-1 px-3 font-extrabold rounded-xl my-2`}>
      {content}
    </div>
  );
};

export default LifeSubTopic;

const LifeSubTopic = ({
  content,
  textSize = 'text-2xl',
  comment,
}: {
  content: string;
  textSize?: string;
  comment?: string;
}): React.JSX.Element => {
  return (
    <div>
      <div className={`w-fit bg-white text-[#1c1c29] ${textSize} py-1 px-3 font-extrabold rounded-xl my-2`}>
        {content}
      </div>
      <br />
      {comment && (
        <p className="font-bold mb-2">{comment}</p>
      )}
    </div>
  );
};

export default LifeSubTopic;

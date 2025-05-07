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
      <div className={`w-fit bg-gray-100 text-[#1c1c29] text-justify text-xl md:${textSize} py-1 px-3 font-extrabold rounded-xl my-2`}>
        {content}
      </div>
      {comment && (
        <p className="font-bold mb-2">{comment}</p>
      )}
    </div>
  );
};

export default LifeSubTopic;

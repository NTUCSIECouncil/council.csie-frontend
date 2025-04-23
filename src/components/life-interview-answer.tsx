const LifeInterviewAnswer = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <p className="text-xl">{content}</p>
  );
};

export default LifeInterviewAnswer;

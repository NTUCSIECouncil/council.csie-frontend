const LifeInterviewAnswer = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <p className="text-xl/8 mb-4">{content}</p>
  );
};

export default LifeInterviewAnswer;

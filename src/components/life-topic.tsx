const LifeTopic = ({
  topic,
  subtopic,
  lecturer,
  author,
  topicSize = 'text-5xl',
  subtopicSize = 'text-3xl',
}: {
  topic: string;
  subtopic?: string;
  lecturer?: string;
  author?: string;
  topicSize?: string;
  subtopicSize?: string;
}): React.JSX.Element => {
  return (
    <>
      <h1 className={`${topicSize} font-bold py-2`}>{topic}</h1>
      {subtopic && (
        <h2 className={`${subtopicSize} font-bold py-1 text-[#BBB9BD]`}>{subtopic}</h2>
      )}
      <p className="font-bold mb-2">
        {lecturer && (
          <>
            教授：
            { lecturer }
          </>
        )}
        <br />
        {author && (
          <>
            撰稿：
            { author }
          </>
        )}
      </p>
    </>
  );
};

export default LifeTopic;

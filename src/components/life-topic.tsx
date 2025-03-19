const LifeTopic = ({
  topic,
  subtopic,
  lecturer,
  author,
}: {
  topic: string;
  subtopic?: string;
  lecturer?: string;
  author?: string;
}): React.JSX.Element => {
  return (
    <>
      <h1 className="text-5xl font-bold py-2">{topic}</h1>
      <h2 className="text-3xl font-bold py-1 text-[#BBB9BD]">{subtopic}</h2>
      <p className="font-bold mb-2">
        {lecturer && <>教授：{lecturer}</>}
        <br />
        {author && <>撰稿：{author}</>}
      </p>
    </>
  );
};

export default LifeTopic;

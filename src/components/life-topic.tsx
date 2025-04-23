const LifeTopic = ({
  topic,
  subtopic,
  lecturer,
  author,
  topicSize = 'text-5xl',
  subtopicSize = 'text-3xl',
  mailto,
  website,
  image,
  author_interview,
}: {
  topic: string;
  subtopic?: string;
  lecturer?: string;
  author?: string;
  topicSize?: string;
  subtopicSize?: string;
  mailto?: string;
  website?: string;
  image?: string;
  author_interview?: string;
}): React.JSX.Element => {
  return (
    <>
      <h1 className={`${topicSize} font-bold py-2`}>{topic}</h1>
      <div className="h-6 w-full -mt-6 bg-slate-600"></div>
      {subtopic && (
        <h2 className={`${subtopicSize} font-bold py-1 text-[#BBB9BD]`}>{subtopic}</h2>
      )}
      <p className="font-bold mb-2">
        {lecturer && (
          <>
            教授：
            {lecturer}
            <br />
          </>
        )}
        {author && (
          <>
            撰稿：
            {author}
            <br />
          </>
        )}
        {mailto && (
          <>
            ✉️：
            <a href={`mailto:${mailto}`} className="font-bold underline">
              {mailto}
            </a>
            <br />
          </>
        )}
        {website && (
          <>
            🌐：
            <a href={website} className="font-bold underline">
              {website}
            </a>
            <br />
          </>
        )}
        {author_interview && (
          <>
            ✏️：
            {author_interview}
            <br />
          </>
        )}
      </p>
      {image && (
        <div className="absolute right-0 top-0">
          <img
            src={image}
            alt="教授圖片"
            className="w-28 h-42 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default LifeTopic;

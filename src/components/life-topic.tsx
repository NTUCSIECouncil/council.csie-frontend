const LifeTopic = ({
  topic,
  subtopic,
  lecturer,
  author,
  mailto,
  website,
  image,
  author_interview,
}: {
  topic: string;
  subtopic?: string;
  lecturer?: string;
  author?: string;
  mailto?: string;
  website?: string;
  image?: string;
  author_interview?: string;
}): React.JSX.Element => {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <h1 className="text-5xl font-bold py-2">{topic}</h1>
        {subtopic && (
          <h2 className="text-3xl font-bold py-1 text-[#BBB9BD]">{subtopic}</h2>
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
      </div>
      {image && (
        <div className="absolute right-0 top-0">
          <img
            src={image}
            alt="教授圖片"
            className="w-28 h-42 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default LifeTopic;

import Image from 'next/image';
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
      <div>
        <h1 className={`${topicSize} font-bold py-2 z-10`}>{topic}</h1>
        <div className="h-8 w-full -mt-8 bg-slate-600"></div>
      </div>
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
        <div className="hidden md:flex absolute right-0 top-0">
          <Image
            alt="Teacher Image"
            src={image}
            height={128}
            width={128}
            className="object-cover object-top w-36 h-36 rounded-full"
          />
        </div>
      )}
    </>
  );
};

export default LifeTopic;

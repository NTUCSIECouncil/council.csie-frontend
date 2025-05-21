import { type CommentItem, type CommentType } from '@/utils/constants';

interface LifeSubTopicProps {
  content: string;
  textSize?: string;
  comment?: CommentType;
  commentSize?: string;
}

const LifeSubTopic = ({
  content,
  textSize = 'text-2xl',
  comment,
  commentSize = 'text-lg',
}: LifeSubTopicProps): React.JSX.Element => {
  const commentArray: CommentItem[]
  = !comment ? [] : Array.isArray(comment) ? comment : [comment];

  return (
    <div>
      <div
        className={`w-fit bg-white text-[#1c1c29] ${textSize} py-1 px-3 font-extrabold rounded-xl my-4`}
      >
        {content}
      </div>
      {commentArray.length > 0 && (
        <div
          className={`mt-5 ${commentSize} font-bold text-white space-y-3`}
        >
          {commentArray.map((item, idx) => (
            <div key={idx}>
              <span>
                {item.title}
                ：
              </span>
              {typeof item.content === 'string'
                ? (
                    <span>{item.content}</span>
                  )
                : (
                    <a
                      href={item.content.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      {item.content.label}
                    </a>
                  )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LifeSubTopic;

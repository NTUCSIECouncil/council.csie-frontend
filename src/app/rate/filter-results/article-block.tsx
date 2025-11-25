import Tag from '@/components/tag';
import { type Course, type User } from '@/types/backend';

const ArticleBlock = ({
  title,
  course,
  creator,
  semester,
  tags,
  content,
}: {
  title: string;
  course: Course;
  creator: User;
  semester: string;
  tags: string[];
  content: string;
}): React.JSX.Element => {
  return (
    <div className="flex flex-col w-full rounded-lg bg-gray-800 py-5 px-6 hover:bg-gray-750 hover:scale-[1.02] transition-transform duration-200">
      {/* Title and lecturer/creator info */}
      <div className="flex justify-between w-full items-start gap-6">
        <div className="flex-1">
          <p className="font-bold text-xl text-white">{title}</p>
          <p className="font-medium text-base text-gray-300 mt-1">
            {course.names[0] || course.curriculum}
          </p>
          <p className="text-sm text-gray-400 mt-0.5">{semester}</p>
        </div>
        <div className="flex flex-col items-end text-right flex-shrink-0">
          <p className="font-semibold text-base text-white">
            {course.lecturer}
          </p>
          <p className="text-sm text-gray-400 mt-0.5">by {creator.nickname}</p>
        </div>
      </div>

      <hr className="w-full my-3 border-gray-500" />

      {/* Content preview */}
      <p className="w-full text-gray-300 text-sm mb-2">{content}</p>

      {/* Tags */}
      <div className="flex w-full justify-start gap-2 flex-wrap">
        {tags.map((t, i) => (
          <Tag content={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ArticleBlock;

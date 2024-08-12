import Tag from '@/ui/tag';

const CourseBlock = ({
  title,
  lecturer,
  tags,
  content
}: {
  title: string;
  lecturer: string;
  tags?: string[];
  content: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col w-full rounded-lg bg-gray-800 py-4 px-6">
      <div className="flex justify-between w-full">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-semibold text-lg">{lecturer}</p>
      </div>
      <hr className="w-full my-2 border-gray-500 border-t-2" />
      <p className="w-full">{content}</p>
      <div className="flex w-full justify-end gap-2">
        {tags?.map((tag) => (
          <Tag content={tag} key={tag} />
        ))}
      </div>
    </div>
  );
};

export default CourseBlock;

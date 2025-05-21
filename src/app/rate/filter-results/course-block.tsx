import Tag from '@/components/tag';

const CourseBlock = ({
  title,
  lecturer,
  tag,
  content,
}: {
  title: string;
  lecturer: string;
  tag?: string[];
  content?: string;
}): React.JSX.Element => {
  content ??= '';
  if (content.length > 280)
    content = content.substring(0, 280) + '[...]';

  return (
    <div className="flex flex-col w-full rounded-lg bg-gray-800 py-4 px-6 hover:bg-opacity-75">
      <div className="flex justify-between w-full">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-semibold text-lg">{lecturer}</p>
      </div>
      <hr className="w-full my-2 border-gray-500 border-t-2" />
      <p className="w-full">{content}</p>
      <div className="flex w-full justify-end gap-2">
        {tag?.map((t, i) => (
          <Tag content={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CourseBlock;

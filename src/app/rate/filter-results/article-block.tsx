import { type UUID } from 'crypto';

import Tag from '@/components/tag';
import MarkdownPreview from '../components/markdown-preview';

const ArticleBlock = async ({
  title,
  courseName,
  lecturer,
  semester,
  content,
  tag,
  id,
}: {
  title: string;
  courseName: string;
  lecturer: string;
  semester: string;
  content: string;
  tag?: string[];
  id?: UUID;
}): Promise<React.JSX.Element> => {
  return (
    <div className="group flex flex-col w-full rounded-md bg-gray-800 py-4 px-6 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
      <p className="font-bold text-2xl pl-2 mb-3">{title}</p>
      <div className="relative">
        <div className="absolute right-0 -top-8">
          <p className="font-semibold bg-gray-400 rounded-t-md border-gray-400 border-2 border-l-2 border-r-2 py-1 px-2 text-slate-900 text-sm">
            {`${courseName}．${lecturer}（${semester}）`}
          </p>
        </div>
        <hr className="w-full border-gray-400 border-t-2" />
      </div>
      <MarkdownPreview content={content} className="p-3" />
      <div className="flex w-full justify-end gap-2">
        {tag?.map((t, i) => (
          <Tag content={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ArticleBlock;

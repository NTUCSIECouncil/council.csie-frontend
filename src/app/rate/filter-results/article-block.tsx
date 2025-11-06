import { type UUID } from 'crypto';

import Tag from '@/components/tag';
import serverFetch from '@/utils/server-fetch';

const ArticleBlock = async ({
  title,
  lecturer,
  tag,
  id,
}: {
  title: string;
  lecturer: string;
  tag?: string[];
  id?: UUID;
}): Promise<React.JSX.Element> => {
  const url = '/api/articles/' + (id?.toString() ?? 'unknown') + '/file';
  const res = await serverFetch(url, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });

  const content = await res.text();

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

export default ArticleBlock;

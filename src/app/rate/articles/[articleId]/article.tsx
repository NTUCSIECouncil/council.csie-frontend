import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

import PreviousPageButton from '@/components/previous-page-button';
import Tag from '@/components/tag';
import { type Article } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';

interface ArticleResponse {
  article: Article;
}

const Article = async ({
  articleId,
}: {
  articleId: string;
}): Promise<React.JSX.Element> => {
  const res = await serverFetch(`/api/articles/${articleId}`, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const articleMetaRespoonse = (await res.json()) as ArticleResponse;
  const articleMeta = articleMetaRespoonse.article;

  const resContent = await serverFetch(`/api/articles/${articleId}/file`, {
    cache: 'no-store',
  });
  if (resContent.status != 200) {
    if (resContent.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const content = await resContent.text();

  return (
    <>
      <PreviousPageButton />
      <div className="w-full flex justify-between items-end my-2 px-4">
        <p className="font-bold text-5xl">{articleMeta.title}</p>
        <p className="font text-2xl">{articleMeta.creator}</p>
      </div>
      <hr className="w-full border-gray-500 border-t-4" />
      <div className="w-full flex gap-3 justify-end my-2">
        <div className="flex gap-1 items-center">
          {articleMeta.tags.map(tag => tag && <Tag content={tag} key={tag} />)}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <Markdown>{content}</Markdown>
      </div>
    </>
  );
};

export default Article;

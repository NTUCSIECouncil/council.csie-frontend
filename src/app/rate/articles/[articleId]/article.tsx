import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import PreviousPageButton from '@/components/previous-page-button';
import Tag from '@/components/tag';
import serverFetch from '@/utils/server-fetch';

interface ArticleResponse {
  item: Article;
}

const Article = async ({
  articleId,
}: {
  articleId: string;
}): Promise<React.JSX.Element> => {
  const res = await serverFetch(`/api/articles/${articleId}`, { cache: 'force-cache' });
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const articleRes = await res.json() as ArticleResponse;
  const article = articleRes.item;

  // grade should be stored as string in the database.
  const titleTags: string[] = [];
  if (article.grade != null)
    titleTags.push(article.grade.toString());
  if (article.categories) {
    for (const category of article.categories)
      titleTags.push(category);
  }

  return (
    <>
      <PreviousPageButton />
      <div className="w-full flex justify-between items-end my-2 px-4">
        <p className="font-bold text-5xl">{article.title}</p>
        <p className="font text-2xl">{article.lecturer}</p>
      </div>
      <hr className="w-full border-gray-500 border-t-4" />
      <div className="w-full flex gap-3 justify-end my-2">
        <div className="flex gap-1 items-center">
          {titleTags.map(tag => tag && (
            <Tag content={tag} key={tag} />
          ))}
        </div>
        <div className="flex gap-1 items-center">
          {article.tag?.map(tag => tag && (
            <Tag content={tag} key={tag} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <Markdown>
          {article.content}
        </Markdown>
      </div>
    </>
  );
};

export default Article;

import Markdown from 'react-markdown';
import Tag from '@/components/tag';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { APIFetch } from '@/lib/api-fetch';

interface ArticleProp {
  title: string;
  lecturer: string;
  tag: string[];
  semester?: string;
  grade: string;
  categories: string[];
  content: string;
  creator: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const Article = async ({
  articleId,
}: {
  articleId: string;
}): Promise<JSX.Element> => {
  const response = await APIFetch(`/api/articles/${articleId}`, { cache: 'force-cache' });
  console.log(response);
  if (!response.ok) {
    if (response.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const res = await response.json();
  const article: ArticleProp = res.result;
  console.log(article);

  // grade should be stored as string in the database.
  const titleTags = [article.grade].concat(article.categories);

  return (
    <>
      <div className="w-full flex justify-between items-end my-2 px-4">
        <p className="font-bold text-5xl">{article.title}</p>
        <p className="font text-2xl">{article.lecturer}</p>
      </div>
      <hr className="w-full border-gray-500 border-t-4" />
      <div className="w-full flex gap-3 justify-end my-2">
        <div className="flex gap-1 items-center">
          {titleTags.map(tag => (
            <Tag content={tag} key={tag} />
          ))}
        </div>
        <div className="flex gap-1 items-center">
          {article.tag.map(tag => (
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

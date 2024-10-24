import Link from 'next/link';
import Search from '@/components/search';
import { renderFilter } from '@/helpers/filter';
import serverFetch from '@/utils/server-fetch';
import CourseBlock from './course-block';

interface ArticleResponse {
  items: Article[];
}

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}): Promise<React.JSX.Element> => {
  const query = searchParams?.query ?? '';
  // const currentPage = Number(searchParams?.page) ?? 1;

  const SEARCH_API_ENDPOINT = '/api/articles/search';
  const url = `${SEARCH_API_ENDPOINT}?${query}`;
  const res = await serverFetch(url);
  if (res.status != 200)
    throw Error('Unknown error');
  const articles = (await res.json()) as ArticleResponse;

  return (
    <div className="flex flex-col gap-4 items-center mt-8">
      <div className="w-3/5">
        <form className="items-center">
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div className="flex items-center gap-2 my-2 mx-10 text-sm">
            <p className="text-base">篩選：</p>
            { renderFilter('courseGrade') }
            { renderFilter('courseType') }
          </div>
        </form>
      </div>
      <main className="w-3/5">
        <div className="flex flex-col gap-3">
          {articles.items.map(article => (
            <Link
              href={`/rate/articles/${article._id}`}
              key={article._id}
            >
              <CourseBlock
                title={article.title}
                lecturer={article.lecturer}
                tag={article.tag}
                content={article.content}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;

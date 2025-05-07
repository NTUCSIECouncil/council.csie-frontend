'use server';
import Link from 'next/link';
import Search from '@/components/search';
import { renderFilter } from '@/helpers/filter';
import searchRedirectServer from '@/helpers/search-redirect-server';
import { type Article } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';
import CourseBlock from './course-block';

interface ArticleResponse {
  articles: Article[];
  meta: {
    total: number;
    offset: number;
    limit: number;
  };
}

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    categories?: string;
    keyword?: string;
    offset?: string;
    tags?: string;
  };
}): Promise<React.JSX.Element> => {
  const limit = 10;
  const keyword = searchParams?.keyword ?? '';
  const currentPage = Number(searchParams?.offset ?? '0') / limit;

  const url = `/api/articles/search?${searchParams?.toString() ?? ''}`;
  const res = await serverFetch(url, { cache: 'no-store' });
  if (res.status != 200)
    throw Error('Unknown error');
  const filterResult = (await res.json()) as ArticleResponse;

  return (
    <main className="flex flex-col gap-4 items-center mt-8 w-3/5">
      <div className="w-full">
        <form action={searchRedirectServer('/rate/filter-results')} className="items-center">
          <Search className="my-2 w-full" placeholder="輸入關鍵字" initialValue={keyword} />
          <div className="flex items-center gap-2 my-2 mx-10 text-sm">
            <p className="text-base">篩選：</p>
            {renderFilter('courseGrade', 'grade')}
            {renderFilter('courseCategory', 'type')}
          </div>
        </form>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-3">
          {filterResult.articles.map(article => (
            <Link
              href={`/rate/articles/${article._id}`}
              key={article._id}
            >
              <CourseBlock
                title={article.title}
                lecturer=""
                tag={undefined}
                content={undefined}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;

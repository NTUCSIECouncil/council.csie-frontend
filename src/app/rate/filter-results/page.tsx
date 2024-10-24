'use server';
import Link from 'next/link';
import Search from '@/components/search';
import { renderFilter } from '@/helpers/filter';
import searchRedirectServer from '@/helpers/search-redirect-server';
import serverFetch from '@/utils/server-fetch';
import CourseBlock from './course-block';

interface ArticleResponse {
  items: Article[];
}

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    keyword?: string;
    page?: string;
    grade?: string;
    category?: string;
  };
}): Promise<React.JSX.Element> => {
  const keyword = searchParams?.keyword ?? '';
  const currentPage = Number(searchParams?.page ?? '0');
  const grade = searchParams?.grade ?? '';
  const category = searchParams?.category ?? '';
  const limit = 10;

  const queryParams = new URLSearchParams();
  if (keyword !== '')
    queryParams.append('keyword', keyword);
  if (grade !== '')
    queryParams.append('grade', grade);
  if (category !== '')
    queryParams.append('type', category);
  if (currentPage !== 0)
    queryParams.append('offset', (currentPage * limit).toString());

  const url = `/api/articles/search?${queryParams.toString()}`;
  const res = await serverFetch(url, { cache: 'no-store' });
  if (res.status != 200)
    throw Error('Unknown error');
  const articles = (await res.json()) as ArticleResponse;

  return (
    <div className="flex flex-col gap-4 items-center mt-8">
      <div className="w-3/5">
        <form action={searchRedirectServer('/rate/filter-results')} className="items-center">
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div className="flex items-center gap-2 my-2 mx-10 text-sm">
            <p className="text-base">篩選：</p>
            { renderFilter('courseGrade', 'grade') }
            { renderFilter('courseCategory', 'type') }
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

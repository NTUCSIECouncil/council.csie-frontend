import Link from 'next/link';

import { Filter, FilterOptionKey } from '@/components/filter';
import Search from '@/components/search';
import { type Article, type Course } from '@/types/backend';
import { getFirstParam } from '@/utils/get-first-params';
import searchRedirectServer from '@/utils/search-redirect-server';
import serverFetch from '@/utils/server-fetch';
import ArticleBlock from './article-block';

interface ArticleResponse {
  articles: (Article & { content: string })[];
  meta: {
    total: number;
    offset: number;
    limit: number;
  };
}

const Page = async (props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => {
  const limit = 10;
  const searchParams = await props.searchParams;
  const keyword = getFirstParam(searchParams.keyword);
  const offset = getFirstParam(searchParams.offset);

  const queryParams = new URLSearchParams();
  queryParams.append('keyword', keyword);
  queryParams.append('limit', limit.toString());
  queryParams.append('embed[0]', 'course');
  queryParams.append('embed[1]', 'content');
  if (offset) queryParams.append('offset', offset);

  const url = `/api/articles?${queryParams.toString()}`;
  const res = await serverFetch(url, { cache: 'no-store' });
  if (res.status != 200) throw Error('Unknown error');
  const filterResult = (await res.json()) as ArticleResponse;

  return (
    <main className="flex flex-col gap-4 items-center mt-8 w-3/5">
      <div className="w-full">
        <form
          action={searchRedirectServer('/rate/filter-results')}
          className="items-center"
        >
          <Search
            className="my-2 w-full"
            placeholder="輸入關鍵字"
            initialValue={keyword}
          />
          <div className="flex items-center gap-2 mt-4 mb-2 mx-10 text-sm">
            <p className="text-base">篩選：</p>
            <Filter filterKey={FilterOptionKey.GRADE} name="grade" />
            <Filter filterKey={FilterOptionKey.CATEGORY} name="type" />
          </div>
        </form>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-3">
          {filterResult.articles.map(article => {
            const course = article.course as Course;
            return (
              <Link href={`/rate/articles/${article._id}`} key={article._id}>
                <ArticleBlock
                  title={article.title}
                  courseName={course.names[0]}
                  lecturer={course.lecturer}
                  semester={course.semester}
                  content={article.content || ''}
                  tag={undefined}
                  id={article._id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;

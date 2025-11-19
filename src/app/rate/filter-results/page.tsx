import Link from 'next/link';

import { Filter, FilterOptionKey } from '@/components/filter';
import Paginator from '@/components/page-selector';
import Search from '@/components/search';
import { type Article, type Course, type User } from '@/types/backend';
import { getFirstParam } from '@/utils/get-first-params';
import searchRedirectServer from '@/utils/search-redirect-server';
import serverFetch from '@/utils/server-fetch';
import ArticleBlock from './article-block';

interface ArticleWithEmbed extends Omit<Article, 'course' | 'creator'> {
  course: Course;
  creator: User;
  content?: string;
}

interface ArticleResponse {
  articles: ArticleWithEmbed[];
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
  const index = Math.max(parseInt(getFirstParam(searchParams.index)) | 0, 0);
  const offset = index * limit;

  const queryParams = new URLSearchParams();
  queryParams.append('keyword', keyword);
  queryParams.append('limit', limit.toString());
  if (offset) queryParams.append('offset', offset.toString());

  queryParams.append('embed', 'course');
  queryParams.append('embed', 'creator');
  queryParams.append('embed', 'content');

  const url = `/api/articles?${queryParams.toString()}`;
  const res = await serverFetch(url, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });

  let filterResult: ArticleResponse;
  if (res.status !== 200) {
    filterResult = {
      articles: [],
      meta: {
        total: 0,
        offset: 0,
        limit: limit,
      },
    };
  } else {
    filterResult = (await res.json()) as ArticleResponse;
  }

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
          <div className="flex items-center gap-2 my-2 mx-10 text-sm">
            <p className="text-base">篩選：</p>
            <Filter filterKey={FilterOptionKey.GRADE} name="grade" />
            <Filter filterKey={FilterOptionKey.CATEGORY} name="type" />
          </div>
        </form>
      </div>
      <div className="w-full">
        {filterResult.articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <p className="text-xl font-medium">找不到符合條件的文章</p>
            <p className="text-sm mt-2">請嘗試使用其他關鍵字搜尋</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filterResult.articles.map(article => (
              <Link href={`/rate/articles/${article._id}`} key={article._id}>
                <ArticleBlock
                  title={article.title}
                  course={article.course}
                  creator={article.creator}
                  semester={article.semester}
                  tags={article.tags}
                  content={article.content || ''}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Paginator
        baseParams={`keyword=${keyword}&`}
        limit={limit}
        index={Math.min(
          index,
          Math.floor(Math.max(filterResult.meta.total - 1, 0) / limit),
        )}
        total={filterResult.meta.total}
      />
    </main>
  );
};

export default Page;

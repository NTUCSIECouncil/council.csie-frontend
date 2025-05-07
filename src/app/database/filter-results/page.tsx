// import Search from '@/app/ui/search';
// import Image from 'next/image';
// import Link from 'next/link';
'use server';
import SmallSearch from '@/components/small-search';
import searchRedirectServer from '@/helpers/search-redirect-server';
import serverFetch from '@/utils/server-fetch';
import Background from './background';
import ResultTable from './results-table';

interface CourseResponse {
  courses: Course[];
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
    keyword?: string;
    limit?: number;
    offset?: number;
    categories?: string[];
  };
}) => {
  const keyword = searchParams?.keyword ?? '';
  const categories = searchParams?.categories ?? '';
  const offset = Number(searchParams?.offset ?? '0');
  const limit = Number(searchParams?.limit ?? 10);

  const queryParams = new URLSearchParams();
  if (keyword !== '')
    queryParams.append('keyword', keyword);
  if (categories !== '')
    queryParams.append('course', categories.toString());
  if (offset !== 0)
    queryParams.append('offset', offset.toString());
  if (limit !== 0)
    queryParams.append('limit', limit.toString());

  const url = `/api/courses/search?${queryParams.toString()}`;
  const res = await serverFetch(url, { cache: 'no-store' });
  if (res.status != 200)
    throw Error('Unknown error');
  const ret = await res.json() as CourseResponse;
  const rows = ret.courses;
  return (
    <div className="h-full w-full">
      <Background />
      <main className="mx-auto w-4/5 min-w-96 mt-4">
        <form action={searchRedirectServer('/database/filter-results')} className="flex items-center justify-between xl:mx-7 mx-4">
          <p className="xl:text-4xl text-3xl font-bold">查詢結果</p>
          <SmallSearch
            placeholder="輸入關鍵字"
            className="my-4 xl:w-[13rem] w-[10rem]"
          />
        </form>
        <div className="xl:mx-5 mt-5 mb-10">
          <ResultTable rows={rows} />
        </div>
      </main>
    </div>
  );
};

export default Page;

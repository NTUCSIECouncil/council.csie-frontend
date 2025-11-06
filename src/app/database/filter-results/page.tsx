// import Search from '@/app/ui/search';
// import Image from 'next/image';
// import Link from 'next/link';
'use server';

import { SmallSearch } from '@/app/database/filter-results/components/small-search';
import PageSelector from '@/components/page-selector';
import { type Course } from '@/types/backend';
import searchRedirectServer from '@/utils/search-redirect-server';
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

const Page = async (params: {
  searchParams?: Promise<{
    keyword?: string;
    limit?: number;
    index?: number;
    categories?: string[];
    grade?: number;
    type?: string;
  }>;
}) => {
  const searchParams = await params.searchParams;
  const keyword = searchParams?.keyword ?? '';
  const categories = searchParams?.categories ?? '';
  const grade = searchParams?.grade ?? '';
  const type = searchParams?.type ?? '';
  const limit = 10;
  const index = Math.max(searchParams?.index ?? 0, 0);
  const offset = index * limit;

  const queryParams = new URLSearchParams();
  if (keyword !== '') queryParams.append('keyword', keyword);
  if (categories !== '') queryParams.append('course', categories.toString());
  if (offset !== 0) queryParams.append('offset', offset.toString());
  queryParams.append('limit', limit.toString());

  const url = `/api/courses?${queryParams.toString()}`;
  const res = await serverFetch(url, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
  if (res.status != 200) throw Error('Unknown error');
  const ret = (await res.json()) as CourseResponse;
  const rows = ret.courses;

  const baseParams = new URLSearchParams();
  if (keyword !== '') baseParams.append('keyword', keyword);
  if (categories !== '') baseParams.append('categories', categories.toString());
  if (grade !== '') baseParams.append('grade', grade.toString());
  if (type !== '') baseParams.append('type', type.toString());

  return (
    <div className="h-full w-full">
      <Background />
      <main className="mx-auto w-4/5 min-w-96 mt-4">
        <form
          action={searchRedirectServer('/database/filter-results')}
          className="flex items-center justify-between xl:mx-7 mx-4"
        >
          <p className="xl:text-4xl text-3xl font-bold">查詢結果</p>
          <SmallSearch placeholder="輸入關鍵字" className="my-4 xl:w-52 w-40" />
        </form>
        <div className="xl:mx-5 mt-5 mb-10">
          <ResultTable rows={rows} />
        </div>
        <div className="w-full flex justify-center">
          <PageSelector
            baseParams={`${baseParams.toString()}&`}
            limit={limit}
            index={Math.min(
              index,
              Math.floor(Math.max(ret.meta.total - 1, 0) / limit),
            )}
            total={ret.meta.total}
          />
        </div>
      </main>
    </div>
  );
};

export default Page;

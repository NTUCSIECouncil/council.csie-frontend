// import Search from '@/app/ui/search';
// import Image from 'next/image';
// import Link from 'next/link';
'use server';
import SmallSearch from '@/components/small-search';
// import serverFetch from '@/utils/server-fetch';
import searchRedirectServer from '@/helpers/search-redirect-server';
import Background from './background';
import ResultTable from './results-table';

const Page = ({
  searchParams,
}: {
  searchParams?: {
    keyword?: string;
    limit?: number;
    offset?: number;
    course?: UUID;
  };
}) => {
  const keyword = searchParams?.keyword ?? '';
  const course = searchParams?.course ?? '';
  const currentPage = Number(searchParams?.offset ?? '0');
  const limit = Number(searchParams?.limit ?? 10);

  const queryParams = new URLSearchParams();
  if (keyword !== '')
    queryParams.append('keyword', keyword);
  if (course !== '')
    queryParams.append('course', course);
  if (currentPage !== 0)
    queryParams.append('offset', (currentPage * limit).toString());

  // TODO: Connect with the correct API that searches Courses with keyword
  const url = `/api/courses/search?${queryParams.toString()}`;
  // const res = await serverFetch(url, { cache: 'no-store' });
  // console.log(res.status)
  // if (res.status != 200)
  //   throw Error('Unknown error');

  return (
    <div className="h-full w-full">
      <Background />
      <main className="mx-auto w-4/5 min-w-96 mt-4">
        <form action={searchRedirectServer('/database/filter-results')} className="flex items-center justify-between mx-7">
          <p className="xl:text-4xl text-3xl font-bold">查詢結果</p>
          <SmallSearch
            placeholder="輸入關鍵字"
            className="my-4 xl:w-[13rem] w-[10rem]"
          />
        </form>
        <div className="mx-5 mt-5 mb-10">
          <ResultTable />
        </div>
      </main>
    </div>
  );
};

export default Page;

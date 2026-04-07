'use client';

import { useRouter } from 'next/navigation';

import Search from '@/components/search';
import searchRedirect from '@/utils/search-redirect';
import Background from './background';

const Page = (): React.JSX.Element => {
  const router = useRouter();

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div className="absolute top-2/7">
        <p className="text-5xl font-bold my-6 tracking-widest text-center">
          課程資料庫
        </p>
        <form
          action={searchRedirect(router, '/database/filter-results')}
          className="min-w-[210px] w-[65vw] sm:w-[400px] md:w-[500px] flex flex-col items-center"
        >
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
        </form>
      </div>
    </main>
  );
};

export default Page;

'use client';

import { useRouter } from 'next/navigation';

import { Filter, FilterOptionKey } from '@/components/filter';
import Search from '@/components/search';
import searchRedirect from '@/utils/search-redirect';
import Background from './background';

const Page = (): React.JSX.Element => {
  const router = useRouter();

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div className="relative">
        <p className="text-5xl font-bold my-4 tracking-widest text-center">
          課程資料庫
        </p>
        <form
          action={searchRedirect(router, '/database/filter-results')}
          className="w-[500px] flex flex-col items-center"
        >
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div>
            <div className="flex items-center gap-2 my-2">
              <p className="text-lg">篩選：</p>
              <Filter filterKey={FilterOptionKey.GRADE} name="grade" />
              <Filter filterKey={FilterOptionKey.CATEGORY} name="type" />
            </div>
            {/* <div className="flex items-center gap-2 my-2">
              <p className="text-lg">標籤：</p>
              感覺做成搜尋的比較好，不知道 DCard 怎麼運作的
            </div> */}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;

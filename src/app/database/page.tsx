'use client';
import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Search from '@/components/search';
import Filters from '../../components/filters';
import Background from './background';

function submitSearch(router: AppRouterInstance, formData: FormData): void {
  router.push('/database/filter-results');
}

const Page = (): JSX.Element => {
  const router = useRouter();

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div>
        <p className="text-5xl font-bold my-4 tracking-widest text-center">課程資料庫</p>
        <form
          action={submitSearch.bind(null, router)}
          className="w-[500px] flex flex-col items-center"
        >
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div>
            <div className="flex items-center gap-2 my-2">
              <p className="text-lg">篩選：</p>
              <Filters />
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

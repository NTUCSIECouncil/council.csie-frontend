'use client';
import { useRouter } from 'next/navigation';
import Search from '@/components/search';
import { renderFilter } from '@/helpers/filter';
import searchRedirect from '@/helpers/search-redirect';
import Background from './background';

const Page = (): React.JSX.Element => {
  const router = useRouter();

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div className="relative">
        <p className="text-5xl font-bold my-4 tracking-widest text-center">課程評價網</p>
        <form
          action={searchRedirect(router, '/rate/filter-results')}
          className="w-[500px] flex flex-row items-center gap-4"
        >
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div className="flex items-center gap-2 my-2 text-sm">
            { renderFilter('courseCategory', 'type') }
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;

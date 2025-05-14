'use client';
import { useRouter } from 'next/navigation';
import Search from '@/components/search';
import searchRedirect from '@/helpers/search-redirect';
import Background from './background';

const Page = (): React.JSX.Element => {
  const router = useRouter();

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div className="relative">
        <p className="text-5xl font-bold my-6 tracking-widest text-center">課程評價網</p>
        <form action={searchRedirect(router, '/rate/filter-results')} className="w-[500px] flex flex-col items-center -translate-x-8">
          <Search className="my-2 w-full" placeholder="輸入關鍵字" hasAddButton={true} />
        </form>
      </div>
    </main>
  );
};

export default Page;

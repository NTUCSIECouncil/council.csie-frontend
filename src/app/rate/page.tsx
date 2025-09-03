'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SearchFilterPanel from '@/app/rate/components/search-filter-panel';
import Search from '@/components/search';
import searchRedirect from '@/utils/search-redirect';
import Background from './background';

const Page = (): React.JSX.Element => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div className="relative">
        <p className="text-5xl font-bold my-6 tracking-widest text-center">
          課程評價網
        </p>
        <form
          action={searchRedirect(router, '/rate/filter-results')}
          className="w-[500px] flex flex-col items-center -translate-x-6"
        >
          <Search
            className="my-2 w-full"
            placeholder="輸入關鍵字"
            hasAddButton={true}
          />
        </form>
        <button
          type="button"
          onClick={() => {
            setShowFilter(true);
          }}
          className="mt-4 block mx-auto px-6 py-2 bg-slate-300 text-slate-900 rounded-xl hover:bg-slate-400 transition"
        >
          篩選標籤
        </button>
      </div>

      {showFilter && (
        <SearchFilterPanel
          onClose={() => {
            setShowFilter(false);
          }}
        />
      )}
    </main>
  );
};

export default Page;

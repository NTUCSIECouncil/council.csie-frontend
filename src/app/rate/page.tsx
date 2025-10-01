'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SearchFilterPanel from '@/app/rate/components/search-filter-panel';
import Search from '@/components/search';
import searchRedirect from '@/utils/search-redirect';
import Background from './background';

import { FaPen } from 'react-icons/fa6';
import { BsFilterLeft } from "react-icons/bs";

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
          className="w-[500px] flex flex-col items-center"
        >
          <Search
            className="my-2 w-full"
            placeholder="輸入關鍵字"
            //hasAddButton={true}
          />
        </form>
        <div className="flex justify-between items-center mt-4 w-full">
          <button
            type="button"
            onClick={() => {
              setShowFilter(true);
            }}
            className="px-6 py-2 bg-slate-300 text-slate-900 rounded-xl hover:bg-slate-400 transition"
          >
            <div className="flex items-center gap-2">
              <BsFilterLeft className="text-2xl text-[#1c1c29] self-center" />
              篩選標籤
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              return;
            }}
            className="size-10 aspect-square transform origin-center
            scale-90 hover:scale-100 hover:rounded-md transition-all duration-300 ease-in-out bg-slate-200 flex rounded-2xl"
          >
            <FaPen className="size-5 transition-all duration-300 ease-in-out text-3xl text-[#1c1c29] self-center mx-auto" />
          </button>
        </div>
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

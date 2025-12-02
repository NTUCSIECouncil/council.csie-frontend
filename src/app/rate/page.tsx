'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuTag } from "react-icons/lu";
import { FaPen } from 'react-icons/fa6';

import { UserAuth } from '@/helpers/context/auth-context';

import SearchFilterPanel from '@/app/rate/components/search-filter-panel';
import Search from '@/components/search';
import searchRedirect from '@/utils/search-redirect';
import Background from './background';

const Page = (): React.JSX.Element => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);
  const { currentUser, isUserLoaded, signIn, logOut } = UserAuth();

  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction()
      .then()
      .catch(() => "I don't want to do anything.");
  };

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div className="relative w-[90%] sm:w-[500px]">
        <p className="text-5xl font-bold my-6 tracking-widest text-center">
          課程評價網
        </p>
        <form
          action={searchRedirect(router, '/rate/filter-results')}
          className="w-full flex flex-col items-center"
        >
          <Search
            className="my-2 w-full"
            placeholder="輸入關鍵字"
          />
        </form>
        <div className="flex justify-between items-center mt-4 w-full">
          <button
            type="button"
            onClick={() => {
              setShowFilter(true);
            }}
            className="group py-2 px-4 ml-4 scale-95 hover:scale-100 transition-all duration-300 ease-in-out bg-gray-700 border-gray-600 border placeholder-gray-400 font-medium rounded-md hover:bg-gray-600 hover:border-gray-500 transition"
          >
            <div className="flex items-center gap-2 group-hover:text-white transition-colors duration-300 ease-in-out">
              <LuTag className="self-center group-hover:rotate-12 transition-transform duration-300 ease-in-out" />
              <div className="transition-transform duration-300 ease-in-out">
                篩選標籤
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              if (!isUserLoaded || currentUser === null) {
                handlePromise(signIn);
              }
              else router.push('/rate/edit');
              return;
            }}
            className="group relative py-2 px-3 mr-4 flex items-center gap-0 transform origin-center  bg-slate-200 rounded-full
            hover:px-4 hover:gap-2 hover:bg-slate-100
            transition-all duration-300 ease-in-out"
          >
            <FaPen className="text-[#1c1c29] group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            <span className="text-[#1c1c29] scale-105 font-bold max-w-0 opacity-0 group-hover:max-w-20 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap pointer-events-none">撰寫評價</span>            
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

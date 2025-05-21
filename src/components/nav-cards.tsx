import Link from 'next/link';
import React from 'react';

import { type NavPageType } from '@/utils/constants';

const NavCardInner = ({ page }: { page: NavPageType }): React.JSX.Element => (
  <>
    <div className="flex flex-col items-center space-y-4">
      <p className="text-2xl font-bold text-center">{page.name}</p>
      <hr color="white" className="w-[85%] mx-auto border-t" />
      <p className="w-[80%] mx-auto text-center">{page.description}</p>
    </div>
    { page.lastUpdateTime && (
      <div className="pt-4 text-center text-sm opacity-80">
        <p>{`上次更新：${page.lastUpdateTime.toISOString().split('T')[0]}`}</p>
      </div>
    ) }
    {
      page.disable && (
        <div className="pt-4 text-center text-sm opacity-60">
          <p>敬請期待</p>
        </div>
      )
    }
  </>
);

const NavCards = ({ pages }: { pages: NavPageType[] }): React.JSX.Element => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {pages.map((page) => {
        return page.disable
          ? (
              <div key={page.name} className="w-72 h-64 flex flex-col justify-between px-4 py-8 rounded-2xl bg-white/10 shadow-lg backdrop-brightness-50">
                <NavCardInner page={page} />
              </div>
            )
          : (
              <Link
                key={page.name}
                href={page.href}
                className="w-72 h-64 flex flex-col justify-between px-4 py-8 rounded-2xl bg-white/10 shadow-lg backdrop-blur-[15px] hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <NavCardInner page={page} />
              </Link>
            );
      })}
    </div>
  );
};

export default NavCards;

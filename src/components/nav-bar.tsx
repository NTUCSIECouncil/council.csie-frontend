'use client';

import Link from 'next/link';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import { UserAuth } from '@/helpers/context/auth-context';
import { playfairDisplay } from '@/helpers/fonts';

const NavBar = (): React.JSX.Element => {
  const { currentUser, isUserLoaded, signIn, logOut } = UserAuth();

  const [_anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const _handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const _handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const pages = [{ name: '德田生活', link: '/life' },
    { name: '課程評價網', link: '/rate' },
    { name: '課程資料庫', link: '/database' },
    { name: '教授訪談', link: '/interview' }];

  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction().then().catch(() => 'I don\'t want to do anything.');
  };

  return (
    <>
      <nav className="bg-black sticky top-0 z-30">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center h-16 text-white font-bold">
            <Link
              href="/"
              className={`${playfairDisplay.className} text-4xl px-4 pb-1 flex h-12 items-center whitespace-nowrap`}
            >
              NTU CSIE
            </Link>
            {pages.map(page => (
              <Link
                key={page.name}
                href={page.link}
                className="flex px-2 h-12 items-center transform active:scale-90 transition-transform text-2xl"
              >
                {page.name}
              </Link>
            ))}
          </div>
          <div className="px-4 self-center">
            {!isUserLoaded
              ? <ReactLoading type="spin" color="#fff" height={28} width={28} />
              : currentUser === null
                ? (
                    <div className="btn rounded-none">
                      <div className="prone text-center" onClick={() => { handlePromise(signIn); }}>
                        Login
                      </div>
                    </div>
                  )
                : (
                    <div className="dropdown">
                      <div tabIndex={0} className="btn rounded-none">
                        <div className="prone text-center tooltip tooltip-bottom" data-tip="Open settings">
                          {currentUser.displayName}
                        </div>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu p-0 mt-1 inset-x-0 bg-base-100">
                        <li><div className="prone text-center" onClick={() => { handlePromise(logOut); }}>Logout</div></li>
                      </ul>
                    </div>
                  )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

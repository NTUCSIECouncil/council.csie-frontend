'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
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

  const pages = [
    { name: '德田生活', link: '/life' },
    { name: '課程評價網', link: '/rate' },
    { name: '課程資料庫', link: '/database' },
    { name: '教授訪談', link: '/interview' },
  ];

  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction().then().catch(() => 'I don\'t want to do anything.');
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-30 shadow-md py-4 backdrop-blur-lg bg-opacity-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className={`${playfairDisplay.className} text-4xl text-white font-bold pl-4 pr-16`}
          >
            NTU CSIE
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {pages.map(page => (
              <Link
                key={page.name}
                href={page.link}
                className="text-white text-xl hover:text-gray-400 transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {!isUserLoaded
            ? <ReactLoading type="spin" color="#fff" height={28} width={28} />
            : currentUser === null
              ? (
                  <div className="btn text-white px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors border-0">
                    <div
                      className="prone text-center tooltip tooltip-bottom inline-flex items-center"
                      onClick={() => { handlePromise(signIn); }}
                    >
                      <FaUser className="fill-current w-4 h-4 mr-2" />
                      Login
                    </div>
                  </div>
                )
              : (
                  <div className="dropdown">
                    <div tabIndex={0} className="btn text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors border-0">
                      <div
                        className="prone text-center tooltip tooltip-bottom inline-flex items-center"
                        data-tip="Open settings"
                      >
                        <FaUser className="fill-current w-4 h-4 mr-2" />
                        {currentUser.displayName}
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 mt-1 inset-x-0 bg-gray-800 text-white rounded shadow-lg"
                    >
                      <li>
                        <div
                          className="prone text-center cursor-pointer hover:bg-gray-700 transition-colors"
                          onClick={() => { /* Handle Profile Click */ }}
                        >
                          Profile
                        </div>
                      </li>
                      <li>
                        <div
                          className="prone text-center cursor-pointer hover:bg-gray-700 transition-colors"
                          onClick={() => { /* Handle Settings Click */ }}
                        >
                          Settings
                        </div>
                      </li>
                      <li>
                        <div
                          className="prone text-center cursor-pointer hover:bg-gray-700 transition-colors"
                          onClick={() => { handlePromise(logOut); }}
                        >
                          Logout
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

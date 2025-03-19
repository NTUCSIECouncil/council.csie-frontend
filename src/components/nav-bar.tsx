'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { UserAuth } from '@/helpers/context/auth-context';
import { playfairDisplay } from '@/helpers/fonts';
import { navPages } from '@/utils/constants';

const pages = navPages;

const NavBar = (): React.JSX.Element => {
  const { currentUser, isUserLoaded, signIn, logOut } = UserAuth();
  const [_anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const _handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const _handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction().then().catch(() => 'I don\'t want to do anything.');
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-30 shadow-md py-4 backdrop-blur-lg bg-opacity-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className={`${playfairDisplay.className} text-4xl text-white font-bold pl-4 pr-16 transition-transform duration-300 ease-in-out hover:scale-110`}
          >
            NTU CSIE
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {pages.map(page => page.disable
              ? <div key={page.name} className="text-white text-xl opacity-50">{page.name}</div>
              : (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="text-white text-xl hover:text-gray-400 transition-colors duration-200"
                  >
                    {page.name}
                  </Link>
                ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {!isUserLoaded
            ? <span className="loading loading-spinner loading-lg" />
            : currentUser === null
              ? (
                  <div className="btn text-white px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-200 border-0">
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
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 border-0">
                      <div
                        className="prone text-center tooltip tooltip-bottom inline-flex items-center"
                      >
                        <FaUser className="fill-current w-4 h-4 mr-2" />
                        {currentUser.displayName}
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 inset-x-0 bg-gray-800 text-white rounded shadow-lg transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
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

'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { UserAuth } from '@/helpers/context/auth-context';
import { playfairDisplay } from '@/helpers/fonts';
import { homePages } from '@/utils/constants';

const pages = homePages;

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
    promiseFunction()
      .then()
      .catch(() => 'I don\'t want to do anything.');
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-md py-4 backdrop-blur-lg bg-opacity-30">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="md:flex items-center mr-0 md:mr-16">
          <Link
            href="/"
            className={`${playfairDisplay.className} flex-auto text-4xl text-center text-white font-bold pl-4 transition-transform duration-300 ease-in-out hover:scale-110`}
          >
            NTU CSIE
          </Link>
        </div>
        <div className="flex-auto items-center">
          <div className="md:hidden px-4">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex items-center justify-center text-white px-3 py-2 rounded-2xl backdrop-blur-md">
                  <svg className="size-6 text-white" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    />
                  </svg>
                </MenuButton>
              </div>

              <MenuItems className="absolute right-0 w-fit min-w-[180px] mt-6 z-10 rounded-2xl bg-black/70 shadow-lg transition-all duration-200 ease-out transform scale-95 opacity-0 data-[headlessui-state=open]:scale-100 data-[headlessui-state=open]:opacity-100">
                <div>
                  {pages.map((page, index) =>
                    page.disable
                      ? (
                          <div
                            key={index}
                            className="py-1 block w-fit min-w-[180px] text-md text-white text-center opacity-50 cursor-not-allowed"
                          >
                            {page.name}
                          </div>
                        )
                      : (
                          <MenuItem key={index} as={Link} href={page.href}>
                            <div className="py-1 block min-w-[180px] text-md text-white text-center rounded-2xl transition-colors duration-150 data-[headlessui-state=active]:bg-violet-200 data-[headlessui-state=active]:text-gray-800">
                              {page.name}
                            </div>
                          </MenuItem>
                        )
                  )}
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {pages.map(page =>
              page.disable
                ? (
                    <div key={page.name} className="text-white text-xl opacity-50">
                      {page.name}
                    </div>
                  )
                : (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="text-white text-xl hover:text-gray-400 transition-colors duration-200"
                    >
                      {page.name}
                    </Link>
                  )
            )}
          </div>
        </div>

        {/* <div className="flex items-center space-x-4"> */}
        <div className="relative w-[100px]">
          {!isUserLoaded
            ? (
                <button className="btn text-white px-4 py-2 rounded bg-gray-700 hover:bg-gray-700 opacity-50 cursor-not-allowed">
                  Loading...
                </button>
              )
            : currentUser === null
              ? (
                  <div className="btn text-white px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-200 border-0">
                    <div
                      className="prone text-center tooltip tooltip-bottom inline-flex items-center"
                      onClick={() => {
                        handlePromise(signIn);
                      }}
                    >
                      <FaUser className="fill-current w-4 h-4 mr-2" />
                      Login
                    </div>
                  </div>
                )
              : (
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 border-0"
                    >
                      <div className="prone text-center tooltip tooltip-bottom inline-flex items-center">
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
                          onClick={() => {
                            /* Handle Profile Click */
                          }}
                        >
                          Profile
                        </div>
                      </li>
                      <li>
                        <div
                          className="prone text-center cursor-pointer hover:bg-gray-700 transition-colors"
                          onClick={() => {
                            /* Handle Settings Click */
                          }}
                        >
                          Settings
                        </div>
                      </li>
                      <li>
                        <div
                          className="prone text-center cursor-pointer hover:bg-gray-700 transition-colors"
                          onClick={() => {
                            handlePromise(logOut);
                          }}
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

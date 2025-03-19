'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaUser, FaXmark } from 'react-icons/fa6';
import ReactLoading from 'react-loading';
import { UserAuth } from '@/helpers/context/auth-context';
import { playfairDisplay } from '@/helpers/fonts';
import { lifeMenu, navPages } from '@/utils/constants';

const UserButton = (): React.JSX.Element => {
  const { currentUser, isUserLoaded, signIn, logOut } = UserAuth();

  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction().then().catch(() => 'I don\'t want to do anything.');
  };

  return (
    <div className="flex items-center space-x-4">
      {!isUserLoaded
        ? <ReactLoading type="spin" color="#fff" height={28} width={28} />
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
  );
};

const NavBar = (): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

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

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-3xl focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navPages.map(page => page.name === '德田生活'
              ? (
                  <div key={page.name} className="dropdown dropdown-hover">
                    <Link
                      key={page.name}
                      href={page.href}
                      className="text-white text-xl hover:text-gray-400 transition-colors duration-200"
                    >
                      {page.name}
                    </Link>
                    <ul tabIndex={0} className="dropdown-content menu z-1 w-40 p-2 bg-gray-800 text-white rounded shadow-lg">
                      {lifeMenu.map(menu => (
                        <li key={menu.name}>
                          <Link href={menu.href} className="prone text-center cursor-pointer hover:bg-gray-700 transition-colors">
                            {menu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              : (
                  page.disable
                    ? <div key={page.name} className="text-white text-xl opacity-50">{page.name}</div>
                    : (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="text-white text-xl hover:text-gray-400 transition-colors duration-200"
                        >
                          {page.name}
                        </Link>
                      )
                ))}
          </div>
        </div>

        <UserButton />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          {navPages.map(page => page.name === '德田生活'
            ? (
                <div key={page.name} className="dropdown">
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block px-4 py-2 text-white text-lg hover:bg-gray-700 transition-colors"
                  >
                    {page.name}
                  </Link>
                  <ul className="menu bg-gray-800 text-white p-2">
                    {lifeMenu.map(menu => (
                      <li key={menu.name}>
                        <Link href={menu.href} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
                          {menu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            : (
                page.disable
                  ? <div key={page.name} className="block px-4 py-2 text-white text-lg opacity-50">{page.name}</div>
                  : (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="block px-4 py-2 text-white text-lg hover:bg-gray-700 transition-colors"
                      >
                        {page.name}
                      </Link>
                    )
              ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

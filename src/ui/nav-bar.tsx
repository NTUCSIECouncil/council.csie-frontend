'use client';
import { type FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from '@/context/auth-context';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { playfairDisplay } from '@/ui/fonts';

const NavBar = (): JSX.Element => {
  const { currentUser, isUserLoaded, signIn, logOut } = UserAuth();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const pages = [{ name: '德田生活', link: '/life' },
    { name: '課程評價網', link: '/rate' },
    { name: '課程資料庫', link: '/database' }];

  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction().then().catch(() => "I don't want to do anything.");
  };

  return (
    <>
      <nav className="bg-black sticky top-0">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center h-16 text-white font-bold">
            <Link
              href="/"
              className={`${playfairDisplay.className} text-4xl px-4 pb-1 flex h-12 items-center whitespace-nowrap`}
            >
              NTU CSIE
            </Link>
            {pages.map((page) => (
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
              ? <CircularProgress style={{ width: 28, height: 28 }} />
              : currentUser === null
                ? (
                  <button
                    className="block h-12 rounded hover:text-blue-500"
                    onClick={() => { handlePromise(signIn); }}
                  >
                    Login
                  </button>
                  )
                : (
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <Button
                        onClick={handleOpenUserMenu}
                        sx={{ p: 0 }}
                      >
                        {currentUser.displayName}
                      </Button>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {
                        // settings.map((setting) => (
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" onClick={() => { handlePromise(logOut); }}>Logout</Typography>
                        </MenuItem>
                        // ))
                      }
                    </Menu>
                  </Box>
                  )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

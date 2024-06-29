import { type FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import './NavBar.css';
import { Playfair_Display } from 'next/font/google';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const playfairDisplay = Playfair_Display({
  weight: '800',
  subsets: ['latin']
});

const NavBar: FC = () => {
  const { user, userLoaded, signIn, logOut } = UserAuth();
  // console.log(user);
  // console.log(typeof user);

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
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Toolbar disableGutters>
        <Link href="/">
          <Typography
            {...playfairDisplay}
            variant="h4"
            noWrap
            // align="center"
            sx={{
              mr: 2,
              ml: 2,
              mb: 0.7,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            NTU CSIE
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{ my: 2, color: 'white', display: 'block' }}
            // key={page}
            // onClick={handleCloseNavMenu}
            >
              <Link href={page.link}>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 600,
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                >
                  {page.name}
                </Typography>
              </Link>
            </Button>
          ))}
        </Box>
        <Box m={2} sx={{ flexGrow: 0 }}>
          {user === null
            ? (
              <Button onClick={() => { handlePromise(signIn); }}>
                Login
              </Button>
              )
            : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    disabled={!userLoaded}
                  >
                    {user.displayName}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

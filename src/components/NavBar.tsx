import { type FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import './NavBar.css';
import { Playfair_Display, Roboto } from 'next/font/google';

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

const roboto = Roboto({
  weight: '900',
  subsets: ['latin']
});

const NavBar: FC = () => {
  const { user, signIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  // console.log(user);
  // console.log(typeof user);

  const handleSignIn = (): void => {
    (async () => {
      await signIn();
    })().catch((err) => {
      console.log(err);
    });
  };

  const handleSignOut = (): void => {
    (async () => {
      await logOut();
    })().catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(false);
    })().catch((err) => {
      console.log(err);
    });
  }, [user]);

  const pages = [{ name: '德田生活', link: '/life' },
    { name: '課程評價網', link: '/rate' },
    { name: '課程資料庫', link: '/database' }];

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Toolbar disableGutters>
        <Link href="/">
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'serif',
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
                    fontFamily: 'serif',
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
              <Button onClick={signIn}>
                Login
              </Button>
              )
            : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Button>
                    {user.displayName}
                  </Button>
                </Tooltip>
              </Box>
              )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

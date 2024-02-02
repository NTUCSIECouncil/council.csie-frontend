import { type FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';
import { googleSignIn, logOut } from '../context/api';
import styles from '@/styles/utils.module.css';
import './NavBar.css';
import '@/styles/color.css';
import { Playfair_Display, Roboto } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: '800',
  subsets: ['latin']
});

const roboto = Roboto({
  weight: '900',
  subsets: ['latin']
});

const NavBar: FC = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  // console.log(user);
  // console.log(typeof user);

  const handleSignIn = (): void => {
    (async () => {
      await googleSignIn();
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
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    })().catch((err) => {
      console.log(err);
    });
  }, [user]);

  return (
    <nav>
        <Link href="/" className={playfairDisplay.className} style={{ paddingLeft: '110px', paddingTop: '40px', paddingBottom: '40px', fontSize: '32px' }} >NTU CSIE</Link>
        <ul className={ roboto.className } style={{ paddingRight: '110px' }}>
          {/* <li>
            <Link href="/test1">test1</Link>
          </li> */}
          <li>
            <Link href="/life">德田生活</Link>
          </li>
          <li>
            <Link href="/rate">課程評價網</Link>
          </li>
          <li>
            <Link href="/database">課程資料庫</Link>
          </li>
          <li className={roboto.className}>
            {loading
              ? null
              : user === null
                ? (
                  <button className={styles.loginButton} onClick={handleSignIn}>
                    Login
                  </button>
                  )
                : (
                  <div>
                    <p>Welcome, {user.displayName}</p>
                    <button className={styles.loginButton} onClick={handleSignOut} >Sign out</button>
                  </div>
                  )}
          </li>
        </ul>
    </nav>
  );
};

export default NavBar;

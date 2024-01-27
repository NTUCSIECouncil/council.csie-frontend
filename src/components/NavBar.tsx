import { type FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';
import { googleSignIn, logOut } from '../context/api';

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
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/test1">test1</Link>
        </li>
        <li>
          <Link href="/life">德田生活</Link>
        </li>
        <li>
          <Link href="/rate">課程評價網</Link>
        </li>
        <li>
          <Link href="/database">課程資料庫</Link>
        </li>
      </ul>
      {loading
        ? null
        : user === null
          ? (<ul>
        <button onClick={handleSignIn}>
          Login
        </button>
      </ul>)
          : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
            )}
    </div>
  );
};

export default NavBar;

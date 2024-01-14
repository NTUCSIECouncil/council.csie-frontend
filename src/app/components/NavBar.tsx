import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { googleSignIn, logOut } from "../context/api";

const NavBar = () => {
  const { user } = UserAuth();
  const [ loading, setLoading ] = useState(true);
  // console.log(user);
  // console.log(typeof user);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
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
      </ul>
      {loading ? null : !user ? (<ul>
        <button onClick={handleSignIn}>
          Login
        </button>
      </ul>) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
}

export default NavBar
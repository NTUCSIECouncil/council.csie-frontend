'use client'
import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const page = () => {
  const { user } = UserAuth()
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ): user ? (
        <p>Welcome to test1, {user.displayName}</p>
      ): (
        <p>please login.</p>
      )}
    </div>
  )
}

export default page
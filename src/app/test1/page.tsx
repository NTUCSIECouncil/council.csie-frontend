'use client';
import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { type UserStateText } from '@/types/FetchText';

const Page: React.FC = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    })().catch((err) => {
      console.log(err);
    });
  }, [user]);

  const [backendData, setBackendData] = useState('');

  useEffect(() => {
    (async () => {
      console.log('!');
      const header = {};
      if (user !== null) {
        // Example of how to POST a new user
        // const response = await fetch(`/api/users/${user.uid}`, {
        //   body: JSON.stringify({
        //     name: 'rwei',
        //     uid: user.uid
        //   }),
        //   headers: {
        //     ...header,
        //     'Content-Type': 'application/json',
        //     Authorization: await user.getIdToken()
        //   },
        //   method: 'POST'
        // });

        // Example of how to GET self-user
        // const response = await fetch(`/api/users/${user.uid}`, {
        //   headers: {
        //     ...header,
        //     Authorization: await user.getIdToken()
        //   },
        //   method: 'GET'
        // });

        const response = await fetch('/api/create-time', {
          headers: {
            ...header,
            Authorization: await user.getIdToken()
          }
        });
        const body = await response.json() as UserStateText;
        const createTime = body.createTime;
        setBackendData(createTime);
      }
    })().catch((err) => {
      console.log(err);
    });
  }, [user]);

  return (
    <div>
      {loading
        ? (
        <p>Loading...</p>
          )
        : user !== null
          ? (
        <div>
          <p>Welcome to test1, {user.displayName}</p>
          {
            (backendData !== undefined) ? (<p>{backendData}</p>) : (<p></p>)
          }
        </div>
            )
          : (
        <p>please login.</p>
            )}
    </div>
  );
};

export default Page;

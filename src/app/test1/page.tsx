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
        const responce = await fetch('http://localhost:3010/create-time', {
          headers: {
            ...header,
            Authorization: await user.getIdToken()
          }
        }
        );
        const body = await responce.json() as UserStateText;
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

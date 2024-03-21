'use client';
import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { type UserStateText } from '@/types/FetchText';

const Page: React.FC = () => {
  const { user, request } = UserAuth();
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
      if (request !== undefined) {
        const response = await request('/api/create-time');
        const body: UserStateText = await response.json();
        const createTime = body.createTime;
        setBackendData(createTime);
      }
    })().catch((err) => {
      console.log(err);
    });
  }, [request]);

  return (
    <div>
      {loading
        ? (
          <p>Loading...</p>
          )
        : user !== null
          ? (
            <div>
              <p>
                Welcome to test1,
                {user.displayName}
              </p>
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

'use client';

import { env } from '@/env';
import { UserAuth } from '@/helpers/context/auth-context';

const BACKEND_URL = env.NEXT_PUBLIC_API_BASE_URL;

const clientFetch = (url: string, args?: RequestInit) => {
  const { currentToken } = UserAuth();
  const headers = {
    ...args?.headers,
    Authorization: `Bearer ${currentToken ?? ''}`,
  };
  fetch(BACKEND_URL + url, { ...args, headers });
};
export default clientFetch;

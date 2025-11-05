'use client';

import { env } from '@/env';

const BACKEND_URL = env.NEXT_PUBLIC_API_BASE_URL;

const clientFetch = (url: string, args?: RequestInit) => {
  return fetch(BACKEND_URL + url, args);
};
export default clientFetch;

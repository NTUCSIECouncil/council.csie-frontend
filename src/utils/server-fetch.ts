'use server';

import { cookies } from 'next/headers';

import { env } from '@/env';

const BACKEND_URL = env.API_BASE_URL;

const serverFetch = async (url: string, args?: RequestInit) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const headers = new Headers(args?.headers);
  headers.set('Authorization', `Bearer ${token}`);
  return fetch(BACKEND_URL + url, { ...args, headers });
};
export default serverFetch;

'use server';

import { env } from '@/env';

const BACKEND_URL = env.API_BASE_URL;

const serverFetch = (url: string, args?: RequestInit) => {
  return fetch(BACKEND_URL + url, args);
};
export default serverFetch;

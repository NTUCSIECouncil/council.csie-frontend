import { headers } from 'next/headers';

export const APIFetch = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const host = headers().get('host') ?? 'localhost';
  console.log(host);
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const response = await fetch(`${protocol}://${host}${url}`, options);
  return response;
};

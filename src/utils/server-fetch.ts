// Fetch from the server-side

const BACKEND_URL = 'http://localhost:3010';

const serverFetch = (url: string, args?: RequestInit) => {
  return fetch(BACKEND_URL + url, args);
};
export default serverFetch;

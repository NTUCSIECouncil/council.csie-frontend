'use client';

import { useRouter } from 'next/navigation';

const NotFound = (): React.JSX.Element => {
  const router = useRouter();
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested article.</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
    </main>
  );
};

export default NotFound;

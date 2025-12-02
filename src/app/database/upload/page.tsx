'use server';

import { type Course } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';
import Background from './background';
import { UploadForm } from './components/UploadForm';

interface CoursesResponse {
  courses: Course[];
}

const Page = async (): Promise<React.JSX.Element> => {
  // Fetch courses on the server
  let courses: Course[] = [];
  let fetchError: string | null = null;
  try {
    const res = await serverFetch('/api/courses');
    if (!res.ok) {
      throw new Error(`Failed to fetch courses. Status: ${String(res.status)}`);
    }
    const data = (await res.json()) as CoursesResponse;
    courses = data.courses;
  } catch (e) {
    fetchError = e instanceof Error ? e.message : 'An unknown error occurred';
  }

  return (
    <main className="flex flex-1 justify-center items-center bg-gray-900 text-white">
      <Background />
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold tracking-widest mb-2">
          上傳考古題
        </h1>
        <p className="text-sm text-gray-400 mb-8 font-mono">
          DISCLAIMER: 考古題上傳後會先由學術部審核後再放上課程資料庫
        </p>
        {fetchError ? (
          <p className="text-red-500">Error: {fetchError}</p>
        ) : (
          <UploadForm courses={courses} />
        )}
      </div>
    </main>
  );
};

export default Page;

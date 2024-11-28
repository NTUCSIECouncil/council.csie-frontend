import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { IoMdLink } from 'react-icons/io';
import serverFetch from '@/utils/server-fetch';
import Background from '../filter-results/background';

interface QuizResponse {
  items: Quiz[];
}

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    course: UUID;
    offset?: number;
    limit?: number;
  };
}): Promise<React.JSX.Element> => {
  const course = searchParams?.course ?? '';
  const currentPage = Number(searchParams?.offset ?? '0');
  const limit = Number(searchParams?.limit ?? 10);
  const queryParams = new URLSearchParams();
  if (course !== '')
    queryParams.append('course', course);
  if (currentPage !== 0)
    queryParams.append('offset', (currentPage * limit).toString());
  const url = `/api/quizzes/search?${queryParams.toString()}`;
  const res = await serverFetch(url, { cache: 'force-cache' });
  if (res.status != 200) {
    if (res.status === 404) notFound();
    throw Error('Unknown error');
  }
  const ret = await res.json() as QuizResponse;
  if (ret.items.length === 0) notFound();
  const title: string = ret.items[0].title;

  return (
    <main className="flex flex-col items-center">
      <Background />
      <div className="w-full max-w-5xl m-4 pt-2">
        <Suspense>
          <div className="w-full flex items-end my-2 px-4">
            <p className="font-bold text-5xl mr-3">{title}</p>
            <p className="ond-bold text-3xl">的歷屆考古題</p>
          </div>
          <hr className="w-full border-gray-500 border-t-4 my-3" />
          <div className="w-full flex flex-around flex-wrap pt-6">
            {ret.items.map(quiz => (
              <Link
                key={quiz._id}
                href={quiz.downloadLink}
              >
                <div className="flex flex-row gap-1 items-center">
                  <p className="font-bold text-2xl white">{quiz.semester}</p>
                  <IoMdLink className="text-2xl text-white -rotate-45" />
                </div>
              </Link>
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default Page;

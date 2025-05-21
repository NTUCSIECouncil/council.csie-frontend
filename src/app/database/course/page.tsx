import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { IoMdLink } from 'react-icons/io';
import serverFetch from '@/utils/server-fetch';
import Background from '../filter-results/background';

interface QuizResponse {
  quizzes: Quiz[];
  meta: {
    total: number;
    offset: number;
    limit: number;
  };
}

interface CourseResponse {
  course: Course;
}

const Page = async (
  props: {
    searchParams?: Promise<{
      course: UUID;
      offset?: number;
      limit?: number;
    }>;
  }
): Promise<React.JSX.Element> => {
  const searchParams = await props.searchParams;
  const course = searchParams?.course ?? '';
  const currentPage = Number(searchParams?.offset ?? '0');
  const limit = Number(searchParams?.limit ?? 10);
  const queryParams = new URLSearchParams();
  if (currentPage !== 0)
    queryParams.append('offset', (currentPage * limit).toString());
  const url = `/api/courses/${course}/quizzes?${queryParams}`;
  const res = await serverFetch(url, { cache: 'force-cache' });
  if (res.status != 200) {
    if (res.status === 404) notFound();
    throw Error('Unknown error');
  }
  const ret = await res.json() as QuizResponse;
  if (ret.quizzes.length === 0) notFound();
  const course_res = await serverFetch(`/api/courses/${ret.quizzes[0].course}`, { cache: 'force-cache' });
  const course_ret = await course_res.json() as CourseResponse;
  const title: string = course_ret.course.names[0];

  return (
    <main className="flex flex-col items-center self-start">
      <Background />
      <div className="w-full max-w-5xl m-4 pt-2">
        <Suspense>
          <div className="w-full flex items-end my-2 px-4">
            <p className="font-bold md:text-4xl xl:text-5xl text-3xl mr-3">{title}</p>
            <p className="ond-bold md:text-2xl xl:text-3xl text-xl ">的歷屆考古題</p>
          </div>
          <hr className="w-full border-gray-500 border-t-4 my-3" />
          <div className="w-full flex flex-around flex-wrap pt-6 gap-6">
            {ret.quizzes.map(quiz => (
              <Link
                key={quiz._id}
                href="https://www.example.com/"
              >
                <div className="flex flex-row gap-1 items-center">
                  <p className="font-bold xl:text-2xl text-xl white">{quiz.semester + ' ' + quiz.session}</p>
                  <IoMdLink className="xl:text-2xl text-xl text-white -rotate-45" />
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

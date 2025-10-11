import { type UUID } from 'crypto';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { env } from '@/env';
import { type Course, type Quiz, type User } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';
import Background from '../filter-results/background';
import DownloadLink from './components/download-link';

const BACKEND_URL = env.API_BASE_URL;

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

const SESSION_LABELS = ['first', 'second', 'midterm', 'final', 'other'];
const SESSION_CHINESE_LABELS = [
  '第一次期中',
  '第二次期中',
  '期中考',
  '期末考',
  '其他',
];
const SESSION_TO_CHINESE_LABEL = new Map(
  SESSION_LABELS.map((k, i) => [k, SESSION_CHINESE_LABELS[i]]),
);
const SESSION_ORDER = new Map(SESSION_LABELS.map((k, i) => [k, i]));

const Page = async (props: {
  searchParams?: Promise<{
    course: UUID;
    offset?: number;
    limit?: number;
  }>;
}): Promise<React.JSX.Element> => {
  const searchParams = await props.searchParams;
  const course = searchParams?.course ?? '';
  const currentPage = Number(searchParams?.offset ?? '0');
  const limit = Number(searchParams?.limit ?? '10');
  const queryParams = new URLSearchParams();
  if (currentPage !== 0)
    queryParams.append('offset', (currentPage * limit).toString());
  queryParams.append('embed[0]', 'uploader');
  const url = `/api/courses/${course}/quizzes?${queryParams}`;
  const res = await serverFetch(url, { cache: 'force-cache' });
  if (res.status != 200) {
    if (res.status === 404) notFound();
    throw Error('Unknown error');
  }
  const ret = (await res.json()) as QuizResponse;
  if (ret.quizzes.length === 0) notFound();
  const course_res = await serverFetch(
    `/api/courses/${ret.quizzes[0].course}`,
    { cache: 'force-cache' },
  );
  const course_ret = (await course_res.json()) as CourseResponse;
  const title: string = course_ret.course.names[0];
  const semester: string = course_ret.course.semester;
  const quizzes = ret.quizzes;
  quizzes.sort(
    (a, b) =>
      (SESSION_ORDER.get(a.session) ?? Infinity) -
      (SESSION_ORDER.get(b.session) ?? Infinity),
  );

  return (
    <main className="flex flex-col items-center self-start">
      <Background />
      <div className="w-full max-w-5xl m-4 pt-2">
        <Suspense>
          <div className="w-full flex items-end my-2 px-4">
            <p className="font-bold md:text-4xl xl:text-5xl text-3xl mr-3">
              {semester + ' ' + title}
            </p>
            <p className="ond-bold md:text-2xl xl:text-3xl text-xl ">
              的歷屆考古題
            </p>
          </div>
          <hr className="w-full border-gray-500 border-t-4 my-3" />
          <div className="relative overflow-x-auto my-6 no-scrollbar">
            <table className="w-full text-white-400 text-center font-medium">
              <thead className="font-bold">
                <tr className="border-b-2 mb-2">
                  <th scope="col" className="px-6 py-3">
                    考試類別
                  </th>
                  <th scope="col" className="px-6 py-3">
                    上傳者
                  </th>
                  <th scope="col" className="px-6 py-3">
                    下載連結
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {quizzes.map((quiz: Quiz) => (
                  <tr key={quiz._id} className="hover:bg-gray-600">
                    <th className="px-6 py-3 whitespace-nowrap">
                      {SESSION_TO_CHINESE_LABEL.get(quiz.session)}
                    </th>
                    <td className="px-6 py-3">
                      {(quiz.uploader as User).nickname}
                    </td>
                    <td className="px-6 py-3 flex justify-center">
                      <DownloadLink
                        quizId={quiz._id}
                        BACKEND_URL={BACKEND_URL}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default Page;

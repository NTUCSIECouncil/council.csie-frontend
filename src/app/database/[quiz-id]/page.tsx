import Link from 'next/link';
import PortraitIcon from '@mui/icons-material/Portrait';
import { type UUID } from 'crypto';
import { notFound } from 'next/navigation';
import InformationBock from '@/components/information-block';
import { APIFetch } from '@/lib/api-fetch';

interface QuizProp {
  _id?: UUID;
  title: string;
  course: string;
  semester: string;
  download_link: string;
}

const Page = async ({
  params
}: {
  params: { quizID: string };
}): Promise<JSX.Element> => {
  // test url: 00000004-0001-0000-0000-000000000000

  const response = await APIFetch(`/api/quizzes/${params.quizID}`, { cache: 'force-cache' });
  if (!response.ok) {
    if (response.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const res = await response.json();
  const quiz: QuizProp = res.result;

  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="flex flex-1 flex-col m-5 w-4/5 min-w-96">
        <p className="text-4xl font-bold">
          {quiz.course + ' - ' + quiz.title}
        </p>
        <div className="flex justify-between">
          <InformationBock
            avatar={<PortraitIcon />}
            primary="Author"
            secondary="author"
          />
        </div>
        <div className="text-right">
          <Link
            href={quiz.download_link}
            rel="noopener noreferrer"
            target="_blank"
          >
            Click here to open the file in a new tab.
          </Link>
        </div>
        <iframe src={quiz.download_link} className="flex flex-1" />
      </div>
    </main>
  );
};

export default Page;

import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import Markdown from 'react-markdown';

import PreviousPageButton from '@/components/previous-page-button';
import { type Article, type Course } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';
import ClickableTag from './components/clickable-tag';
import CollapsibleCourseInfo from './components/collapsible-course-info';
import EditButton from './components/edit-button';

interface ArticleResponse {
  article: Article;
  course?: Course;
}

const mockCourse = {
  _id: 'course-123' as const,
  curriculum: 'CSIE1212',
  lecturer: '劉邦鋒',
  names: ['計算機程式設計', 'Computer Programming'],
  credit: 3,
  categories: ['必修', '程式設計'],
};

const mockMetrics = {
  createdAt: '2024-03-15',
};

const Article = async ({
  articleId,
}: {
  articleId: string;
}): Promise<React.JSX.Element> => {
  const res = await serverFetch(`/api/articles/${articleId}`, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const articleMetaResponse = (await res.json()) as ArticleResponse;
  const articleMeta = articleMetaResponse.article;

  console.log('Fetched article metadata:', articleMetaResponse);

  const resContent = await serverFetch(`/api/articles/${articleId}/file`, {
    cache: 'no-store',
  });
  if (!resContent.ok) {
    if (resContent.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const content = await resContent.text();

  const courseData = mockCourse;

  return (
    <>
      <PreviousPageButton />

      {/* Post Title and Author */}
      <div className="w-full flex justify-between items-end my-4 px-4">
        <h1 className="font-bold text-4xl text-white">{articleMeta.title}</h1>
        <div className="flex items-center gap-1 text-white">
          <FaUser />
          <span className="text-xl">{articleMeta.creator}</span>
        </div>
      </div>

      <hr className="w-full border-gray-500 border-t-4" />

      {/* Course Information - Collapsible */}
      <CollapsibleCourseInfo
        courseData={courseData}
        semester={articleMeta.semester}
      />

      {/* Tags and Metrics */}
      <div className="w-full flex gap-3 justify-between items-center my-4 px-4">
        <div className="flex gap-1 items-center">
          {articleMeta.tags.map(
            tag => tag && <ClickableTag key={tag} tag={tag} />,
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>{mockMetrics.createdAt}</span>
          </div>

          <EditButton articleId={articleId} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start w-full px-4 text-white">
        <Markdown>{content}</Markdown>
      </div>
    </>
  );
};

export default Article;

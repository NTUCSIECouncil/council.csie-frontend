import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaTags, FaUser } from 'react-icons/fa';
import Markdown from 'react-markdown';

import { type Article, type Course } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';
import ClickableTag from './components/clickable-tag';
import CollapsibleCourseInfo from './components/collapsible-course-info';
import EditButton from './components/edit-button';

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
  const articleMetaResponse = (await res.json()) as { article: Article };
  const articleMeta = articleMetaResponse.article;

  console.log('Fetched article metadata:', articleMetaResponse);

  const resContent = await serverFetch(`/api/articles/${articleId}/file`, {
    cache: 'no-store',
  });
  if (!resContent.ok) {
    if (resContent.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const content = ((await resContent.json()) as { file: string }).file;

  const courseRes = await serverFetch(`/api/courses/${articleMeta.course}`, {
    cache: 'no-store',
  });
  if (!courseRes.ok) {
    if (courseRes.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }

  const courseMeta = ((await courseRes.json()) as { course: Course }).course;

  return (
    <>
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
        courseData={courseMeta}
        semester={articleMeta.semester}
      />

      {/* Tags and Metrics */}
      <div className="w-full flex gap-3 justify-between items-start my-4 px-4">
        <div className="flex items-center gap-2 mb-3">
          <FaTags className="text-white" />
          <span className="text-lg font-semibold text-white">標籤</span>
          <div className="flex gap-1 items-start px-2">
            {articleMeta.tags.map(
              tag => tag && <ClickableTag key={tag} tag={tag} />,
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div className="flex items-end gap-1">
            <FaCalendarAlt />
            <span>{mockMetrics.createdAt}</span>
          </div>

          <EditButton articleId={articleId} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start prose prose-slate max-w-none">
        <Markdown>{content}</Markdown>
      </div>
    </>
  );
};

export default Article;

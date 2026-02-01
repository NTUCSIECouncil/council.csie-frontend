import { notFound } from 'next/navigation';

import { type Article, type Course } from '@/types/backend';
import serverFetch from '@/utils/server-fetch';
import ArticleDisplay from './components/article-display';

const Article = async ({
  articleId,
}: {
  articleId: string;
}): Promise<React.JSX.Element> => {
  const queryParams = new URLSearchParams();
  queryParams.append('embed[0]', 'creator');

  const res = await serverFetch(`/api/articles/${articleId}?${queryParams.toString()}`, {
    cache: 'force-cache',
  });
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const articleMetaResponse = (await res.json()) as { article: Article };
  const articleMeta = articleMetaResponse.article;

  console.log('Fetched article metadata:', articleMetaResponse);

  const creatorId =
    typeof articleMeta.creator === 'string'
      ? articleMeta.creator
      : articleMeta.creator._id;
  const creatorName =
    typeof articleMeta.creator === 'string'
      ? 'Unknown'
      : articleMeta.creator.nickname;

  const resContent = await serverFetch(`/api/articles/${articleId}/file`, {
    cache: 'no-store',
  });
  if (!resContent.ok) {
    if (resContent.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }
  const content = ((await resContent.json()) as { file: string }).file;

  const courseId =
    typeof articleMeta.course === 'string'
      ? articleMeta.course
      : articleMeta.course._id;

  const courseRes = await serverFetch(`/api/courses/${courseId}`, {
    cache: 'no-store',
  });
  if (!courseRes.ok) {
    if (courseRes.status === 404) notFound();
    throw new Error('Failed to fetch response');
  }

  const courseMeta = ((await courseRes.json()) as { course: Course }).course;

  const articleData = {
    title: articleMeta.title,
    creatorId: creatorId,
    creatorName: creatorName,
    content: content,
    tags: articleMeta.tags,
    createdAt: '2024-03-15', // TODO: get this from the API
  };

  const courseData = {
    names: courseMeta.names,
    curriculum: courseMeta.curriculum,
    lecturer: courseMeta.lecturer,
  };

  return (
    <ArticleDisplay
      articleData={articleData}
      courseData={courseData}
      semester={articleMeta.semester}
      articleId={articleId}
      showEditButton={true}
    />
  );
};

export default Article;

'use client';

import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import Markdown from 'react-markdown';

import ClickableCourseName from '@/app/rate/articles/[articleId]/components/clickable-course-name';
import ClickableTag from '@/app/rate/articles/[articleId]/components/clickable-tag';
import CollapsibleCourseInfo from '@/app/rate/articles/[articleId]/components/collapsible-course-info';
import { type Course } from './course-search';

interface Props {
  title: string;
  content: string;
  course: Course | null;
  tags: string[];
  author: string;
}

// Mock course data for preview - this would be converted from Course type
const convertToPreviewCourse = (course: Course | null) => {
  if (!course) return null;
  return {
    names: [course.name],
    curriculum: course.code,
    lecturer: course.professor,
  };
};

const PreviewComponent = ({
  title,
  content,
  course,
  tags,
  author,
}: Props): React.JSX.Element => {
  const previewCourse = convertToPreviewCourse(course);
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Post Title and Author */}
      <div className="w-full flex justify-between items-end my-4 px-4">
        <h1 className="font-bold text-4xl text-white">
          {title || '課程評價標題'}
        </h1>
        <div className="flex items-center gap-1 text-white">
          <FaUser />
          <span className="text-xl">{author || '匿名使用者'}</span>
        </div>
      </div>

      <hr className="w-full border-gray-500 border-t-4" />

      {/* Course Information - Collapsible */}
      {previewCourse && (
        <CollapsibleCourseInfo
          courseData={previewCourse}
          semester={course?.year || '2024'}
        />
      )}

      {/* Tags and Metrics */}
      <div className="w-full flex gap-3 justify-between items-center my-4 px-4">
        <div className="flex gap-1 items-center">
          {tags.length > 0 ? (
            tags.map(tag => <ClickableTag key={tag} tag={tag} />)
          ) : (
            <span className="text-gray-400">尚未選擇標籤</span>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start w-full px-4 text-white">
        {content ? (
          <div className="prose prose-invert max-w-none">
            <Markdown>{content}</Markdown>
          </div>
        ) : (
          <div className="text-gray-400 italic">請在編輯模式中輸入內容...</div>
        )}
      </div>
    </>
  );
};

export default PreviewComponent;

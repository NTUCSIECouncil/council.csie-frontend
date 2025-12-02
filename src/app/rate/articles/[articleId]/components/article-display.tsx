'use client';

import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { LuTag } from "react-icons/lu";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import ClickableTag from './clickable-tag';
import CollapsibleCourseInfo from './collapsible-course-info';
import EditButton from './edit-button';
import ReportButton from './report-button';
import { UserAuth } from '@/helpers/context/auth-context';

export interface ArticleData {
  title: string;
  creatorId: string;
  creatorName: string;
  content: string;
  tags: string[];
  createdAt?: string;
}

export interface CourseData {
  names: string[];
  curriculum: string;
  lecturer: string;
}

interface Props {
  articleData: ArticleData;
  courseData: CourseData;
  semester: string;
  articleId?: string; // Optional, only needed for edit button
  showPreviousButton?: boolean;
  showEditButton?: boolean;
}


const ArticleDisplay = ({
  articleData,
  courseData,
  semester,
  articleId,
  showEditButton = true,
}: Props): React.JSX.Element => {
  const { currentUser, isUserLoaded, signIn, logOut } = UserAuth();
  
  return (
    <>
      {/* Post Title and Author */}
      <div className="w-full flex justify-between items-end my-4 px-4">
        <h1 className="font-bold text-4xl text-white">{articleData.title}</h1>
        <div className="flex items-center gap-1 text-white">
          <FaUser />
          <span className="text-xl">{articleData.creatorName}</span>
        </div>
      </div>

      <hr className="w-full border-gray-500 border-t-4" />

      {/* Course Information - Collapsible */}
      <CollapsibleCourseInfo courseData={courseData} semester={semester} />

      {/* Tags and Metrics */}
      <div className="w-full flex gap-3 justify-between items-center my-4 px-4">
        <div className="flex items-center flex-shrink min-w-0 max-w-full">
          <div className="aspect-square rounded-md bg-transparent border-2 border-blue-300 p-1 mr-2">
            <LuTag className="text-blue-300" strokeWidth={3} />
          </div>
          <div className="flex items-center overflow-x-auto no-scrollbar flex-1 min-w-0 whitespace-nowrap">
          {articleData.tags.length > 0 ? (
            articleData.tags.map(tag => {
              return (
                <div key={tag} className="flex items-center gap-1 min-w-0 flex-shrink-0 whitespace-nowrap">
                  {tag !== articleData.tags[0] && <p className="text-blue-300 flex-shrink-0">．</p>}
                  <ClickableTag key={tag} tag={tag} style="text" />
                </div>
              );
            })
          ) : (
            <span className="text-gray-400">尚未選擇標籤</span>
          )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300 flex-shrink-0 whitespace-nowrap">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>
              {articleData.createdAt ?? new Date().toISOString().split('T')[0]}
            </span>
          </div>

          {(showEditButton && articleId) && (currentUser?.uid === articleData.creatorId
            ? <EditButton articleId={articleId} />
            : <ReportButton articleId={articleId} articleTitle={articleData.title} />)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start w-full px-4 text-white">
        {articleData.content ? (
          <div className="prose prose-invert max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{articleData.content}</Markdown>
          </div>
        ) : (
          <div className="text-gray-400 italic">請在編輯模式中輸入內容...</div>
        )}
      </div>
    </>
  );
};

export default ArticleDisplay;

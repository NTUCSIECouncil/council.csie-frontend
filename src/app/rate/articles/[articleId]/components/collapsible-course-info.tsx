'use client';

import { useState } from 'react';
import { FaBook, FaChevronDown, FaChevronRight } from 'react-icons/fa';

import ClickableCourseName from './clickable-course-name';

interface Props {
  courseData: {
    names: string[];
    curriculum: string;
    lecturer: string;
  };
  semester: string;
}

const CollapsibleCourseInfo = ({
  courseData,
  semester,
}: Props): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full px-4 my-4">
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity"
      >
        <FaBook className="text-white" />
        <span className="text-lg font-semibold text-white">課程資訊</span>
        {isExpanded ? (
          <FaChevronDown className="text-white" />
        ) : (
          <FaChevronRight className="text-white" />
        )}
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white ml-6">
          <div>
            <span className="text-sm text-gray-300 block">課程名稱</span>
            <ClickableCourseName courseName={courseData.names[0]} />
          </div>

          <div>
            <span className="text-sm text-gray-300 block">課號</span>
            <span className="font-medium">{courseData.curriculum}</span>
          </div>

          <div>
            <span className="text-sm text-gray-300 block">授課教師</span>
            <span className="font-medium">{courseData.lecturer}</span>
          </div>

          <div>
            <span className="text-sm text-gray-300 block">學期</span>
            <span className="font-medium">{semester}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCourseInfo;

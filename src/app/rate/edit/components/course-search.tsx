'use client';

import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

export interface Course {
  id: string;
  name: string;
  code: string;
  year: string;
  professor: string;
}

interface Props {
  selectedCourse: Course | null;
  onCourseSelect: (course: Course | null) => void;
  disabled?: boolean;
}

// Mock data for development - in real implementation this would come from API
const MOCK_COURSES: Course[] = [
  {
    id: '1',
    name: '計算機程式設計',
    code: 'CSIE1212',
    year: '2024',
    professor: '劉邦鋒',
  },
  {
    id: '2',
    name: '資料結構與演算法',
    code: 'CSIE2310',
    year: '2024',
    professor: '陳縕儂',
  },
  {
    id: '3',
    name: '機率統計',
    code: 'MATH2810',
    year: '2024',
    professor: '林軒田',
  },
  {
    id: '4',
    name: '離散數學',
    code: 'CSIE1310',
    year: '2024',
    professor: '呂學一',
  },
  {
    id: '5',
    name: '計算機組織',
    code: 'CSIE2340',
    year: '2024',
    professor: '洪士灝',
  },
];

const CourseSearch = ({
  selectedCourse,
  onCourseSelect,
  disabled = false,
}: Props): React.JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCourses = MOCK_COURSES.filter(
    course =>
      course.name.toLowerCase().includes(searchText.toLowerCase()) ||
      course.code.toLowerCase().includes(searchText.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleCourseSelect = (course: Course) => {
    onCourseSelect(course);
    setSearchText('');
    setIsDropdownOpen(false);
  };

  const handleClearSelection = () => {
    onCourseSelect(null);
    setSearchText('');
  };

  return (
    <div className="relative">
      <label className="block text-lg font-medium mb-4 text-white">
        課程 <span className="text-red-400">*</span>
      </label>

      {selectedCourse ? (
        <div className="flex items-center justify-between p-4 border border-gray-500 rounded-xl bg-[#1c1c29] bg-opacity-50">
          <div>
            <div className="font-semibold text-white">
              {selectedCourse.name} / {selectedCourse.code}
            </div>
            <div className="text-sm text-gray-300">
              {selectedCourse.year} / {selectedCourse.professor}
            </div>
          </div>
          {!disabled && (
            <button
              type="button"
              onClick={handleClearSelection}
              className="p-2 hover:bg-gray-700 rounded-full transition text-gray-400 hover:text-white"
              title="清除選擇"
            >
              <FaTimes />
            </button>
          )}
        </div>
      ) : (
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              placeholder="搜尋課程名稱、課號或教授..."
              className="w-full px-4 py-3 pr-12 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-[#1c1c29] bg-opacity-50 text-white placeholder:text-gray-400"
              value={searchText}
              onChange={e => {
                setSearchText(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => {
                setIsDropdownOpen(true);
              }}
              disabled={disabled}
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {isDropdownOpen && searchText && filteredCourses.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-[#1c1c29] border border-gray-500 rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {filteredCourses.map(course => (
                <button
                  key={course.id}
                  type="button"
                  className="w-full px-4 py-3 text-left hover:bg-gray-700 border-b border-gray-600 last:border-b-0 transition"
                  onClick={() => {
                    handleCourseSelect(course);
                  }}
                >
                  <div className="font-semibold text-white">
                    {course.name} / {course.code}
                  </div>
                  <div className="text-sm text-gray-300">
                    {course.year} / {course.professor}
                  </div>
                </button>
              ))}
            </div>
          )}

          {isDropdownOpen && searchText && filteredCourses.length === 0 && (
            <div className="absolute z-10 w-full mt-1 bg-[#1c1c29] border border-gray-500 rounded-xl shadow-lg p-4 text-center text-gray-400">
              找不到符合的課程
            </div>
          )}
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setIsDropdownOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default CourseSearch;

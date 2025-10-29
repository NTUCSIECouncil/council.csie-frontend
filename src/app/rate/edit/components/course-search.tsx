'use client';

import { useCallback, useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import { Course } from '@/types/backend';
import clientFetch from '@/utils/client-fetch';

interface Props {
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  disabled?: boolean;
}

interface APIResponse {
  courses: Course[];
  meta: {
    total: number;
    offset: number;
    limit: number;
  };
}

const CourseSearch = ({
  selectedCourse,
  setSelectedCourse,
  disabled = false,
}: Props): React.JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = useCallback(async (keyword: string) => {
    if (!keyword.trim()) {
      setCourses([]);
      return;
    }

    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        keyword,
        limit: '20',
      });
      const res = await clientFetch(`/api/courses?${params.toString()}`, {
        cache: 'force-cache',
      });
      if (!res.ok) {
        setCourses([]);
        return;
      }

      const data: APIResponse = await res.json();
      setCourses(data.courses);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchCourses(searchText);
    }, 300); // Debounce API calls

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText, fetchCourses]);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setSearchText('');
    setIsDropdownOpen(false);
  };

  const handleClearSelection = () => {
    setSelectedCourse(null);
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
              {/* FIXME: names is an array? */}
              {selectedCourse.names[0]} / {selectedCourse.curriculum}
            </div>
            <div className="text-sm text-gray-300">
              {selectedCourse.lecturer}
            </div>
          </div>
          {!disabled && (
            <button
              type="button"
              onClick={handleClearSelection}
              className="p-2 hover:bg-gray-700 rounded-full transition text-gray-400 hover:text-white cursor-pointer"
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

          {/* display course list */}
          {isDropdownOpen && searchText && courses.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-[#1c1c29] border border-gray-500 rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {courses.map((course: Course, index: number) => (
                <button
                  key={index}
                  type="button"
                  className="w-full px-4 py-3 text-left hover:bg-gray-700 border-b border-gray-600 last:border-b-0 transition cursor-pointer"
                  onClick={() => {
                    handleCourseSelect(course);
                  }}
                >
                  <div className="font-semibold text-white">
                    {course.names[0]} / {course.curriculum}
                  </div>
                  <div className="text-sm text-gray-300">{course.lecturer}</div>
                </button>
              ))}
            </div>
          )}

          {isDropdownOpen &&
            searchText &&
            courses.length === 0 &&
            !isLoading && (
              <div className="absolute z-10 w-full mt-1 bg-[#1c1c29] border border-gray-500 rounded-xl shadow-lg p-4 text-center text-gray-400">
                找不到符合的課程
              </div>
            )}

          {isDropdownOpen && searchText && isLoading && (
            <div className="absolute z-10 w-full mt-1 bg-[#1c1c29] border border-gray-500 rounded-xl shadow-lg p-4 text-center text-gray-400">
              搜尋中...
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

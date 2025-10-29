'use client';

import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import SearchFilterPanel from '@/app/rate/components/search-filter-panel';
import { Course } from '@/types/backend';
import { useEdit } from '../context';
import ContentEditor from './content-editor';
import CourseSearch from './course-search';
import Disclaimer from './disclaimer';
import SemesterSelect from './semester-select';

const EditComponent = (): React.JSX.Element => {
  const [showTagFilter, setShowTagFilter] = useState(false);
  const { title, setTitle, selectedTags, setSelectedTags } = useEdit();

  return (
    <>
      {/* Post Title Input */}
      <div className="w-full px-4 my-4">
        <label className="block text-lg font-medium mb-4 text-white">
          標題 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="請輸入評價標題..."
          className="w-full px-4 py-3 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-[#1c1c29] bg-opacity-50 text-white placeholder:text-gray-400"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      {/* Course + Semester */}
      <div className="w-full px-4 my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseSearch />
          <SemesterSelect />
        </div>
      </div>

      {/* Content Editor */}
      <div className="w-full px-4 my-4">
        <ContentEditor />
      </div>

      {/* Tag Selection */}
      <div className="w-full px-4 my-4">
        <div className="flex items-center justify-between mb-4">
          <label className="block text-lg font-medium text-white">標籤</label>
          <button
            type="button"
            onClick={() => setShowTagFilter(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-300 text-slate-900 rounded-xl hover:bg-slate-400 transition"
          >
            <FaFilter />
            篩選標籤
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="w-full px-4 my-4">
        <Disclaimer />
      </div>

      {/* Tag Filter Modal */}
      {showTagFilter && (
        <div className="fixed inset-0 z-50">
          <SearchFilterPanel
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
            onClose={() => setShowTagFilter(false)}
          />
        </div>
      )}
    </>
  );
};

export default EditComponent;

'use client';

import { useState } from 'react';
import { LuTag } from 'react-icons/lu';

import SearchFilterPanel from '@/app/rate/components/search-filter-panel';

const SearchFilterControls = ({
  initialTags = [],
}: {
  initialTags?: string[];
}): React.JSX.Element => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

  return (
    <div className="shrink-0">
      <button
        type="button"
        onClick={() => {
          setShowFilter(true);
        }}
        className="cursor-pointer group py-2 px-3 flex items-center gap-2 bg-gray-700 border-gray-600 border placeholder-gray-400 font-medium rounded-xl hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 ease-in-out"
      >
        <LuTag className="self-center group-hover:rotate-12 transition-transform duration-300 ease-in-out" />
        <span className="transition-transform duration-300 ease-in-out">
          篩選標籤
        </span>
      </button>
      {selectedTags.length > 0 && (
        <input type="hidden" name="tags" value={JSON.stringify(selectedTags)} />
      )}
      {showFilter && (
        <SearchFilterPanel
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
          onClose={() => {
            setShowFilter(false);
          }}
        />
      )}
    </div>
  );
};

export default SearchFilterControls;

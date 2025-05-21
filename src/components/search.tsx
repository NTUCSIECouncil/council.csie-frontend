'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';

const Search = ({
  placeholder,
  className,
  hasAddButton = false,
  initialValue = '',
}: {
  placeholder: string;
  className?: string;
  hasAddButton?: boolean;
  initialValue?: string;
}): React.JSX.Element => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={className ? `relative ${className}` : 'relative '}>
      <label className="sr-only">Search</label>
      <input
        className="
            block w-full py-4 px-4 outline-2 font-semibold text-xl
            border-white-200 border-4 placeholder:text-gray-500 bg-[#1c1c29] bg-opacity-50 active:outline-none focus:outline-none
          "
        type="search"
        name="keyword"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="absolute aspect-square right-0 top-1/2 transform -translate-y-1/2 h-full bg-slate-200 flex"
        type="submit"
      >
        <FaSearch className="text-3xl text-[#1c1c29] self-center mx-auto" />
      </button>
      {hasAddButton && (
        <button
          type="button"
          onClick={() => { return; }}
          className="group absolute aspect-square right-0 top-1/2 transform origin-center -translate-y-1/2 translate-x-24 h-full
          scale-90 hover:scale-100 hover:rounded-md transition-all duration-300 ease-in-out bg-slate-200 flex rounded-2xl"
        >
          <FaPen className="transition-all duration-300 ease-in-out text-3xl text-[#1c1c29] self-center mx-auto" />
        </button>
      )}
    </div>
  );
};

export default Search;

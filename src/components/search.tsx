'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({
  placeholder,
  className,
  initialValue = '',
}: {
  placeholder: string;
  className?: string;
  initialValue?: string;
}): React.JSX.Element => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={className ? `relative ${className}` : 'relative '}>
      <label className="sr-only">Search</label>
      <input
        className="
            block w-full border py-4 px-4 outline-hidden font-semibold text-xl
            border-white-200 border-4 placeholder:text-gray-500 bg-[#1c1c29]/50
          "
        type="search"
        name="keyword"
        placeholder={placeholder}
        value={value}
        onChange={(e) => { setValue(e.target.value); }}
      />
      <button className="absolute block aspect-square right-0 top-1/2 transform -translate-y-1/2 h-full bg-slate-200 flex" type="submit">
        <FaSearch className="text-3xl text-[#1c1c29] self-center mx-auto" />
      </button>
    </div>
  );
};

export default Search;

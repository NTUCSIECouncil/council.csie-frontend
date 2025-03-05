import { FaSearch } from 'react-icons/fa';

const SmallSearch = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}): React.JSX.Element => {
  return (
    <div className={className ? `relative ${className}` : 'relative '}>
      <label className="sr-only">Search</label>
      <input
        className="
            block w-full border-b-[1px] border-white-200 xl:py-4 py-2 pl-11 pr-4 outline-2 font-semibold xl:text-xl text-md
            placeholder:text-gray-500 bg-[#1c1c29] bg-opacity-50 focus:border-blue-200 active:outline-none focus:outline-none
          "
        type="search"
        name="keyword"
        placeholder={placeholder}
      />
      <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2 ">
        <FaSearch className="xl:text-xl text-md text-white-200/40" />
      </button>
    </div>
  );
};

export default SmallSearch;

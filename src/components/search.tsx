import { FaSearch } from 'react-icons/fa';

const Search = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}): React.JSX.Element => {
  return (
    <div className={className ? `relative ${className}` : 'relative'}>
      <label className="sr-only">Search</label>
      <input
        className="
            block w-full rounded-md border py-[9px] pl-10 pr-4 outline-2 font-semibold
            border-gray-200 placeholder:text-gray-500 bg-black bg-opacity-50
          "
        type="search"
        placeholder={placeholder}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Search;

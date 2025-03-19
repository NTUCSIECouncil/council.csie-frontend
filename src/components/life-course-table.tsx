// 2 * n table
const Table = ({
  table,
}: {
  table: string[][];
}): React.JSX.Element => {
  return (
    <table className="w-full text-xl border-collapse border border-gray-400">
      <thead>
        <tr>
          {table[0].map((content, index) => (
            <th key={index} className={`p-3 border border-2 border-gray-400 ${index === 0 ? 'bg-white bg-opacity-10' : ''}`}>{content}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {table[1].map((content, index) => (
            <th key={index} className={`p-3 border border-2 border-gray-400 ${index === 0 ? 'bg-white bg-opacity-10' : ''}`}>{content}</th>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

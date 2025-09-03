// 2 * n table
const Table = ({ table }: { table: string[][] }): React.JSX.Element => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <table className="w-full text-xl border-collapse border border-gray-400 relative">
        <thead>
          <tr>
            {table[0].map((content, index) => (
              <th
                key={index}
                className={`p-3 border border-2 border-gray-400 ${index === 0 ? 'bg-white/10' : ''}`}
              >
                {content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {table[1].map((content, index) => (
              <th
                key={index}
                className={`p-3 border border-2 border-gray-400 ${index === 0 ? 'bg-white/10' : ''}`}
              >
                {content}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

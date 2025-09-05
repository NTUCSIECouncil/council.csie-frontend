// n * m table

const InformationTable = ({
  table,
}: {
  table: string[][];
}): React.JSX.Element => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <table className="w-full min-w-[600px] text-xl border-collapse border border-gray-400 relative">
        <thead>
          <tr>
            {table[0].map((content, index) => (
              <th
                key={index}
                className="p-3 border border-2 border-gray-400 bg-white/10"
                style={{ whiteSpace: 'pre-line' }}
              >
                {content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((content, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-3 break-words xl:max-w-[20ch] 2xl:max-w-[30ch] border border-2 border-gray-400 ${colIndex === 0 ? 'bg-white/10 text-center' : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InformationTable;

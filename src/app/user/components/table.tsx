{/* Stolen from life-component */}
const Table = ({ table, header, colRatio }: { table: string[][], header: string[], colRatio: string[] }): React.JSX.Element => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <table className="w-full text-xl border-collapse relative rounded-1g table-fixed">
        <colgroup>
          {colRatio.map((width, index) => (
            <col key={index} style={{ width: width }} />
          ))}
        </colgroup>
        <thead className="bg-white/20">
          <tr>
            {header.map((title, index) => (
              <th
                key={index}
                className="p-3 text-center font-semibold"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-500 hover:bg-white/10">
              {row.map((content, cellIndex) => (
                <td key={cellIndex} className="p-3 text-center">
                  {content.length > 40 ? content.substring(0, 40) + '...' : content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// n * m table

const InformTable = ({
  table,
}: {
  table: string[][];
}): React.JSX.Element => {
  return (
    <table className="w-full text-xl border-collapse border border-gray-400">
      <thead>
        <tr>
          {table[0].map((content, index) => (
            <th key={index} className="p-3 border border-2 border-gray-400 bg-white bg-opacity-10">{content}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((content, colIndex) => (
              <td key={colIndex} className={`p-3 border border-2 border-gray-400 text-center ${colIndex === 0 ? 'bg-white bg-opacity-10' : ''}`} style={{ whiteSpace: 'pre-line' }}>{content}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InformTable;

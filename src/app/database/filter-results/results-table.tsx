import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';

import { type Course } from '@/types/backend';

export default function ResultTable({
  rows,
}: {
  rows: Course[];
}): React.JSX.Element {
  // I think this page can be implemented with instantaneously searching, i.e. show result without pressing Enter.
  return (
    <div className="relative overflow-x-auto my-2 no-scrollbar">
      <table className="w-full text-white-400 text-center font-medium">
        <thead className="font-bold">
          <tr className="border-b-2 mb-2">
            <th scope="col" className="px-6 py-3">
              課號
            </th>
            <th scope="col" className="px-6 py-3">
              課名
            </th>
            <th scope="col" className="px-6 py-3">
              學分數
            </th>
            <th scope="col" className="px-6 py-3">
              授課教師
            </th>
            <th scope="col" className="px-6 py-3">
              考古題
            </th>
            <th scope="col" className="px-6 py-3">
              評價網
            </th>
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row: Course) => (
            // <Grow in={showTable} timeout={500 * index} key={index}>
            <tr key={row._id} className="hover:bg-gray-600">
              <th className="px-6 py-3 whitespace-nowrap">{row.curriculum}</th>
              <td className="px-6 py-3">
                {row.names.length > 0 ? row.names[0] : ''}
              </td>
              <td className="px-6 py-3">{row.credit}</td>
              <td className="px-6 py-3">{row.lecturer}</td>
              <td className="px-6 py-3">
                <Link href={`/database/course?course=${row._id}`}>
                  <IoMdLink className="text-xl text-white m-auto -rotate-45" />
                </Link>
              </td>
              <td className="px-6 py-3">
                <Link href="https://www.example.com/">
                  <IoMdLink className="text-xl text-white m-auto -rotate-45" />
                </Link>
              </td>
            </tr>
            // </Grow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

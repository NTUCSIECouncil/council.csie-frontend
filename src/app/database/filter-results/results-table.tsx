import { type UUID } from 'crypto';
import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';

interface Course {
  _id: UUID;
  title: string;
  credit: number;
  course: UUID;
  lecturer: string;
  semester: string;
  pastQuiz: string;
  ratings: string;
}

function createCourse(
  _id: UUID,
  course: UUID,
  title: string,
  credit: number,
  lecturer: string,
  semester: string,
  pastQuiz: string,
  ratings: string
): Course {
  return { _id, title, course, credit, lecturer, semester, pastQuiz, ratings };
}

const rows = [
  createCourse('fake-0-0-0-0', '00000003-0003-0000-0000-000000000000', '計算機程式設計', 3, 'Bruh1', '111-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-1', '00000003-0003-0000-0000-000000000001', '自動機與形式語言', 3, 'Bruh2', '112-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-2', '00000003-0003-0000-0000-000000000002', '資料結構與演算法', 3, 'Bruh3', '112-2', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-3', '00000003-0003-0000-0000-000000000003', '計算機程式設計', 3, 'Bruh4', '111-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-4', '00000003-0003-0000-0000-000000000004', '我是誰我在哪', 4, 'Bruh5', '48763', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-5', '00000003-0003-0000-0000-000000000005', '計算機程式設計', 3, 'Bruh6', '111-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-6', '00000003-0003-0000-0000-000000000006', '自動機與形式語言', 3, 'Bruh7', '112-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-7', '00000003-0003-0000-0000-000000000007', '資料結構與演算法', 3, 'Bruh8', '112-2', 'https://example.com', 'https://example.com'),
];

export default function ResultTable(): React.JSX.Element {
  // I think this page can be implemented with instantaneously searching, i.e. show result without pressing Enter.
  return (
    <div className="relative overflow-x-auto shadow-xl rounded-lg my-2">
      <table className="w-full text-gray-400 text-left">
        <thead className="font-bold bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-2">課名</th>
            <th scope="col" className="px-6 py-2">學期</th>
            <th scope="col" className="px-6 py-2">學分數</th>
            <th scope="col" className="px-6 py-2">授課教師</th>
            <th scope="col" className="px-6 py-2">考古題</th>
            <th scope="col" className="px-6 py-2">評價網</th>
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row, _index) => (
            // <Grow in={showTable} timeout={500 * index} key={index}>
            <tr key={row._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th className="px-6 py-1 text-white font-medium whitespace-nowrap">
                <Link
                  href={`/database/course?course=${row.course}`}
                >
                  {row.title}
                </Link>
              </th>
              <td className="px-6 py-1">{row.semester}</td>
              <td className="px-6 py-1">{row.credit}</td>
              <td className="px-6 py-1">{row.lecturer}</td>
              <td className="px-6 py-1">
                <Link
                  href={row.pastQuiz}
                >
                  <IoMdLink className="text-blue-500" />
                </Link>
              </td>
              <td className="px-6 py-1">
                <Link
                  href={row.pastQuiz}
                >
                  <IoMdLink className="text-blue-500" />
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

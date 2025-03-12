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
  createCourse('fake-0-0-0-0', '00000003-0003-0000-0000-000000000000', '普通生物學', 3, 'Bruh1', '111-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-1', '00000003-0003-0000-0000-000000000001', '微積分', 4, 'Bruh2', '112-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-2', '00000003-0003-0000-0000-000000000002', '物理學概論', 3, 'Bruh3', '112-2', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-3', '00000003-0003-0000-0000-000000000003', '現代文學', 3, 'Bruh4', '111-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-4', '00000003-0003-0000-0000-000000000004', '程式設計基礎', 3, 'Bruh5', '48763', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-5', '00000003-0003-0000-0000-000000000005', '人工智慧導論', 3, 'Bruh6', '111-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-6', '00000003-0003-0000-0000-000000000006', '社會學基礎', 3, 'Bruh7', '112-1', 'https://example.com', 'https://example.com'),
  createCourse('fake-0-0-0-7', '00000003-0003-0000-0000-000000000007', '經濟學概論', 3, 'Bruh8', '112-2', 'https://example.com', 'https://example.com'),
];

export default function ResultTable(): React.JSX.Element {
  // I think this page can be implemented with instantaneously searching, i.e. show result without pressing Enter.
  return (
    <div className="relative overflow-x-auto my-2 no-scrollbar">
      <table className="w-full text-white-400 text-center font-medium">
        <thead className="font-bold">
          <tr className="border-b-2 mb-2">
            <th scope="col" className="px-6 py-3">課名</th>
            <th scope="col" className="px-6 py-3">學期</th>
            <th scope="col" className="px-6 py-3">學分數</th>
            <th scope="col" className="px-6 py-3">授課教師</th>
            <th scope="col" className="px-6 py-3">考古題</th>
            <th scope="col" className="px-6 py-3">評價網</th>
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row, _index) => (
            // <Grow in={showTable} timeout={500 * index} key={index}>
            <tr key={row._id} className="hover:bg-gray-600">
              <th className="px-6 py-3 whitespace-nowrap">
                {row.title}
              </th>
              <td className="px-6 py-3">{row.semester}</td>
              <td className="px-6 py-3">{row.credit}</td>
              <td className="px-6 py-3">{row.lecturer}</td>
              <td className="px-6 py-3">
                <Link
                  href={`/database/course?course=${row.course}`}
                >
                  <IoMdLink className="text-xl text-white m-auto -rotate-45" />
                </Link>
              </td>
              <td className="px-6 py-3">
                <Link
                  href={row.pastQuiz}
                >
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

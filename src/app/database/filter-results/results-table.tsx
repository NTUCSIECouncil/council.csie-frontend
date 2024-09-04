import { type UUID } from 'crypto';
import Link from 'next/link';
import { IoMdLink } from "react-icons/io";

interface Course {
  _id: UUID;
  title: string;
  course: string;
  semester: string;
  downloadLink: string;
}

function createCourse(
  _id: UUID,
  title: string,
  course: string,
  semester: string,
  downloadLink: string,
): Course {
  return { _id, title, course, semester, downloadLink };
}

const rows = [
  createCourse('fake-0-0-0-0', 'Owo', '計算機程式設計', '111-1', 'https://example.com'),
  createCourse('fake-0-0-0-1', '呱呱呱', '自動機與形式語言', '112-1', 'https://example.com'),
  createCourse('fake-0-0-0-2', '窩不吱到', '資料結構與演算法', '112-2', 'https://example.com'),
  createCourse('fake-0-0-0-3', 'Owo', '計算機程式設計', '111-1', 'https://example.com'),
  createCourse('fake-0-0-0-4', '嗨伊', '我是誰我在哪', '48763', 'https://example.com'),
  createCourse('fake-0-0-0-5', 'Owo', '計算機程式設計', '111-1', 'https://example.com'),
  createCourse('fake-0-0-0-6', '呱呱呱', '自動機與形式語言', '112-1', 'https://example.com'),
  createCourse('fake-0-0-0-7', '窩不吱到', '資料結構與演算法', '112-2', 'https://example.com'),
];

export default function ResultTable(): JSX.Element {
  // I think this page can be implemented with instantaneously searching, i.e. show result without pressing Enter.
  return (
    <div className="relative overflow-x-auto shadow-xl rounded-lg my-2">
      <table className="w-full text-gray-400 text-left">
        <thead className="font-bold bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-2">標題</th>
            <th scope="col" className="px-6 py-2">課名</th>
            <th scope="col" className="px-6 py-2">學期</th>
            <th scope="col" className="px-6 py-2">下載連結</th>
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row, index) => (
            // <Grow in={showTable} timeout={500 * index} key={index}>
            <tr key={row._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th className="px-6 py-1 text-white font-medium whitespace-nowrap">{row.title}</th>
              <td className="px-6 py-1">{row.course}</td>
              <td className="px-6 py-1">{row.semester}</td>
              <td className="px-6 py-1">
                <Link
                  href={row.downloadLink}
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

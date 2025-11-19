'use client';

import { useEdit } from '../context';

const SEMESTERS = ['112-1', '112-2', '113-1', '113-2', '114-1'] as const;

const SemesterSelect = (): React.JSX.Element => {
  const { semester, setSemester } = useEdit();

  return (
    <div>
      <label className="block text-lg font-medium mb-4 text-white">
        學期 <span className="text-red-400">*</span>
      </label>
      <select
        value={semester}
        onChange={e => {
          setSemester(e.target.value);
        }}
        className="w-full px-4 py-3 border border-gray-500 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-slate-500
                   focus:border-slate-500 bg-[#1c1c29] bg-opacity-50 text-white"
      >
        <option value="" disabled>
          請選擇學期
        </option>
        {SEMESTERS.map(s => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SemesterSelect;

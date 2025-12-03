'use client';

import { useEffect, useState } from 'react';

import { type Course } from '@/types/backend';
import clientFetch from '@/utils/client-fetch';

interface Props {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

interface APIResponse {
  courses: Course[];
}

const SemesterSelect = ({ value, onChange, disabled = false }: Props): React.JSX.Element => {
  const [semesters, setSemesters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const params = new URLSearchParams({
          limit: '100',
        });
        const res = await clientFetch(`/api/courses?${params.toString()}`, {
          cache: 'force-cache',
        });

        if (!res.ok) {
          console.error('Failed to fetch courses for semesters');
          return;
        }

        const data = (await res.json()) as APIResponse;
        
        // Extract unique semesters
        const semesterSet = new Set(data.courses.map(course => course.semester));
        
        // Sort semesters
        const sortedSemesters = Array.from(semesterSet).sort((a, b) => {
          // Sort in descending order (newest first)
          const [yearA, semA] = a.split('-').map(Number);
          const [yearB, semB] = b.split('-').map(Number);
          
          if (yearA !== yearB) return yearB - yearA;
          return semB - semA;
        });

        setSemesters(sortedSemesters);
      } catch (error) {
        console.error('Failed to fetch semesters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchSemesters();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="semester-select" className="text-xl font-medium text-white">
        學期 <span className="text-red-400">*</span>
      </label>
      <select
        id="semester-select"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
        disabled={disabled || isLoading}
        className="
          w-full px-4 py-3 rounded-lg
          bg-gray-700 border border-gray-600
          text-white font-medium
          focus:outline-none focus:ring-2 focus:ring-gray-500
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        <option value="" disabled>
          {isLoading ? '載入中...' : '請選擇學期'}
        </option>
        {semesters.map(s => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SemesterSelect;

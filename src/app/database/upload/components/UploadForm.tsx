'use client';

import { useState } from 'react';

import { type Course } from '@/types/backend';
import { openMailClient } from '@/utils/open-mail-client';
import CourseSearch from './CourseSearch';
import SemesterSelect from './SemesterSelect';

const examTypeChoices = [
  { value: 'first', description: '第一次期中' },
  { value: 'second', description: '第二次期中' },
  { value: 'midterm', description: '期中考' },
  { value: 'final', description: '期末考' },
  { value: 'other', description: '其他' },
];

export const UploadForm = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedExamType, setSelectedExamType] = useState<string>('midterm');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploadError('');
    setUploadSuccess(false);

    if (!selectedSemester) {
      setUploadError('請選擇學期');
      return;
    }

    if (!selectedCourse) {
      setUploadError('請選擇課程');
      return;
    }

    setIsSubmitting(true);

    try {
      const bodyLines = [
        '上傳檔案申請',
        '',
        `學期：${selectedSemester}`,
        `課程：${selectedCourse.names.join(' / ')}`,
        `考試類型：${examTypeChoices.find(choice => choice.value === selectedExamType)?.description ?? selectedExamType}`,
        '',
        '檔案注意事項：',
        '- 檔案大小不可超過 10MB',
        '- 只允許上傳 PDF 或圖片檔 (JPG, PNG)',
        '- 請於 Gmail 視窗中附上檔案後寄送。',
      ];

      openMailClient({
        subject: `檔案上傳申請 - ${selectedCourse.names.join(' / ')}`,
        bodyLines,
      });

      setUploadSuccess(true);
      setSelectedSemester('');
      setSelectedCourse(null);
      setSelectedExamType('midterm');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '上傳失敗';
      setUploadError(errorMessage);
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-8"
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      {/* semester selection */}
      <SemesterSelect
        value={selectedSemester}
        onChange={val => {
          setSelectedSemester(val);
          setUploadError('');
        }}
        disabled={isSubmitting}
      />

      {/* course selection */}
      <CourseSearch
        selectedCourse={selectedCourse}
        onSelect={course => {
          setSelectedCourse(course);
          setUploadError('');
        }}
        disabled={!selectedSemester || isSubmitting}
      />
      {!selectedSemester && (
        <p className="text-sm text-gray-400 -mt-6">請先選擇學期</p>
      )}

      {/* exam type */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="exam-type-select"
          className="text-xl font-medium text-white"
        >
          考試類型 <span className="text-red-400">*</span>
        </label>
        <select
          id="exam-type-select"
          value={selectedExamType}
          onChange={e => {
            setSelectedExamType(e.target.value);
            setUploadError('');
          }}
          disabled={isSubmitting}
          className="
            w-full px-4 py-3 rounded-lg
            bg-gray-700 border border-gray-600
            text-white font-medium
            focus:outline-none focus:ring-2 focus:ring-gray-500
            cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {examTypeChoices.map(choice => (
            <option key={choice.value} value={choice.value}>
              {choice.description}
            </option>
          ))}
        </select>
      </div>

      {/* submit button */}
      <div className="flex flex-col items-end gap-4 pt-6">
        {uploadError && <p className="text-red-400 text-sm">{uploadError}</p>}
        {uploadSuccess && <p className="text-green-400 text-sm">上傳成功！</p>}
        <button
          type="submit"
          disabled={isSubmitting || !selectedCourse || !selectedSemester}
          className="
            px-12 py-4
            bg-gray-700 hover:bg-gray-600
            text-white font-bold rounded-xl text-xl
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:bg-gray-700
          "
        >
          {isSubmitting ? '上傳中...' : '上傳'}
        </button>
      </div>
    </form>
  );
};

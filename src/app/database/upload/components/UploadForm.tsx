'use client';

import { useRef, useState } from 'react';
import { LuUpload } from 'react-icons/lu';

import { type Course } from '@/types/backend';
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedExamType, setSelectedExamType] = useState<string>('midterm');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      const MAX_SIZE = 10 * 1024 * 1024;
      if (file.size > MAX_SIZE) {
        alert('檔案大小不能超過 10MB');
        // Clear the input
        e.target.value = '';
        setSelectedFile(null);
        return;
      }

      // Check file type (double check)
      const allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/jpg',
      ];
      if (!allowedTypes.includes(file.type)) {
        alert('只允許上傳 PDF 或圖片檔 (JPG, PNG)');
        e.target.value = '';
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setUploadError('');
      setUploadSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    if (!selectedFile) {
      setUploadError('請選擇要上傳的檔案');
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('file', selectedFile);
      submitData.append('courseId', selectedCourse._id);
      submitData.append('examType', selectedExamType);

      // Mock API call for testing
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Mock upload payload:', {
        file: selectedFile.name,
        courseId: selectedCourse._id,
        examType: selectedExamType,
        semester: selectedSemester,
      });

      // Simulate success (no error thrown)
      /* 
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('上傳失敗,請稍後再試');
      }
      */

      alert('寄！');
      setUploadSuccess(true);
      setSelectedFile(null);
      setSelectedSemester('');
      setSelectedCourse(null);
      setSelectedExamType('midterm');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
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
      ref={formRef}
      className="space-y-8"
      onSubmit={e => {
        void handleSubmit(e);
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

      {/* file upload */}
      <div className="flex flex-col gap-2">
        <label htmlFor="file-upload" className="text-xl font-medium text-white">
          檔案 <span className="text-red-400">*</span>
        </label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isSubmitting}
            className="
              flex items-center gap-2 px-6 py-3
              bg-gray-700 hover:bg-gray-600
              rounded-lg cursor-pointer
              text-white font-medium
              transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            上傳檔案
            <LuUpload className="text-lg" />
          </button>

          <input
            ref={fileInputRef}
            id="file-upload"
            name="file"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={handleFileChange}
            disabled={isSubmitting}
          />

          {selectedFile && (
            <span className="text-sm text-gray-300 truncate max-w-xs">
              {selectedFile.name}
            </span>
          )}
        </div>
      </div>

      {/* submit button */}
      <div className="flex flex-col items-end gap-4 pt-6">
        {uploadError && (
          <p className="text-red-400 text-sm">{uploadError}</p>
        )}
        {uploadSuccess && (
          <p className="text-green-400 text-sm">上傳成功！</p>
        )}
        <button
          type="submit"
          disabled={
            isSubmitting ||
            !selectedFile ||
            !selectedCourse ||
            !selectedSemester
          }
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

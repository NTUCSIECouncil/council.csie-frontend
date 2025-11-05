'use client';

import { useRouter } from 'next/navigation';

interface Props {
  courseName: string;
}

const ClickableCourseName = ({ courseName }: Props): React.JSX.Element => {
  const router = useRouter();

  const handleCourseClick = () => {
    router.push(
      `/rate/filter-results?keyword=${encodeURIComponent(courseName)}`,
    );
  };

  return (
    <button
      onClick={handleCourseClick}
      className="text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium text-left cursor-pointer"
    >
      {courseName}
    </button>
  );
};

export default ClickableCourseName;

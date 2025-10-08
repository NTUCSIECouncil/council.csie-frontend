'use client';

import { useRouter } from 'next/navigation';

interface Props {
  courseName: string;
}

const ClickableCourseName = ({ courseName }: Props): React.JSX.Element => {
  const router = useRouter();
  
  const handleCourseClick = () => {
    router.push(`/rate/filter-results?keyword=${encodeURIComponent(courseName)}`);
  };

  return (
    <button
      onClick={handleCourseClick}
      className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-medium text-left"
    >
      {courseName}
    </button>
  );
};

export default ClickableCourseName;
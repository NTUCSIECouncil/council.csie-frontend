'use client';

import { IoMdLink } from 'react-icons/io';

const DownloadLink = ({
  quizId,
  BACKEND_URL,
}: {
  quizId: string;
  BACKEND_URL: string;
}) => {
  const fetchFile = async () => {
    const url = `/api/quizzes/${quizId}/file`;
    window.open(BACKEND_URL + url);
  };

  return (
    <button onClick={fetchFile} className="cursor-pointer">
      <IoMdLink className="xl:text-2xl text-xl text-white -rotate-45" />
    </button>
  );
};

export default DownloadLink;

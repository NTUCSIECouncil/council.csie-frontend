'use client';

import { useRouter } from 'next/navigation';

const PreviousPageButton = () => {
  const router = useRouter();
  return (
    <div
      className="btn btn-primary"
      onClick={() => {
        router.back();
      }}
    >
      回上一頁
    </div>
  );
};

export default PreviousPageButton;

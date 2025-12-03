'use server';

import Background from './background';
import { UploadForm } from './components/UploadForm';

const Page = async (): Promise<React.JSX.Element> => {
  return (
    <main className="flex flex-1 justify-center items-center bg-gray-900 text-white">
      <Background />
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold tracking-widest mb-2">
          上傳考古題
        </h1>
        <p className="text-sm text-gray-400 mb-8 font-mono">
          DISCLAIMER: 考古題上傳後會先由學術部審核後再放上課程資料庫
        </p>
        <UploadForm />
      </div>
    </main>
  );
};

export default Page;

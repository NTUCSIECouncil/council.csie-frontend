// import Search from '@/app/ui/search';
// import Image from 'next/image';
// import Link from 'next/link';
import Search from '@/components/search';
import ResultTable from './results-table';

const Page = (): React.JSX.Element => {
  return (
    <main className="mx-auto w-4/5 min-w-96 mt-4">
      <Search
        placeholder="輸入關鍵字"
        className="my-4"
      />
      <div className="mx-5">
        <p className="text-xl">查詢結果</p>
        <ResultTable />
      </div>
    </main>
  );
};

export default Page;

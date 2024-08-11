import { type FC } from 'react';
import NavCards from '@/app/(home)/nav-cards';
import Background from '@/app/(home)/background';

const Page: FC = () => {
  return (
    <>
      <Background />
      <main className="pt-32">
        <NavCards />
      </main>
    </>
  );
};

export default Page;

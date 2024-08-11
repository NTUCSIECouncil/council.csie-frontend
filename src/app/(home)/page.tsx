import { type FC } from 'react';
import NavCards from '@/ui/home/nav-cards';
import Background from '@/ui/home/background';

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

import NavCards from '@/app/(home)/nav-cards';
import Background from '@/app/(home)/background';

const Page = (): JSX.Element => {
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

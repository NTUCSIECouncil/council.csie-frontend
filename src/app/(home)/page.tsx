import NavCards from './nav-cards';
import Background from './background';

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

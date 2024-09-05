import Background from './background';
import NavCards from './nav-cards';

const Page = (): React.JSX.Element => {
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

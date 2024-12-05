import Background from './background';
import NavCards from './nav-cards';

const Page = (): React.JSX.Element => {
  return (
    <>
      <Background />
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-4">
          <NavCards />
        </div>
      </main>
    </>
  );
};

export default Page;

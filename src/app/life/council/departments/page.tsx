import { sidebar } from '@/helpers/sidebar';
import LifeTopic from '@/components/life-topic';

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto md:w-2/3">
      {sidebar('lifeCouncil')}
      <LifeTopic topic="各部會介紹" />
    </main>
  );
};

export default Page;

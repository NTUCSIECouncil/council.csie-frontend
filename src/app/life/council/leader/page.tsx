import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import LifeLeader from './life-council-leader.json';

interface LifeLeaderItem {
  title: string;
  content: string;
}

const leader: LifeLeaderItem = LifeLeader as LifeLeaderItem;

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeCouncil', '會長的話')}
      <div className="ml-8 md:max-w-4xl">
        <LifeTopic
          topic="會長的話"
          subtopic={leader.title}
          subtopicSize="text-2xl"
        />
        <div className="whitespace-pre-line text-lg mt-4">
          {leader.content}
        </div>
      </div>
    </main>
  );
};

export default Page;

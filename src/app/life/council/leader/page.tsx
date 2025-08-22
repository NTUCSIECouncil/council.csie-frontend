import LifeTopic from '@/app/life/components/life-topic';
import LifeLeader from './life-council-leader.json';

interface LifeLeaderItem {
  title: string;
  content: string;
}

const leader: LifeLeaderItem = LifeLeader as LifeLeaderItem;

const Page = (): React.JSX.Element => {
  return (
    <div className="xl:ml-8 xl:max-w-[min(56rem,73%)] lg:max-w-4xl">
      <LifeTopic
        topic="會長的話"
        subtopic={leader.title}
        subtopicSize="text-2xl"
      />
      <div className="whitespace-pre-line text-lg mt-4">
        {leader.content}
      </div>
    </div>
  );
};

export default Page;

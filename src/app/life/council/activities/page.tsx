import LifeEvent from '@/components/life-activities-event';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import lifeEvents from './life-council-activities.json' assert { type: 'json' };

interface LifeEventItem {
  title: string;
  description: string;
  image: string;
}

const typedEvents: LifeEventItem[] = lifeEvents.activities as LifeEventItem[];

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto flex flex-row w-[80%] mt-10 mb-10">
      {sidebar('lifeCouncil', '系上活動')}
      <div className="xl:ml-8 xl:max-w-[min(56rem,73%)] lg:max-w-4xl">
        <LifeTopic topic="系上活動" />
        {typedEvents.map((event, idx) => (
          <LifeEvent
            key={idx}
            title={event.title}
            description={event.description}
            image={event.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;

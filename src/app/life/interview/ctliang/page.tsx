import React from 'react';
import LifeInterviewAnswer from '@/components/life-interview-answer';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import rawData from '../content.json';

const Page = (): React.JSX.Element => {
  const info = rawData.ctliang;
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInterview', info.title)}
      <div className="relative flex flex-col items-start gap-2 py-4 md:ml-8">
        <LifeTopic topic={info.title} mailto={info.mailto} website={info.website} author_interview={info.author} image={info.image} />
        {info.content.map((item, index) => (
          <div key={index}>
            <LifeSubTopic content={item.subtopic} />
            {(item.answers).map((ans, idx) => (
              <LifeInterviewAnswer key={idx}>{ans}</LifeInterviewAnswer>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

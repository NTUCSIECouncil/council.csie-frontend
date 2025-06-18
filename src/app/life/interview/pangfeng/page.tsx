import React from 'react';
import LifeInterviewAnswer from '@/components/life-interview-answer';
import LifeLink from '@/components/life-link';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import rawData from '../content.json';

const Page = (): React.JSX.Element => {
  const info = rawData.pangfeng;
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInterview', info.title)}
      <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
        <LifeTopic topic={info.title} mailto={info.mailto} website={info.website} author_interview={info.author} image={info.image} />
        {info.content.map((item, index) => (
          <div key={index}>
            <LifeSubTopic content={item.subtopic} />
            {(item.answers).map((ans, idx) => (
              <LifeInterviewAnswer key={idx}>{ans}</LifeInterviewAnswer>
            ))}
            {item.links && (
              <div className="mt-4">
                {item.links.map((link, linkIndex) => (
                  <span key={linkIndex} className="mr-2 inline-block pb-4">
                    <LifeLink content={link.name} href={link.href} />
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

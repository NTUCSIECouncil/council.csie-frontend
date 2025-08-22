import React from 'react';
import LifeLink from '@/app/life/components/life-link';
import LifeSubTopic from '@/app/life/components/life-sub-topic';
import LifeTopic from '@/app/life/components/life-topic';
import LifeInterviewAnswer from '@/app/life/interview/[professorName]/components/life-interview-answer';
import interviewData from '@/data/life/interview';

export function generateStaticParams() {
  return Object.keys(interviewData).map(professorName => ({
    professorName,
  }));
}

const Page = async ({
  params,
}: {
  params: Promise<{ professorName: string }>;
}) => {
  const info = interviewData[(await params).professorName];
  return (
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
  );
};

export default Page;

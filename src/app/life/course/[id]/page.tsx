import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';
import LifeCourseContent from '@/app/life/components/content-block';
import LifeSubTopic from '@/app/life/components/life-sub-topic';
import LifeCourseTopic from '@/app/life/components/life-topic';
import TLDR from '@/app/life/components/tldr';
import List from '@/app/life/course/[id]/components/list';
import Table from '@/app/life/course/[id]/components/table';
import data from '@/app/life/course/data.json';

const Page = async (
  param: {
    params: Promise<{ id: string }>;
  },
): Promise<React.JSX.Element> => {
  const params = await param.params;
  const courseID = Number(params.id);
  const courseData = data[courseID];
  return (
    <div className="xl:ml-8 xl:max-w-[min(56rem,73%)] mb-10 self-start shrink-0 w-full">
      <div className="flex flex-col items-start gap-2 py-4">
        <LifeCourseTopic topic={courseData.topic.topic} subtopic={courseData.topic.subtopic ?? ''} lecturer={courseData.topic.lecturer ?? ''} author={courseData.topic.author} />
        {courseData.subtopics.map(subtopic => (
          <div key={subtopic.topicName} className="w-full">
            <LifeSubTopic content={subtopic.topicName} />
            {subtopic.blocks.map((block, index) => {
              switch (block.layout) {
                case 'content':
                  return <LifeCourseContent key={index} content={block.content as string} />;
                case 'table':
                  return <Table key={index} table={block.content as string[][]} />;
                case 'tldr':
                  return <TLDR key={index} content={block.content as string} />;
                case 'list':
                  return <List key={index} list={block.content as string[]} />;
                case 'links':
                  return (
                    <div key={index} className="grid xl:grid-cols-2 grid-cols-1 gap-3 w-full">
                      {
                        (block.content as string[][]).map((website: string[], index: number) => (
                          <Link
                            href={website[0]}
                            key={index}
                          >
                            <div className="w-full h-16 flex items-center justify-center gap-1 rounded-lg bg-[#3a3b46] transition-transform duration-300 hover:scale-[1.02]">
                              <IoMdLink className="text-white text-xl -rotate-45" />
                              <p className="font-bold text-lg">{website[1]}</p>
                            </div>
                          </Link>
                        ))
                      }
                    </div>
                  );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

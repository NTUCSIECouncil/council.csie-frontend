import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';
import data from '@/app/life/course/data.json';
import LifeCourseContent from '@/components/life-course-content';
import List from '@/components/life-course-list';
import Table from '@/components/life-course-table';
import LifeSubTopic from '@/components/life-sub-topic';
import TLDR from '@/components/life-tldr';
import LifeCourseTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';

const sidebarLinks = [
  '計算機程式設計',
  '微積分 1/2/3/4 （傅班）',
  '微積分 1/2/3/4 （蔡班）',
  '微積分 1/2/3/4 （余班）',
  '普通物理學甲',
  '普通生物學丙',
  '普通物理學乙',
  '普通化學丙',
  '計算機概論（單班）',
  '計算機概論（雙班）',
  '資料結構與演算法',
  '網路管理與系統管理',
  '離散數學（呂）',
  '離散數學（陳）',
  '探索學分',
];

const Page = async (
  param: {
    params: Promise<{ id: string }>;
  },
): Promise<React.JSX.Element> => {
  const params = await param.params;
  const courseID = Number(params.id);
  const courseData = data[courseID];
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeCourse', sidebarLinks[courseID])}
      <div className="xl:ml-8 xl:max-w-[min(56rem,73%)] mb-10 self-start shrink-0 w-full">
        <div className="flex flex-col items-start gap-2 py-4">
          <LifeCourseTopic topic={courseData.topic.topic} subtopic={courseData.topic.subtopic ?? ''} lecturer={courseData.topic.lecturer ?? ''} author={courseData.topic.author} />
          {courseData.subtopics.map(subtopic => (
            <div key={subtopic.topicName}>
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
                      <div className="grid xl:grid-cols-2 grid-cols-1 gap-3 w-full">
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
    </main>
  );
};

export default Page;

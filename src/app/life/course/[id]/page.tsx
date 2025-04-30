import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';
import data from '@/app/life/course/data.json';
import LifeCourseContent from '@/components/life-course-content';
import List from '@/components/life-course-list';
import Table from '@/components/life-course-table';
import LifeSubTopic from '@/components/life-sub-topic';
import TLDR from '@/components/life-tldr';
import LifeCourseTopic from '@/components/life-topic';

interface TopicSegment {
  topic: string;
  subtopic: string;
  lecturer: string;
  author: string;
}

interface ContentSegment {
  content: string;
}

interface SubtopicSegment {
  content: string;
}

interface TableSegment {
  table: string[][];
}

interface TLDRSegment {
  content: string;
}

interface ListSegment {
  list: string[];
}

interface LinkSegment {
  links: string[][];
}

const Page = ({
  params,
}: {
  params: { id: string };
}): React.JSX.Element => {
  const courseID = Number(params.id);
  return (
    <main className="mx-auto w-4/5 md:w-2/3 my-10 self-start">
      <div className="flex flex-col items-start gap-2 py-4">
        {(() => {
          return data[courseID].map((segment) => {
            switch (segment.tag) {
              case 'topic':
                return <LifeCourseTopic topic={(segment as TopicSegment).topic} subtopic={(segment as TopicSegment).subtopic} lecturer={(segment as TopicSegment).lecturer} author={(segment as TopicSegment).author} />;
              case 'subtopic':
                return <LifeSubTopic content={(segment as SubtopicSegment).content} />;
              case 'content':
                return <LifeCourseContent content={(segment as ContentSegment).content} />;
              case 'table':
                return <Table table={(segment as TableSegment).table} />;
              case 'tldr':
                return <TLDR content={(segment as TLDRSegment).content} />;
              case 'list':
                return <List list={(segment as ListSegment).list} />;
              case 'links':
                return (
                  <div className="grid xl:grid-cols-2 grid-cols-1 gap-3 w-full">
                    {
                      (segment as LinkSegment).links.map((website: string[], index: number) => (
                        <Link
                          href={website[0]}
                          key={index}
                        >
                          <div className="w-full h-16 flex items-center justify-center gap-1 rounded-lg bg-card transition-transform duration-300 hover:scale-[1.02]">
                            <IoMdLink className="text-white text-xl -rotate-45" />
                            <p className="font-bold text-lg">{website[1]}</p>
                          </div>
                        </Link>
                      ))
                    }
                  </div>
                );
            }
          });
        })()}
      </div>
    </main>
  );
};

export default Page;

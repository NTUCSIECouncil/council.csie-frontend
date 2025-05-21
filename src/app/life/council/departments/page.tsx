import React from 'react';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import { type CommentType } from '@/utils/constants';
import departments from './life-council-departments.json';

interface Department {
  title: string;
  comment?: CommentType;
  description: string;
}

const depts: Department[] = departments;

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeCouncil', '部會介紹')}
      <div className="ml-8 md:max-w-4xl">
        <LifeTopic topic="部會介紹" />
        {depts.map((dept, idx) => (
          <div key={idx} className="mb-8">
            <LifeSubTopic content={dept.title} comment={dept.comment} />
            <div className="whitespace-pre-line text-lg mt-4">
              {dept.description}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

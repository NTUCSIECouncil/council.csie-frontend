import React from 'react';
import LifeSubTopic from '@/components/life/life-sub-topic';
import LifeTopic from '@/components/life/life-topic';
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
    <div className="xl:ml-8 xl:max-w-[min(56rem,73%)] lg:max-w-4xl">
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
  );
};

export default Page;

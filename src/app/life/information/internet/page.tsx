'use client';
import React, { useEffect, useState } from 'react';
import DividerBar from '@/components/divider-bar';
import LifeCourseContent from '@/components/life-course-content';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import contentData from './content.json';

interface ContentItem {
  subtitle: string;
  content: string;
}

const Page = (): React.JSX.Element => {
  const items = ['帳號密碼', '無線網路', '系上工作站', '常用資訊服務', '其他資訊服務'];
  const [selectedTab, setSelectedTab] = useState(items[0]);
  const [subtitles, setSubtitles] = useState<ContentItem[]>([]);

  useEffect(() => {
    const selectedContent = (contentData as Record<string, { subtitles: ContentItem[] }>)[selectedTab];
    setSubtitles(selectedContent.subtitles);
  }, [selectedTab]);

  return (
    <div className="mx-auto w-4/5 md:w-2/3 self-start">
      {sidebar('lifeInformation')}

      <div className="sticky top-20 left-0 w-full max-w-5xl bg-[#1c1c29] border-b border-[#d4d2d5]">
        <DividerBar items={items} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      <div className="flex flex-col items-start gap-2 pt-4 pb-8">
        {subtitles.map((item, index) => (
          <div key={index}>
            <LifeTopic topic={item.subtitle} />
            <LifeCourseContent content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

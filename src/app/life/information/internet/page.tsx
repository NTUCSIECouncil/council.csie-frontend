'use client';
import React, { useEffect, useState } from 'react';
import DividerBar from '@/components/divider-bar';
import LifeCourseContent from '@/components/life-course-content';
import InformTable from '@/components/life-information-table';
import LifeLink from '@/components/life-link';
import TLDR from '@/components/life-tldr';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import contentData from './content.json';

interface LinkItem {
  name: string;
  href: string;
}

interface ContentItem {
  subtitle?: string;
  content?: string;
  table?: string[][];
  tldr?: string;
  links?: LinkItem[];
}

const tabItems = Object.keys(contentData).map(key => ({
  key,
  label: key,
  type: 'text' as const,
}));

const Page = (): React.JSX.Element => {
  const items = ['帳號密碼', '無線網路', '系上工作站', '常用資訊服務', '其他資訊服務'];
  const [selectedTab, setSelectedTab] = useState(items[0]);
  const [subtitles, setSubtitles] = useState<ContentItem[]>([]);

  useEffect(() => {
    const selectedContent = (contentData as Record<string, { subtitles: ContentItem[] }>)[selectedTab];
    setSubtitles(selectedContent.subtitles);
  }, [selectedTab]);

  return (
    <div className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInformation', '網路與資訊服務')}

      <div className="w-full shrink-0 lg:w-[80%] lg:shrink lg:ml-8 lg:max-w-4xl">
        <div className="sticky top-20">
          <DividerBar items={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>

        <div className="flex flex-col items-start pb-8">
          {subtitles.map((item, index) => (
            <div key={index}>
              {item.subtitle && (
                <div className="mt-4">
                  <LifeTopic topic={item.subtitle} />
                </div>
              )}
              {item.content && <LifeCourseContent content={item.content} />}
              {item.table && (
                <div className="mt-4">
                  <InformTable table={item.table} />
                </div>
              )}
              {item.tldr && (
                <div className="mt-4">
                  <TLDR content={item.tldr} />
                </div>
              )}
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
      </div>
    </div>
  );
};

export default Page;

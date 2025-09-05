'use client';

import React, { useEffect, useState } from 'react';

import LifeCourseContent from '@/app/life/components/content-block';
import DividerBar from '@/app/life/components/divider-bar';
import LifeLink from '@/app/life/components/life-link';
import LifeSubTopic from '@/app/life/components/life-sub-topic';
import LifeTopic from '@/app/life/components/life-topic';
import TLDR from '@/app/life/components/tldr';
import InformationTable from '@/app/life/information/components/information-table';
import contentData from './content.json';

interface LinkItem {
  name: string;
  href: string;
}

interface SubContentItem {
  subsubtitle?: string;
  content?: string;
}

interface ContentItem {
  subtitle?: string;
  content?: string;
  subsubtitles?: SubContentItem[];
  list?: string[];
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
  const items = ['大眾運輸', '腳踏車', '生活百貨', '導生'];
  const [selectedTab, setSelectedTab] = useState(items[0]);
  const [subtitles, setSubtitles] = useState<ContentItem[]>([]);

  useEffect(() => {
    const selectedContent = (
      contentData as Record<string, { subtitles: ContentItem[] }>
    )[selectedTab];
    setSubtitles(selectedContent.subtitles);
  }, [selectedTab]);

  return (
    <div>
      <div className="sticky top-18 z-20">
        <DividerBar
          items={tabItems}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
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
            {item.subsubtitles?.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.subsubtitle && (
                  <div className="mt-4">
                    <LifeSubTopic content={subItem.subsubtitle} />
                  </div>
                )}
                {subItem.content && (
                  <LifeCourseContent content={subItem.content} />
                )}
              </div>
            ))}
            {item.list && (
              <ul className="list-disc pl-6 mt-4 space-y-2 text-xl">
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
            {item.table && (
              <div className="mt-4">
                <InformationTable table={item.table} />
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
  );
};

export default Page;

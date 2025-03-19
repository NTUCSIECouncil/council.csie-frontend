'use client';
import React, { useEffect, useState } from 'react';
import DividerBar from '@/components/divider-bar';
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
    <div className="relative">
      <div className="fixed top-28 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-[#1c1c29] z-50 border-b border-[#d4d2d5]">
        <DividerBar items={items} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      <div className="fixed top-40 left-1/2 -translate-x-1/2 mt-2 bg-[#212332] p-6 rounded-lg max-w-5xl w-full">
        {subtitles.map((item, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-[#d4d2d5] text-xl font-bold">{item.subtitle}</h3>
            <p className="text-white mt-2 whitespace-pre-line">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

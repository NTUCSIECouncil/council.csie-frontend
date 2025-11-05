'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { env } from '@/env';
import { homePages } from '@/utils/constants';
import TopicBlock from '@/app/user/components/topic-block';
import ContentBlock from '@/app/user/components/content-block';
import Table from '@/app/user/components/table';
import rating_data from '@/app/user/rating_data.json';
import exam_data from '@/app/user/exam_data.json';

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const sectionHeight = window.innerHeight;
    const index = Math.round(window.scrollY / sectionHeight);
    setActiveIndex(Math.min(index, homePages.length));
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent window not defined error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const rating_header = ["標題", "課名", "課號", "授課教師", "年份"]
  const rating_colRatio = ["30%", "30%", "15%", "15%", "10%"]
  const exam_header = ["課名", "課號", "授課教師", "年份"]
  const exam_colRatio = ["50%", "20%", "20%", "10%"]
  return (
    <>
      {/* lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]*/}
      <div className="relative flex flex-col items-start gap-2 py-4">
        <div className="flex flex-col gap-4 py-4 w-full">
          <div key="course" className="w-full">
            <TopicBlock content="你發布的課程評價" />
            {/*<ContentBlock
              key="1"
              content="happy hpa    jkdjljalf"
            />
            */}
            <Table key="rating_table" table={rating_data} header={rating_header} colRatio={rating_colRatio} />
          </div>
          <div key="exam" className="w-full">
            <TopicBlock content="你發布的考古題" />
            <Table key="exam_table" table={exam_data} header={exam_header} colRatio={exam_colRatio} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

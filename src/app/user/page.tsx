'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { env } from '@/env';
import { homePages } from '@/utils/constants';
import TopicBlock from '@/app/user/components/topic-block';
import ContentBlock from '@/app/user/components/content-block';

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

  return (
    <>
      <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
        <div className="flex flex-col items-start gap-2 py-4">
          <div key="course" className="w-full">
            <TopicBlock content="你發布的課程評價" />
            <ContentBlock
              key="1"
              content="happy hpa    jkdjljalf"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

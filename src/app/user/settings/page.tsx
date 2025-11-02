'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { env } from '@/env';
import { homePages } from '@/utils/constants';
import { SettingsPanel } from '@/app/user/settings/Component/Setting_panel';

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
      <div className="flex flex-col items-center justify-center">
        <main className="relative z-10 flex flex-col items-center justify-center h-screen -mt-16 text-center">
          <SettingsPanel/>
        </main>
      </div>
    </>
  );
};

export default Page;

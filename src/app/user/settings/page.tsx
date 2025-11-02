'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { env } from '@/env';
import { homePages } from '@/utils/constants';

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
          <div className="text-6xl font-bold font-serif">CSIE Council</div>
          <p className="text-2xl mt-6 font-mono italic">
            在 0 與 1 之間，我們編織未來
          </p>
        </main>
      </div>
    </>
  );
};

export default Page;

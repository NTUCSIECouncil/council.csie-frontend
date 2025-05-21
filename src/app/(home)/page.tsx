'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { homePages } from '@/utils/constants';
import building from '@public/building.jpg';

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
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  // Prevent window not defined error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          alt="Background"
          src={building}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          quality={90}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <main className="relative z-10 flex flex-col items-center justify-center h-screen -mt-16 text-center">
          <div className="text-6xl font-bold font-serif">CSIE Council</div>
          <p className="text-2xl mt-6 font-mono italic">
            在 0 與 1 之間，我們編織未來
          </p>
        </main>
        <div className="grid grid-cols-2 z-10 px-20">
          <div>
            {homePages.map((page, index) => (
              <section
                key={index}
                className="flex flex-col md:flex-row items-center justify-center h-screen px-8 transition-all duration-700"
              >
                <div className="w-full md:w-1/2 text-white">
                  <h2 className="text-4xl font-bold mb-4">{page.name}</h2>
                  <p className="text-lg">{page.description}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="relative">
            <div className="fixed top-1/2 right-1/4 transform -translate-y-1/2">
              {isClient && scrollPosition > (window.innerHeight * 0.75) && (
                <Image
                  alt={homePages[activeIndex - 1].name}
                  src={homePages[activeIndex - 1].gif}
                  width={128}
                  height={128}
                  className="w-64 h-48"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

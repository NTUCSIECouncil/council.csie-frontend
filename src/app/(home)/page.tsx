'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navPages } from '@/utils/constants';
import building from '@public/building.jpg';
import NavCards from '../../components/nav-cards';

const Page = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          alt="Background (Der Tian Hall)"
          src={building}
          layout="fill"
          objectFit="cover"
          className={`transition-all duration-1000 ${
            isScrolled ? 'blur-md' : 'blur-none'
          } brightness-[75%]`}
          quality={90}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <main className="relative z-10 flex flex-col items-center justify-center h-screen -mt-16">
          <h1 className="text-5xl font-bold">雞塊是帥潮</h1>
          <p className="text-lg mt-6">
            身為資工系學生，今天又是羨慕帥潮的一天
          </p>
        </main>

        <div className="relative z-10 pt-40 pb-80">
          <div className="container mx-auto px-4">
            <NavCards pages={navPages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

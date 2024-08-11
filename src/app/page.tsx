import { type FC } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import FullScreen from '@/components/FullScreen';
import NavCards from '@/ui/home/nav-cards';
// import Background from '@/ui/home/background';

const Page: FC = () => {
  return (
    <main>
      <FullScreen className={styles.homepageLayout}>
        <Image className={styles.background} src="/building_original.jpg" width="1000" height="1000" alt="background" />
        <NavCards />
      </FullScreen>
      {/* <Background /> */}
      {/* <NavCards /> */}
    </main>
  );
};

export default Page;

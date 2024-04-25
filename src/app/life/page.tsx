import { type FC } from 'react';
import styles from '@/styles/life.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Page: FC = () => {
  return (
    <main className={styles.bodyLife}>
      <h1 className="title">德田生活</h1>
      <div className={styles.wrap}>
        <Link href="/">
          <Image src="/building_original.jpg" alt="department building" width="600" height="500" className={styles.lifePicture} />
        </Link>
        <Link href="/">
          <Image src="/building.jpg" alt="department building 2" width="600" height="500" className={styles.lifePicture} />
        </Link>
      </div>
    </main>
  );
};

export default Page;

import Link from 'next/link';
import { type FC } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import FullScreen from '@/components/FullScreen';

const Page: FC = () => {
  return (
    <FullScreen className={styles.homepageLayout}>
      <Image className={styles.background} src="/building_original.jpg" width="1000" height="1000" alt="background" />
      <Link href="/life">
        <button className={styles.button}>
          <div className={styles.buttonLayout}>
            <h1>德田生活</h1>
            <hr color="white" style={{ width: '85%' }} />
            <p className={styles.paragraph}>
              國立臺灣大學（簡稱臺灣大學、臺大、NTU），1928年創立於臺灣臺北市，是臺灣第一所高等教育機構，為臺灣學生人數最多的大專院校[11][12]。前身為大日本帝國九所帝國大學之一的「臺北帝國大學」。
            </p>
          </div>
        </button>
      </Link>
      <Link href="/rate">
        <button className={styles.button}>
          <div className={styles.buttonLayout}>
            <h1>課程評價網</h1>
            <hr color="white" style={{ width: '85%' }} />
            <p className={styles.paragraph}>
              國立臺灣大學（簡稱臺灣大學、臺大、NTU），1928年創立於臺灣臺北市，是臺灣第一所高等教育機構，為臺灣學生人數最多的大專院校[11][12]。前身為大日本帝國九所帝國大學之一的「臺北帝國大學」。
            </p>
          </div>
        </button>
      </Link>
      <Link href="/database">
        <button className={styles.button}>
          <div className={styles.buttonLayout}>
            <h1>課程資料庫</h1>
            <hr color="white" style={{ width: '85%' }} />
            <p className={styles.paragraph}>
              國立臺灣大學（簡稱臺灣大學、臺大、NTU），1928年創立於臺灣臺北市，是臺灣第一所高等教育機構，為臺灣學生人數最多的大專院校[11][12]。前身為大日本帝國九所帝國大學之一的「臺北帝國大學」。
            </p>
          </div>
        </button>
      </Link>
    </FullScreen>
  );
};

export default Page;

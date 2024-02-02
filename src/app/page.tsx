import Link from 'next/link';
import { type FC } from 'react';
import styles from '@/styles/utils.module.css'

const Page: FC = () => {
  return (
    <main>
      <div>
        <h1>The main page of CSIE website.</h1>
      </div>
      <div className={styles.layout}>
        <div>
          <Link href="/life">
            <button className={styles.button}>
              <div>
                <h2>德田生活</h2>
                <hr color="white" style={{ width: '80%' }}/>
                <p className={styles.paragraph}>
                國立臺灣大學（簡稱臺灣大學、臺大、NTU），1928年創立於臺灣臺北市，是臺灣第一所高等教育機構，為臺灣學生人數最多的大專院校[11][12]。前身為大日本帝國九所帝國大學之一的「臺北帝國大學」。
                </p>
              </div>
            </button>
          </Link>
        </div>
        <div>
          <Link href="/rate">
            <button className={styles.button}>
              課程評價網
            </button>
          </Link>
        </div>
        <div>
          <Link href="/database">
            <button className={styles.button}>
              課程資料庫
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;

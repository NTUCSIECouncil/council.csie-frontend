// import Search from '@/app/ui/search';
// import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import styles from '@/styles/database.module.css';

const Page: FC = () => {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}> 課程資料庫</h1>
      {/* the following link is for the search icon of the search bar */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* <div className={styles.courseLayout}> */}
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input type="text" className={styles.searchTerm} placeholder="關鍵字搜尋" />
          <Link href="/database/filterResults">
            <button type="submit" className={styles.searchButton}>
              <i className="fa fa-search"></i>
            </button>
          </Link>
        </div>
        <p className={styles.word}>
          篩選：&nbsp;&nbsp;&nbsp;
          <select
            defaultValue={'all'}
            id="selectGrade"
            className={styles.selectBox}
          >
            <option value="all">年級</option>
            <option value="freshman">大一</option>
            <option value="sophomore">大二</option>
            <option value="junior">大三</option>
            <option value="senior">大四</option>
          </select>
          &nbsp; &nbsp;
          <select defaultValue='all' id="selectType" className={styles.selectBox}>
            <option value="all">分類</option>
            <option value="require">必修</option>
            <option value="select">選修</option>
          </select>
        </p>
        <p className={styles.word}>
          TAG：&nbsp;&nbsp;&nbsp;
          <Link href="/tagged/taxi" className={styles.tag}>計程</Link>
          <Link href="/tagged/hard" className={styles.tag}>超硬</Link>
          <Link href="/tagged/hw" className={styles.tag}>作業永遠寫不完</Link>
        </p>
        <svg width="0" height="0" viewBox="0 0 400 300">
          <defs>
            <mask id="mask">
              <rect fill="#000000" x="0" y="0" width="400" height="300"></rect>
              <circle fill="#FFFFFF" cx="150" cy="150" r="100" />
              <circle fill="#FFFFFF" cx="50" cy="50" r="150" />
            </mask>
          </defs>
        </svg>
      </div>
    </main>
  );
};

export default Page;

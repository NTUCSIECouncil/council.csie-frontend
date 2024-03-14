// import Search from '@/app/ui/search';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import styles from '@/styles/database.module.css';
import FullScreen from '@/components/FullScreen';

const Page: FC = () => {
  return (
    <FullScreen className={styles.bodyDB}>
      <Image className={styles.background} src="/building.jpg" width="1000" height="1000" alt="background"/>
      <h1 className={styles.title}> 課程資料庫</h1>
      {/* the following link is for the search icon of the search bar */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* <div className={styles.courseLayout}> */}
      <div className={styles.search}>
        <input type="text" className={styles.searchTerm} placeholder="關鍵字搜尋" />
        <Link href="/rate/filterResults">
        <button type="submit" className={styles.searchButton}>
        <i className="fa fa-search"></i>
        </button>
        </Link>
      </div>
      <div className={styles.wrap}>
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
      </div>
    </FullScreen>
  );
};

export default Page;

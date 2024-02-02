// import Search from '@/app/ui/search';
import { type FC } from 'react';
import styles from '@/styles/rate.module.css';

const Page: FC = () => {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}>課程評價網:D</h1>
      <div className={styles.layout_ver}>
        <button className={styles.left_bar}>
        <p>Search: &nbsp;
          <input id="search" className={styles.search} placeholder='搜尋課程...'></input>
        </p>
        {/* <Search placeholder='搜尋課程...'/> */}
        <h2>貼文篩選</h2>
        <hr style={{ width: '50%', margin: 'left' }} />
            <p>年級：&nbsp;
              <select id="selectGrade" className={styles.selectBox}>
                <option value="all">全部</option>
                <option value="freshman">大一</option>
                <option value="sophomore" selected>大二</option>
                <option value="junior">大三</option>
                <option value="senior">大四</option>
              </select>
            </p>
        <p>分類：&nbsp;
        <select id="selectType" className={styles.selectBox}>
            <option value="must">大學部必修</option>
            <option value="option" selected>大學部選修</option>
            <option value="cs">資工所</option>
            <option value="network">網媒所</option>
          </select>
        </p>
        <h2>常用標籤</h2>
        <hr style={{ width: '50%', margin: 'center' }} />
        <a href="/tagged/SP" className={styles.tag}>SP</a>
        <a href="/tagged/ADA" className={styles.tag}>ADA</a>
        <a href="/tagged/DSA" className={styles.tag}>DSA</a>
        <br></br>
        <br></br>
        <a href="/tagged/超硬" className={styles.tag}>超硬</a>
        <a href="/tagged/甜涼" className={styles.tag}>甜涼</a>
        </button>
      </div>
    </main>
  );
};

export default Page;

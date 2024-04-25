// import Search from '@/app/ui/search';
import Link from 'next/link';
import { type FC } from 'react';
import styles from '@/styles/rate.module.css';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Page: FC = () => {
  return (
    <div className={styles.bodyFilter}>
      <div className={styles.searchArea}>
        <div className={styles.layoutVer}>
          <button className={styles.leftBar}>
            <TextField
              sx={{
                width: 300,
                color: 'white'
              }}
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
            {/* <p>Search: &nbsp;
              <input id="search" placeholder='搜尋課程...'></input>
            </p> */}
            <h2>貼文篩選</h2>
            <hr style={{ width: '50%', margin: 'left' }} />
            <p>
              年級：&nbsp;
              <select id="selectGrade" name="selectGrade" defaultValue="all" className={styles.selectBox}>
                <option value="all">全部</option>
                <option value="freshman">大一</option>
                <option value="sophomore" selected>大二</option>
                <option value="junior">大三</option>
                <option value="senior">大四</option>
              </select>
            </p>
            <p>
              分類：&nbsp;
              <select id="selectType" name="selectType" defaultValue="must" className={styles.selectBox}>
                <option value="must">大學部必修</option>
                <option value="option" selected>大學部選修</option>
                <option value="cs">資工所</option>
                <option value="network">網媒所</option>
              </select>
            </p>
            <h2>常用標籤</h2>
            <hr style={{ width: '50%', margin: 'center' }} />
            <a href="/tagged/SP" className="tag">SP</a>
            <a href="/tagged/ADA" className="tag">ADA</a>
            <a href="/tagged/DSA" className="tag">DSA</a>
            <br></br>
            <br></br>
            <a href="/tagged/超硬" className="tag">超硬</a>
            <a href="/tagged/甜涼" className="tag">甜涼</a>
          </button>
        </div>
      </div>
      <div className={styles.mainLayout}>
        <h1 className={styles.titleFilter}>搜尋結果:D</h1>
        <button className={styles.mainButton}>
          <Link href="/rate/courses/">
            <div>
              <h1>普通物理學</h1>
              <h3 text-align="left">胡德邦</h3>
              <hr color="white" style={{ width: '100%' }} />
              <br></br>
              <a href="/tagged/SP" className="tag">普物</a>
              <a href="/tagged/ADA" className="tag">大一</a>
              <a href="/tagged/DSA" className="tag">甜涼</a>
              <p className={styles.paragraph}>
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
              </p>
            </div>
          </Link>
        </button>
        <button className={styles.mainButton}>
          <Link href="/rate/courses/">
            <div>
              <h1>普通物理學</h1>
              <h3 text-align="left">胡德邦</h3>
              <hr color="white" style={{ width: '100%' }} />
              <br></br>
              <a href="/tagged/SP" className="tag">普物</a>
              <a href="/tagged/ADA" className="tag">大一</a>
              <a href="/tagged/DSA" className="tag">甜涼</a>
              <p className={styles.paragraph}>
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
              </p>
            </div>
          </Link>
        </button>
        <button className={styles.mainButton}>
          <Link href="/rate/courses">
            <div>
              <h1 className={styles.courseName}>普通物理學</h1>
              <h3 text-align="left">胡德邦</h3>
              <hr color="white" style={{ width: '100%' }} />
              <br></br>
              <a href="/tagged/SP" className="tag">普物</a>
              <a href="/tagged/ADA" className="tag">大一</a>
              <a href="/tagged/DSA" className="tag">甜涼</a>
              <p className={styles.paragraph}>
                要想清楚，&#20320;&#22909;，到底是一種怎麽樣的存在。我認為，而這些並不是完全重要，更加重要的問題是，&#20320;&#22909;，到底應該如何實現。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。
              </p>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Page;

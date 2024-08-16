'use client';
// import Search from '@/app/ui/search';
import Link from 'next/link';
import React, { useState, useEffect, type FC } from 'react';
import styles from '@/styles/rate.module.css';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'next/navigation';
// import { FiberPin } from '@mui/icons-material';
// import { type Article } from '@/../../back/src/models/ArticleSchema';

interface ParamType {
  grade?: string;
  category?: string;
  keyword?: string;
  tags?: string[];
};
type TagType = Record<string, {
  name: string;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}>;

// Temporary function
async function fakeFetch (url: string): Promise<any[]> {
  const articles = [{
    _id: '0',
    title: '普通物理學',
    lecturer: '胡德邦',
    tag: ['程式', '甜涼'],
    grade: 1,
    categories: ['必修', '大一'],
    content: '胡德邦教授的普通物理學課程备受學生歡迎。他以清晰簡潔的講解風格和豐富的教學經驗，深受學生喜愛。在課堂上，他不僅僅注重理論知識的傳授，更加重視與學生的互動和實踐應用。透過生動的案例和有趣的實驗，他成功地激發了學生對物理學的興趣和好奇心。胡教授注重培養學生的問題解決能力和思維方式，鼓勵他們勇於探索未知領域。他的課程內容涵蓋了廣泛的物理學知識，從基礎理論到前沿技術，為學生提供了全面的學習體驗。不僅如此，胡德邦教授還以其富有啟發性的教學風格和貼近生活的案例，為學生樹立了良好的學習榜樣。總的來說，胡德邦教授的普通物理學課程是一門富有啟發性和挑戰性的課程，對學生的學術和人生發展都具有重要意義。'
  },
  {
    _id: '1',
    title: '計算機程式',
    lecturer: '劉邦鋒',
    tag: ['真強者', '超硬'],
    grade: 1,
    categories: ['必修', '大一'],
    content: '劉邦鋒教授的計算機程式課程是一門嚴苛但深具挑戰性的課程。他以嚴謹的態度和高要求著稱，對學生的學習態度和成果要求嚴格。在課堂上，他經常提出複雜且具有挑戰性的編程任務，要求學生深入理解課程內容並能夠獨立解決問題。他對代碼質量和風格的要求也非常高，鼓勵學生不斷改進和優化自己的編程技能。雖然劉教授的課程給予了學生豐富的知識和實踐經驗，但也常常讓學生感到壓力重重。他的嚴苛態度可能會挑戰學生的自我要求和學習動力，但同時也激勵他們不斷努力提高自己。總的來說，劉邦鋒教授的計算機程式課程雖然嚴苛，但對於學生的專業成長和職業發展具有重要的促進作用。'
  }
  ];
  return await new Promise((resolve, reject) => {
    resolve(articles);
  });
}

const Page: FC = () => {
  const availableTags: TagType = {
    tax: {
      name: '計程',
      state: useState(false)
    },
    hard: {
      name: '超硬',
      state: useState(false)
    },
    hw: {
      name: '作業永遠寫不完',
      state: useState(false)
    }
  };
  const flipTag = (state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]): void => {
    state[1](!state[0]);
  };
  const searchParams = useSearchParams();
  const [searchOption, setSearchOption] = useState<ParamType>({
    grade: '',
    category: '',
    keyword: '',
    tags: []
  });
  const [searchResult, setSearchResult] = useState<any[] | null>(null);
  const tagString = searchParams.get('tags');
  useEffect(() => {
    const searchOption = {
      tags: (tagString == null) ? [] : tagString.split(','),
      keyword: searchParams.get('keyword') ?? '',
      category: searchParams.get('category') ?? 'all',
      grade: searchParams.get('grade') ?? 'all'
    };
    setSearchOption(searchOption);

    const SEARCH_API_ENDPOINT = 'backend/api/articles/search';
    const url = `${SEARCH_API_ENDPOINT}?${searchParams.toString()}`;
    // fetch API according to $searchParams
    // const res = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // setSearchResult(await res.json());
    // console.log(searchResult);
    fakeFetch(url).then((articles) => {
      setSearchResult(articles);
    }).catch(() => { console.log('Error on fetch :('); });
  }, [searchParams, tagString]);

  return (
    <div className={styles.bodyFilter}>
      <div className={styles.searchArea}>
        <div className={styles.layoutVer}>
          <button className={styles.leftBar}>
            {/* <TextField
              sx={{
                width: 300,
                color: 'white'
              }}
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            /> */}
            <p>
              Search: &nbsp;
              <input
                id="search"
                value={searchOption.keyword ?? ''}
                onChange={(e) => {
                  setSearchOption({ ...searchOption, keyword: e.target.value });
                }}
                placeholder="搜尋課程..."
              />
            </p>
            <h2>貼文篩選</h2>
            <hr style={{ width: '50%', margin: 'left' }} />
            <p>
              年級：&nbsp;
              <select
                id="selectGrade"
                name="selectGrade"
                className={styles.selectBox}
              >
                <option value="all" selected={searchOption.grade === 'all'}>全部</option>
                <option value="freshman" selected={searchOption.grade === 'freshman'}>大一</option>
                <option value="sophomore" selected={searchOption.grade === 'sophomore'}>大二</option>
                <option value="junior" selected={searchOption.grade === 'junior'}>大三</option>
                <option value="senior" selected={searchOption.grade === 'senior'}>大四</option>
              </select>
            </p>
            <p>
              分類：&nbsp;
              <select id="selectType" name="selectType" className={styles.selectBox}>
                <option value="required" selected={searchOption.category === 'required'}>大學部必修</option>
                <option value="select" selected={searchOption.category === 'select'}>大學部選修</option>
                <option value="cs" selected={searchOption.category === 'cs'}>資工所</option>
                <option value="network" selected={searchOption.category === 'network'}>網媒所</option>
              </select>
            </p>
            <h2>常用標籤</h2>
            <hr style={{ width: '50%', margin: 'center' }} />
            {Object.keys(availableTags).map((tag, idx) => (
              <button
                key={idx}
                onClick={(e) => { flipTag(availableTags[tag].state); }}
                className={`tag${availableTags[tag].state[0] || ((searchOption.tags != null) && searchOption.tags.includes(tag)) ? ' tag-on' : ''}`}
                style={{ cursor: 'pointer' }}
                type="button"
              >
                {availableTags[tag].name}
              </button>
            ))}
          </button>
        </div>
      </div>
      <div className={styles.mainLayout}>
        <h1 className={styles.titleFilter}>搜尋結果:D</h1>
        {(Array.isArray(searchResult) ? searchResult : []).map((article: any) => (
          <button key={article._id} className={styles.mainButton}>
            <Link href={`/rate/articles/${article._id}`}>
              <div>
                <h1>{article.title}</h1>
                <h3 style={{ textAlign: 'right' }}>{article.lecturer}</h3>
                <hr color="white" style={{ width: '100%' }} />
                <br />
                {(article.tag ?? []).map((tag: string) => (
                  <a key={tag} href={`/tagged/${tag}`} className="tag">{tag}</a>
                ))}
                <p className={styles.paragraph}>
                  {(article.content != null)
                    ? (article.content.length > 100 ? `${article.content.substring(0, 300)} [...]` : article.content
                      )
                    : null}
                </p>
              </div>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;

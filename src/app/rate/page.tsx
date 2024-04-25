'use client';
// import Search from '@/app/ui/search';
// import Image from 'next/image';
import React, { useState, type FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/rate.module.css';
import FullScreen from '@/components/FullScreen';
import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface ParamType {
  grade?: string;
  category?: string;
  keyword?: string;
  tags?: string[];
};
type TagType = Record<string, {
  name: string;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}>;;

function submitSearch (router: AppRouterInstance, grade: string, category: string, keyword: string, tags: TagType): void {
  const searchUrl = '/rate/filterResults';
  const params: ParamType = { };

  if (grade !== 'all') { params.grade = grade; }
  if (category !== 'all') { params.category = category; }
  if (keyword !== '') { params.keyword = keyword; }

  const chosenTags = [];
  for (const k in tags) {
    if (tags[k].state[0]) { chosenTags.push(k); }
  }
  if (chosenTags.length > 0) {
    params.tags = chosenTags;
  }

  router.push(searchUrl + '?' + (new URLSearchParams(params)).toString());
}

const Page: FC = () => {
  const router = useRouter();
  const [grade, setGrade] = useState('all');
  const [category, setCategory] = useState('all');
  const [keyword, setKeyword] = useState('');
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

  return (
    <FullScreen className={styles.bodyRate}>
      <Image className={styles.background} src="/building.jpg" width="1000" height="1000" alt="background" />
      <h1 className="title">課程評價網</h1>
      {/* the following link is for the search icon of the search bar */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* <div className={styles.courseLayout}> */}
      <div className="searchWrap">
        <input type="text" className="searchBox" placeholder="關鍵字搜尋" onChange={(e) => { setKeyword(e.target.value); }} />
        <button type="submit" className="searchButton" onClick={() => { submitSearch(router, grade, category, keyword, availableTags); }}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className={styles.wrap}>
        <p className={styles.word}>
          篩選：&nbsp;&nbsp;&nbsp;
          <select
            defaultValue={grade}
            id="selectGrade"
            className={styles.selectBox}
            onChange={(e) => { setGrade(e.target.value); }}
          >
            <option value="all">年級</option>
            <option value="freshman">大一</option>
            <option value="sophomore">大二</option>
            <option value="junior">大三</option>
            <option value="senior">大四</option>
          </select>
          &nbsp; &nbsp;
          <select
            defaultValue={category}
            id="selectType"
            className={styles.selectBox}
            onChange={(e) => { setCategory(e.target.value); }}
          >
            <option value="all">分類</option>
            <option value="require">必修</option>
            <option value="select">選修</option>
          </select>
        </p>
        <p className={styles.word}>
          TAG：&nbsp;&nbsp;&nbsp;
          { Object.keys(availableTags).map((tag, idx) => (
            <button
              key={idx}
              onClick={(e) => { flipTag(availableTags[tag].state); }}
              className={'tag' + (availableTags[tag].state[0] ? ' tag-on' : '')}
              style={{ cursor: 'pointer' }}
              type="button"
            >
              {(availableTags as any)[tag].name}
            </button>
          ))}
        </p>
      </div>
    </FullScreen>
  );
};

export default Page;

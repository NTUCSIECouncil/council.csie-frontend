'use client';
import React, { useState, useEffect } from 'react';
// import { article, setArticle } from '';
import styles from '@/styles/rate.module.css';
import FullScreen from '@/components/FullScreen';
import { MailOutlined } from '@mui/icons-material';

/*
interface Article {
  title: string;
  lecturer: string;
  tag?: string[];
  semester?: string;
  grade?: number;
  categories?: string[];
  content?: string;
  creator: User;
  createdAt?: Date;
  updatedAt?: Date;
}
*/

const Article: React.FC = ({ params }) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    // (async () => {
    //     // fetch API according to $articleId
    //     const res = fetch();
    setArticle({
      title: '普通物理學',
      lecturer: '胡德邦'
    });
    // })();
    console.log(params.articleId);
  }, [params.articleId]);

  // render list of search results provided by $article
  // return JSON.stringify(article, null, 2);
  if (article === null) {
    return (<div>loading...</div>);
  }
  return (
    <FullScreen className={styles.articlePage}>
      <div className={styles.articleTitle}>
        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>{article.title}</div>
        <div style={{ fontSize: '28px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>111-1 {article.lecturer}</div>
      </div>
      <hr style={{ width: '65%' }} />
      <div className={styles.bodyArticle}>
        <div style={{ fontSize: '28px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>評價平均</div>
        <div style={{ fontSize: '28px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>等第</div>
      </div>
    </FullScreen>
  );
}

export default Article;

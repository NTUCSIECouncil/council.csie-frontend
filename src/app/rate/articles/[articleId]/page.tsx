'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/rate.module.css';
import FullScreen from '@/components/FullScreen';
import { Grid } from '@mui/material';

import Markdown from 'react-markdown';

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

interface Params {
  articleId: string;
};

const Article: React.FC<{ params: Params }> = ({ params }) => {
  const [article, setArticle] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      // fetch API according to $articleId
      setIsLoading(true);
      // let article;
      const response = await fetch(`/api/articles/${params.articleId}`);

      const debug = true;
      let article;
      if (debug) {
        article = {
          title: '普物',
          lecturer: '胡德邦',
          rate: '5',
          grade: 'A+',
          content: `
          # 胡德幫
          啊啊啊我愛你胡德幫  
          胡德幫幫忙
          ## 最牛逼的老師
          **你說得對**，*但是這就是卡桑帝*，***🤔HP 4700，護甲 329，魔抗 201的英雄***。有不可阻擋🤚，有護盾👌，還能過牆✌️。有控制🤙，甚至冷卻時間只有1秒✊，只要15點藍👍。轉換姿態時甚至可以刷新W的cd👈，還有✌️真實傷害。然後，護甲和魔抗提升後還能獲得技能加速👐，縮短Q的cd🙌，還縮短釋放時間😨，然後還有攻擊力😰。W就👊🏿😭👊🏿啊啊啊啊啊啊🖐️😭🤚
          `.split('\n').map(it => it.trimStart()).join('\n')
        };
      } else {
        if (!response.ok) {
          // windows alert
          if (response.status === 404) {
            setError('Article not found.');
          } else {
            setError('An error occurred while fetching the article.');
          }
          return;
        }
        article = await response.json();
      }

      setArticle(article);
      setError(null);
    };

    fetchArticle()
      .catch(error => {
        console.log(error.message); // 'An error has occurred: 404'
        setError('Failed to fetch article due to a network error.');
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log(params.articleId);
  }, [params.articleId]);

  // render list of search results provided by $article
  // return JSON.stringify(article, null, 2);
  if (isLoading) {
    return <div style={{ fontSize: '24px', color: 'var(--text)' }}>Loading...</div>;
  }

  if (error !== null && error !== '') {
    return <div style={{ fontSize: '24px', color: 'var(--text)' }}>{error}</div>;
  }

  return (
    <FullScreen className={styles.articlePage}>
      <div className={styles.articleTitle}>
        <div style={{ fontSize: '32px', fontWeight: 600, color: 'white' }}>{article.title}</div>
        <div style={{ fontSize: '28px', fontWeight: 600, color: 'white' }}>
          111-1
          {' '}
          {article.lecturer}
        </div>
      </div>
      <hr style={{ width: '65%' }} />
      <div className={styles.bodyArticle} style={{ fontSize: '28px', color: 'white' }}>
        <Grid container direction="row" gap="1rem" alignItems="end">
          <div style={{ fontWeight: 600, color: 'white' }}>{article.rate}</div>
          <div style={{ fontWeight: 600, color: 'white' }}>評價平均</div>
        </Grid>
        <Grid container direction="row" gap="1rem" alignItems="end">
          <div style={{ fontWeight: 600, color: 'white' }}>等第</div>
          <div style={{ fontWeight: 600, color: 'white' }}>{article.grade}</div>
        </Grid>
        <div style={{ marginTop: '2rem' }}>
          <Markdown>
            {article.content}
          </Markdown>
        </div>
      </div>
    </FullScreen>
  );
};

export default Article;

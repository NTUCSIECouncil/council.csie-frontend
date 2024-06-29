'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/rate.module.css';
import FullScreen from '@/components/FullScreen';
import { Grid } from '@mui/material';

import Markdown from 'react-markdown';
import { UserAuth } from '@/context/AuthContext';

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

  const { request } = UserAuth();

  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      // fetch API according to $articleId
      setIsLoading(true);
      // let article;
      const response = await request(`/api/articles/${params.articleId}`);

      if (!response.ok) {
        // windows alert
        if (response.status === 404) {
          setError('Article not found.');
        } else {
          setError('An error occurred while fetching the article.');
        }
        return;
      }
      const res = await response.json();

      console.log(res.result);
      setArticle(res.result);
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
  }, [params.articleId, request]);

  // render list of search results provided by $article
  // return JSON.stringify(article, null, 2);
  if (isLoading) {
    return <div style={{ fontSize: '24px', color: 'var(--text)' }}>Loading...</div>;
  }

  if (error !== null && error !== '') {
    return <div style={{ fontSize: '24px', color: 'var(--text)' }}>{error}</div>;
  }

  const grade =
    article.grade === 1
      ? '大一'
      : article.grade === 2
        ? '大二'
        : article.grade === 3
          ? '大三'
          : article.grade === 4
            ? '大四'
            : 'err';

  const titleTags = [grade].concat(article.categories as string[]);

  return (
    <FullScreen className={styles.articlePage}>
      <div className={styles.articleTitle}>
        <div style={{ fontSize: '32px', fontWeight: 600, color: 'white', verticalAlign: 'middle' }}>
          { article.title }
        </div>
        <div className={styles.tagWrap}>
          { titleTags.map((tag) => <button className={styles.courseTag} key={tag}>{tag}</button>) }
        </div>
        <div style={{ fontSize: '28px', fontWeight: 600, color: 'white', verticalAlign: 'middle' }}>
          { article.lecturer }
        </div>
      </div>
      <hr style={{ width: '65%' }} />
      <div className={styles.bodyArticle} style={{ fontSize: '28px', color: 'white' }}>
        <Grid container direction="row" gap="1rem" alignItems="end">
          <div className={styles.categoryTags}>
            { article.tag.map((tag) => <button className={styles.articleTag} key={tag}>{tag}</button>) }
          </div>
        </Grid>
        <div style={{ marginTop: '1rem' }}>
          <Markdown>
            {article.content}
          </Markdown>
        </div>
      </div>
    </FullScreen>
  );
};

export default Article;

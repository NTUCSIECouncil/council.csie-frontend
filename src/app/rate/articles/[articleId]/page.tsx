'use client';
import React, { useState, useEffect } from 'react';
// import { article, setArticle } from '';
import styles from '@/styles/rate.module.css';
import FullScreen from '@/components/FullScreen';
// import { MailOutlined } from '@mui/icons-material';

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
  const [article, setArticle] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      // fetch API according to $articleId
      setIsLoading(true);
      const response = await fetch(`api/articles/${params.articleId}`);
      // let article;
      if (!response.ok) {
        // windows alert
        if (response.status === 404) {
          setError('Article not found.');
        } else {
          setError('An error occurred while fetching the article.');
        }
        return;
        // article = {
        //   title: '普物',
        //   lecturer: '胡德邦'
        // };
      }

      const article = await response.json();

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
    return <div style={{ fontSize: '24px', fontFamily: 'serif', color: 'var(--text)' }}>Loading...</div>;
  }

  if (error !== null && error !== '') {
    return <div style={{ fontSize: '24px', fontFamily: 'serif', color: 'var(--text)' }}>{error}</div>;
  }

  return (
    <FullScreen className={styles.articlePage}>
      <div className={styles.articleTitle}>
        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>{article.title}</div>
        <div style={{ fontSize: '28px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>
          111-1
          {' '}
          {article.lecturer}
        </div>
      </div>
      <hr style={{ width: '65%' }} />
      <div className={styles.bodyArticle}>
        <div style={{ fontSize: '28px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>評價平均</div>
        <div style={{ fontSize: '28px', fontFamily: 'serif', fontWeight: 600, color: 'white' }}>等第</div>
      </div>
    </FullScreen>
  );
};

export default Article;

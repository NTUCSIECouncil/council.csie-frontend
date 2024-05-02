'use client';
import { type FC, useState, useEffect } from 'react';
import styles from '@/styles/database.module.css';

interface Params {
  quizID: string;
};

// const Page: FC<{ params: { quizID: string } }> = ({ params }) => {
const Page: FC<{ params: Params }> = ({ params }) => {
  const [src, setSrc] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://mk8d.wang.works/report.pdf');
      if (res.ok) {
        setSrc(URL.createObjectURL(await res.blob()));
      }
    })().catch(err => { console.error(err); });
  }, []);

  return (
    <center style={{ height: '50vh' }}>
      {
        // 'My Post: ' + params.quizID
      }
      {
        src === null
          ? (
              'loading'
            )
          : (
            <iframe src={src} height="100%" width="60%" />
            )
      }
    </center>
  );
};

export default Page;

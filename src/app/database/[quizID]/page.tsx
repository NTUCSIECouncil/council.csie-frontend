'use client';
import { type FC, useState, useEffect } from 'react';
import styles from './styles.module.css';

interface Params {
  quizID: string;
};

// const Page: FC<{ params: { quizID: string } }> = ({ params }) => {
const Page: FC<{ params: Params }> = ({ params }) => {
  const [src, setSrc] = useState<null | string>(null);
  const [title, setTitle] = useState<string>('title');
  const [course, setCourse] = useState<string>('course');
  const [semester, setSemester] = useState<string>('semester');

  useEffect(() => {
    (async () => {
      const res = await fetch('https://mk8d.wang.works/report.pdf');
      if (res.ok) {
        setSrc(URL.createObjectURL(await res.blob()));
      }
    })().catch(err => { console.error(err); });
  }, []);

  console.log(params.quizID)

  return (
    <section className={styles.all}>
      <section className={styles.course}>{course}</section>
      <center id='title'>{title}</center>
      <center style={{ height: '70vh' }}>
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
    </section>
  );
};

export default Page;

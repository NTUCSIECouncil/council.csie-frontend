'use client';
import { type FC, useState, useEffect } from 'react';
import '@/styles/globals.css';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

interface Params {
  quizID: string;
};

// const Page: FC<{ params: { quizID: string } }> = ({ params }) => {
const Page: FC<{ params: Params }> = ({ params }) => {
  const [src, setSrc] = useState<null | string>(null);
  const [title, setTitle] = useState<string>('title');
  const [course, setCourse] = useState<string>('course');
  const [semester, setSemester] = useState<string>('semester');
  const [author, setAuthor] = useState<string>('author');

  useEffect(() => {
    (async () => {
      const res = await fetch('https://mk8d.wang.works/report.pdf');
      if (res.ok) {
        setSrc(URL.createObjectURL(await res.blob()));
      }
    })().catch(err => { console.error(err); });
  }, []);

  console.log(params.quizID);

  return (
    <section className={styles.all}>
      <section className={styles.title}>
        {course}
        {' '}
        -
        {' '}
        {title}
      </section>
      <Stack direction="row" className={styles.attributes}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Author"
            secondary={author}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Course"
            secondary={course}
          />
        </ListItem>
        {/* <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem> */}
      </Stack>
      <center className={styles.content}>
        {
          src === null
            ? (
                'loading'
              )
            : (
              <iframe src={src} height="100%" width="100%" />
              )
        }
      </center>
    </section>
  );
};

export default Page;

'use client';
import { type FC, useState, useEffect } from 'react';
import '@/styles/globals.css';
import styles from './styles.module.css';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import PortraitIcon from '@mui/icons-material/Portrait';
import { UserAuth } from '@/context/AuthContext';
import { type UUID } from 'crypto';

interface Params {
  quizID: string;
};

interface Quiz {
  _id?: UUID;
  title: string;
  course: string;
  semester: string;
  download_link: string;
}

// const Page: FC<{ params: { quizID: string } }> = ({ params }) => {
const Page: FC<{ params: Params }> = ({ params }) => {
  const { request } = UserAuth();
  const [src, setSrc] = useState<null | string>(null);
  const [title, setTitle] = useState<string>('title');
  const [course, setCourse] = useState<string>('course');
  const [semester, setSemester] = useState<string>('semester');
  const [author, setAuthor] = useState<string>('author');

  useEffect(() => {
    (async () => {
      if (request !== undefined) {
        const res = await request('/api/quizzes/00000004-0001-0000-0000-000000000000');
        if (res === null) {
          throw Error('request error');
        } else if (!res.ok) {
          throw Error('status code error');
        } else {
          const result = (await res.json()).result as Quiz;
          setSrc(result.download_link);
          console.log(result.download_link);
        }
      }
    })().catch(err => { console.error(err); });
  }, []);

  console.log(params.quizID);

  return (
    <section className={styles.all}>
      <section className={styles.title}>
        {course + ' - ' + title}
      </section>
      <Stack direction="row" className={styles.attributes}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PortraitIcon />
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
      <div className={styles.content}>
        <div className={styles.open_in_new_tab_footnote}>
          <Link
            href="https://mk8d.wang.works/report.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Click here to open the file in a new tab.
          </Link>
        </div>
        {
          src === null
            ? (
                'loading'
              )
            : (
              <iframe src={src} height="100%" width="100%" />
              )
        }
      </div>
    </section>
  );
};

export default Page;

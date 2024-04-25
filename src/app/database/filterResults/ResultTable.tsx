import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinkIcon from '@mui/icons-material/Link';
import styles from '@/styles/database.module.css';
import Grow from '@mui/material/Grow';

interface Course {
  title: string;
  course: string;
  semester: string;
  downloadLink: string;
}

function createCourse (
  title: string,
  course: string,
  semester: string,
  downloadLink: string
): Course {
  return { title, course, semester, downloadLink };
}

const rows = [
  createCourse('Owo', '計算機程式設計', '111-1', 'https://example.com'),
  createCourse('呱呱呱', '自動機與形式語言', '112-1', 'https://example.com'),
  createCourse('窩不吱到', '資料結構與演算法', '112-2', 'https://example.com'),
  createCourse('Owo', '計算機程式設計', '111-1', 'https://example.com'),
  createCourse('嗨伊', '我是誰我在哪', '48763', 'https://example.com'),
  createCourse('Owo', '計算機程式設計', '111-1', 'https://example.com'),
  createCourse('呱呱呱', '自動機與形式語言', '112-1', 'https://example.com'),
  createCourse('窩不吱到', '資料結構與演算法', '112-2', 'https://example.com')
];

export default function ResultTable (): React.JSX.Element {
  const [showTable, setShowTable] = useState(true);

  return (
    <TableContainer>
      {/* <Grow in={showTable} timeout={500}> */}
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.headRow}>
            <TableCell align="center">標題</TableCell>
            <TableCell align="center">課名</TableCell>
            <TableCell align="center">學期</TableCell>
            <TableCell align="center">下載連結</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Grow in={showTable} timeout={500 * index} key={index}>
              <TableRow className={styles.bodyRow}>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.course}</TableCell>
                <TableCell align="center">{row.semester}</TableCell>
                <TableCell align="center">
                  <a
                    href={row.downloadLink}
                    className={styles.link}
                  >
                    <LinkIcon />
                  </a>
                </TableCell>
              </TableRow>
            </Grow>
          ))}
        </TableBody>
      </Table>
      {/* </Grow> */}
    </TableContainer>
  );
}

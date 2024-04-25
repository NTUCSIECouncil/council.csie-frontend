// import Search from '@/app/ui/search';
// import Image from 'next/image';
// import Link from 'next/link';
'use client';
import { styled, alpha } from '@mui/material/styles';
import { type FC } from 'react';
import styles from '@/styles/database.module.css';
import BasicTable from './ResultTable';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: '#d4d2d5',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#d4d2d5',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const Page: FC = () => {
  return (
    <main className={styles.body}>
      <div className={styles.resultLayout}>
        <div className={styles.headerContainer}>
          <h1 className={styles.resultTitle}>查詢結果</h1>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="輸入關鍵字"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <BasicTable />
      </div>
    </main>
  );
};

export default Page;

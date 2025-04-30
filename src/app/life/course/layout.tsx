import { sidebar } from '@/helpers/sidebar';

const Layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <>
      {sidebar('lifeCourse')}
      {children}
    </>
  );
};

export default Layout;

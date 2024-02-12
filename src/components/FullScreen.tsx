import { type FC } from 'react';

const FullScreen: FC = ({ children, style = {}, ...props }) => {
  return (
    <div style={{ ...style, height: 'calc(100vh - 80px)', position: 'relative' }} {...props}>
      <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--background)', position: 'absolute', zIndex: -100 }}></div>
      {children}
    </div>
  );
};

export default FullScreen;

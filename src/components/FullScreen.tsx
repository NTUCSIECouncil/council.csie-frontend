import { type FC, type ReactNode } from 'react';
import type CSS from 'csstype';

const FullScreen: FC<{ children: ReactNode; style?: typeof CSS; className?: string }> = ({ children, style = {}, ...props }) => {
  return (
    <div style={{ ...style, height: 'calc(100vh - 80px)', position: 'relative' }} {...props}>
      <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--background)', position: 'absolute', zIndex: -100 }} />
      {children}
    </div>
  );
};

export default FullScreen;

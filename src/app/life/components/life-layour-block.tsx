import React from 'react';
import { type SidebarOptionValue } from '@/utils/life-sidebar-options';
import { LifeSidebar } from './life-sidebar';

const LayoutBlock = ({
  children,
  optionValue,
}: {
  children: React.ReactNode;
  optionValue: SidebarOptionValue;
}): React.JSX.Element => {
  return (
    <div className="flex">
      <LifeSidebar optionValue={optionValue} />
      <main className="flex-1 ">
        <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default LayoutBlock;

'use client';
import { usePathname } from 'next/navigation';
import Drawer from '@/components/drawer';
import { type SidebarOptionValue } from '@/utils/life-sidebar-options';

interface SidebarProps {
  optionValue: SidebarOptionValue;
}

export const Sidebar = ({ optionValue }: SidebarProps) => {
  const choices = optionValue.choices;
  // To slice out the tailing '/'
  const pathname = usePathname().slice(0, -1);
  const selected = choices.find(({ value }) => value === pathname)?.description;

  if (!selected) {
    return <></>;
  }

  return (
    <div className="w-64 z-40">
      <div className="fixed">
        <Drawer
          choices={choices}
          selected={selected}
        />
      </div>
    </div>
  );
};

import { LifeSidebar } from '@/app/life/components/life-sidebar';
import { SidebarOptionKey } from '@/utils/constants';
import { SIDEBAR_OPTIONS } from '@/utils/life-sidebar-options';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <LifeSidebar optionValue={SIDEBAR_OPTIONS[SidebarOptionKey.COUNCIL]} />
      <main className="flex-1">{children}</main>
    </div>
  );
}

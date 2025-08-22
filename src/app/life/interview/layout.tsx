import { Sidebar } from '@/components/life/life-sidebar';
import { SidebarOptionKey } from '@/utils/constants';
import { SIDEBAR_OPTIONS } from '@/utils/life-sidebar-options';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar optionValue={SIDEBAR_OPTIONS[SidebarOptionKey.INTERVIEW]} />
      <main className="flex-1">{children}</main>
    </div>
  );
}

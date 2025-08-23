import { LifeSidebar } from '@/app/life/components/life-sidebar';
import { SidebarOptionKey } from '@/utils/constants';
import { SIDEBAR_OPTIONS } from '@/utils/life-sidebar-options';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <LifeSidebar optionValue={SIDEBAR_OPTIONS[SidebarOptionKey.INFORMATION]} />
      <main className="flex-1 ">
        <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
          {children}
        </div>
      </main>
    </div>
  );
}

import { SidebarOptionKey } from '@/utils/constants';
import { SIDEBAR_OPTIONS } from '@/utils/life-sidebar-options';
import LayoutBlock from '../components/life-layour-block';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutBlock optionValue={SIDEBAR_OPTIONS[SidebarOptionKey.COURSE]}>{children}</LayoutBlock>;
}

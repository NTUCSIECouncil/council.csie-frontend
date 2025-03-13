import Drawer from '@/components/drawer';
import { SIDEBAR_OPTIONS, type SidebarOptionKeys } from '@/helpers/constants';

export const sidebar = (key: SidebarOptionKeys) => {
  return (
    <Drawer
      choices={SIDEBAR_OPTIONS[key].choices}
    />
  );
};

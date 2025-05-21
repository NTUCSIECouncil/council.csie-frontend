import Drawer from '@/components/drawer';
import { SIDEBAR_OPTIONS, type SidebarOptionKeys } from '@/helpers/constants';

export const sidebar = (key: SidebarOptionKeys, selected: string) => {
  return (
    <div className="w-64 z-40">
      <div className="fixed">
        <Drawer
          choices={SIDEBAR_OPTIONS[key].choices}
          selected={selected}
        />
      </div>
    </div>
  );
};

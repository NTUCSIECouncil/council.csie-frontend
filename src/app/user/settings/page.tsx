'use client';

import { SettingsPanel } from '@/app/user/settings/components/setting_panel';

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <main className="relative z-10 flex flex-col items-center justify-center h-screen -mt-16 text-center">
          <SettingsPanel />
        </main>
      </div>
    </>
  );
};

export default Page;

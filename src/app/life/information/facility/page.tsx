'use client';
import React, { useState } from 'react';
import DividerBar from '@/components/divider-bar';
import { sidebar } from '@/helpers/sidebar';
import MapPoints from './content.json';
import InteractiveMap from './interactive-map';

const sections = [
  { title: '德田地下室', points: MapPoints.B1.points, map: '/B1.jpg', width: MapPoints.B1.width, height: MapPoints.B1.height },
  { title: '德田一樓', points: MapPoints.First.points, map: '/1F.png', width: MapPoints.First.width, height: MapPoints.First.height },
  { title: '德田二樓', points: MapPoints.Second.points, map: '/2F.png', width: MapPoints.Second.width, height: MapPoints.Second.height },
  { title: '學新館', points: MapPoints.MK.points, map: '/MK.png', width: MapPoints.MK.width, height: MapPoints.MK.height },
];

const tabItems = sections.map(section => ({
  key: section.title,
  label: section.title,
  type: 'text' as const,
}));

const Page = (): React.JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].key);
  const selectedSection = sections.find(section => section.title === selectedTab);

  return (
    <div className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInformation', '系館空間介紹')}

      <div className="w-full shrink-0 lg:w-[80%] lg:shrink lg:ml-8 lg:max-w-4xl">
        <div className="sticky top-18 z-20">
          <DividerBar items={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>

        <div className="flex flex-col items-start pt-4">
          {selectedSection?.points != null && (
            <InteractiveMap points={selectedSection.points} imageUrl={selectedSection.map} width={selectedSection.width} height={selectedSection.height} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

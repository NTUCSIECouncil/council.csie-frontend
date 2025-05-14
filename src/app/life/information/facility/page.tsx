'use client';
import DividerBar from '@/components/divider-bar';
import { sidebar } from '@/helpers/sidebar';
import React, { useState } from 'react';
import MapPoints from './content.json';
import InteractiveMap from './interactive-map';

const Page = (): React.JSX.Element => {
  const sections = [
    { title: '德田地下室', points: MapPoints.B1.points, map: '/B1.jpg', width: MapPoints.B1.width, height: MapPoints.B1.height },
    { title: '德田一樓', points: MapPoints.First.points, map: '/1F.png', width: MapPoints.First.width, height: MapPoints.First.height },
    { title: '德田二樓', points: MapPoints.Second.points, map: '/2F.png', width: MapPoints.Second.width, height: MapPoints.Second.height },
    { title: '學新館', points: MapPoints.MK.points, map: '/MK.png', width: MapPoints.MK.width, height: MapPoints.MK.height },
  ];

  const tabTitles = sections.map(section => section.title);
  const [selectedTab, setSelectedTab] = useState(tabTitles[0]);
  const selectedSection = sections.find(section => section.title === selectedTab);

  return (
    <div className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInformation', '系館空間介紹')}

      <div className="w-[80%] lg:ml-8 lg:pr-8 lg:max-w-4xl">
        <div className="sticky top-20 z-10">
          <DividerBar items={tabTitles} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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

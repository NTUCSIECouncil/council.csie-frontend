'use client';
import React, { useState } from 'react';
import DividerBar from '@/components/divider-bar';
import LifeCourseContent from '@/components/life-course-content';
import { sidebar } from '@/helpers/sidebar';
import MapPoints from './118-restaurant.json';
import InteractiveMap from './interactive-map';

const Page = (): React.JSX.Element => {
  const sections = [
    { title: '台大後門（118巷）', points: MapPoints, map: '/118-map.png' },
    { title: '台大校內', points: null, map: '' },
    { title: '公館', points: null, map: '' },
  ];

  const tabTitles = sections.map(section => section.title);
  const [selectedTab, setSelectedTab] = useState(tabTitles[0]);
  const selectedSection = sections.find(section => section.title === selectedTab);

  return (
    <div className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInformation', '美食地圖')}

      <div className="w-full shrink-0 lg:w-[80%] lg:shrink lg:ml-8 lg:max-w-4xl">
        <div className="sticky top-20 z-10">
          <DividerBar items={tabTitles} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>

        <div className="flex flex-col items-start pt-4">
          {selectedSection?.points != null
            ? (
                <InteractiveMap points={selectedSection.points} imageUrl={selectedSection.map} />
              )
            : (
                <LifeCourseContent content="敬請期待" />
              )}
        </div>
      </div>
    </div>
  );
};

export default Page;

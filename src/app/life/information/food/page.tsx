'use client';
import React, { useState } from 'react';
import DividerBar from '@/components/divider-bar';
import LifeCourseContent from '@/components/life-course-content';
import { sidebar } from '@/helpers/sidebar';
import MapPoints from './118-restaurant.json';
import InteractiveMap from './interactive-map';

const sections = [
  { title: '台大後門（118巷）', points: MapPoints, map: '/118-map.png' },
  { title: '台大校內', points: null, map: '' },
  { title: '公館', points: null, map: '' },
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
      {sidebar('lifeInformation', '美食地圖')}

      <div className="w-full shrink-0 xl:w-[80%] xl:shrink xl:ml-8 xl:max-w-4xl">
        <div className="sticky top-18 z-20">
          <DividerBar items={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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

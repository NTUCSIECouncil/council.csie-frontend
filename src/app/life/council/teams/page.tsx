'use client';
import React, { useEffect, useState } from 'react';
import DividerBar from '@/app/life/components/divider-bar';
import LifeSubTopic from '@/app/life/components/life-sub-topic';
import LifeTopic from '@/app/life/components/life-topic';
import { type CommentItem } from '@/utils/constants';
import lifeTeams from './life-council-teams.json' assert { type: 'json' };

interface TeamItem {
  name: string;
  comment: CommentItem[];
  description: string;
  image: string;
}

const teams: Record<string, TeamItem> = lifeTeams;

const tabItems = Object.values(teams).map(team => ({
  type: 'image' as const,
  icon: team.image,
  alt: team.name,
}));

const Page = (): React.JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].alt);
  const [content, setContent] = useState<TeamItem | null>(teams[tabItems[0].alt]);

  useEffect(() => {
    const found = Object.values(teams).find(team => team.name === selectedTab);
    setContent(found ?? null);
  }, [selectedTab]);

  return (
    <div className="ml-8 md:max-w-4xl">
      <LifeTopic topic="系隊介紹" />
      <div className="sticky top-18">
        <DividerBar items={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      {content && (
        <>
          <LifeSubTopic
            content={content.name}
            comment={content.comment}
          />
          {content.description && (
            <div className="whitespace-pre-line text-lg mt-4">
              {content.description}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;

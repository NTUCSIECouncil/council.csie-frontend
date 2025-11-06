'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa'; // Edit button
import { updateProfile } from "firebase/auth";

import { env } from '@/env';
import { homePages } from '@/utils/constants';
import { UserAuth } from '@/helpers/context/auth-context';
import { auth } from '@/helpers/firebase/firebase';
import TopicBlock from '@/app/user/components/topic-block';
import InformationBlock from '@/app/user/components/information-block';
import NameBlock from '@/app/user/components/name-block';
import Table from '@/app/user/components/table';
import RenamePanel from '@/app/user/components/rename-panel';
import rating_data from '@/app/user/rating_data.json';
import exam_data from '@/app/user/exam_data.json';

const handlePromise = (promiseFunction: () => Promise<void>): void => {
  promiseFunction()
    .then(() => console.log("Promise resolved successfully."))
    .catch((error) => console.error("Promise failed:", error));
};

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const sectionHeight = window.innerHeight;
    const index = Math.round(window.scrollY / sectionHeight);
    setActiveIndex(Math.min(index, homePages.length));
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent window not defined error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handling rename
  const { currentUser } = UserAuth();
  const [displayName, setDisplayName] = useState("Jaime"); // dummy variable for testing, since I can't login properly QAQ
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (currentUser?.displayName) {
      setDisplayName(currentUser.displayName);
    }
  }, [currentUser]);

  const handleSave = (newName: string) => {
    /*
    handlePromise(() => 
      updateProfile(auth.currentUser, {
        displayName: newName
      })
    );
    */
    setDisplayName(newName);
    setPanelOpen(false);
  };

  const rating_header = ["標題", "課名", "課號", "授課教師", "年份"]
  const rating_colRatio = ["30%", "30%", "15%", "15%", "10%"]
  const exam_header = ["課名", "課號", "授課教師", "年份"]
  const exam_colRatio = ["50%", "20%", "20%", "10%"]
  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction()
      .then()
      .catch(() => "I don't want to do anything.");
  };
  // Hangle noot login case
  return (
    <>
      <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
        <div className="container mx-auto flex flex-row justify-between items-stretch py-4">
          <div className="flex flex-row items-center gap-6">
            <Image
              alt="Teacher Image"
              src={"/teacher_img/Hm_tsai.png"/* currentUser.photoUrl */}
              height={128}
              width={128}
              className="object-cover object-top w-36 h-36 rounded-full"
            />
            
            <div className="flex flex-row items-center gap-3">
              <NameBlock
                content={displayName/* currentUser.displayName */}
              />
              <button
                onClick={() => setPanelOpen(true)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Modify display name"
              >
                <FaPencilAlt className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <InformationBlock
              key="other"
              content={"Social credit: 777"/* other user property */}
            />
            <InformationBlock
              key="email"
              content={"b12902141@csie.ntu.edu.tw"/*currentUser.email*/}
            />
          </div>
        </div>
        
        <RenamePanel
          isOpen={isPanelOpen}
          initialName={displayName}
          onCancel={() => setPanelOpen(false)}
          onSave={handleSave}
        />

        <div className="flex flex-col gap-4 py-4 w-full">
          <div key="course" className="w-full">
            <TopicBlock content="你發布的課程評價" />
            <Table key="rating_table" table={rating_data} header={rating_header} colRatio={rating_colRatio} />
          </div>
          <div key="exam" className="w-full">
            <TopicBlock content="你發布的考古題" />
            <Table key="exam_table" table={exam_data} header={exam_header} colRatio={exam_colRatio} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

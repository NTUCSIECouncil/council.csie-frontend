'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPencilAlt, FaHome } from 'react-icons/fa'; // Edit button
import { updateProfile } from "firebase/auth";

import { env } from '@/env';
import { homePages } from '@/utils/constants';
import { UserAuth } from '@/helpers/context/auth-context';
import { useRouter } from 'next/navigation';
import { auth } from '@/helpers/firebase/firebase';
import TopicBlock from '@/app/user/components/topic-block';
import InformationBlock from '@/app/user/components/information-block';
import NameBlock from '@/app/user/components/name-block';
import Table from '@/app/user/components/table';
import RenamePanel from '@/app/user/components/rename-panel';
import rating_data from '@/app/user/rating_data.json';

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
  const { currentUser, isUserLoaded, signIn, request } = UserAuth();
  const [userData, setUserData] = useState<{ nickname?: string, email?: string, name?: string } | null>(null);
  const [displayName, setDisplayName] = useState("Loading...");
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (isUserLoaded && currentUser) {
      setDisplayName(currentUser.displayName ?? '');
      handlePromise(async () => {
        const res = await request('/api/users/me/private');
        if (res && res.ok) {
          const data = await res.json();
          setUserData(data.user);
          if (data.user.nickname) {
            setDisplayName(data.user.nickname);
          }
        }
      });
    }
  }, [currentUser, isUserLoaded, request]);

  const handleSave = (newName: string) => {
    setDisplayName(newName);
    setPanelOpen(false);

    handlePromise(async () => {
      const res = await request('/api/users/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname: newName }),
      });
      if (res && res.ok) {
        setUserData(prev => prev ? { ...prev, nickname: newName } : prev);
      }
    });
  };

  const rating_header = ["標題", "課名", "課號", "授課教師", "年份", "編輯"]
  const rating_colRatio = ["25%", "25%", "15%", "15%", "10%", "10%"]
  /* To be deleted after confirmation, please also delete exam_data.json
  const exam_header = ["課名", "課號", "授課教師", "年份"]
  const exam_colRatio = ["50%", "20%", "20%", "10%"]
  */
  const router = useRouter();
  const handlePromise = (promiseFunction: () => Promise<void>): void => {
    promiseFunction()
      .then()
      .catch(() => "I don't want to do anything.");
  };
  useEffect(() => {
    if (isUserLoaded && currentUser === null) {
      handlePromise(signIn);
    }
  }, [isUserLoaded, currentUser, signIn]);

  // Handle not login case
  if (!isUserLoaded || currentUser === null) {
    return <div>Redirecting to login...</div>;
  }
  else return (
    <>
      <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
        <div className="container mx-auto flex flex-row justify-between items-stretch py-4">
          <div className="flex flex-row items-center gap-6">
            <Image
              alt="User Icon"
              src={currentUser?.photoURL ?? "/teacher_img/Hm_tsai.png"} // May want to change to other picture when for deployment
              height={128}
              width={128}
              className="object-cover object-top w-36 h-36 rounded-full"
            />

            <div className="flex flex-row items-center gap-3">
              <NameBlock
                content={isUserLoaded && userData ? userData.nickname ?? userData.name ?? "Loading..." : "Loading..."}
              />
              <button
                onClick={() => setPanelOpen(true)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Modify display name"
                disabled={!isUserLoaded}
              >
                <FaPencilAlt className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">

            <button
              onClick={() => {
                router.push('/');
              }}
              className="text-white hover:text-gray-400 transition-colors p-3 rounded-full bg-white/10 hover:bg-white/0 mb-6"
              aria-label="Modify display name"
              disabled={!isUserLoaded}
            >
              <p> Back to home </p>
            </button>
            <InformationBlock
              key="other"
              content={isUserLoaded && userData ? userData.name ?? "" : ""}
            />
            <InformationBlock
              key="email"
              content={isUserLoaded && userData ? userData.email ?? "" : ""}
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
          {/* To be deleted after confirmation, please also delete exam_data.json
          <div key="exam" className="w-full">
            <TopicBlock content="你發布的考古題" />
            <Table key="exam_table" table={exam_data} header={exam_header} colRatio={exam_colRatio} />
          </div>
          */}
        </div>
      </div>
    </>
  );
};

export default Page;

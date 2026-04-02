'use client';

//import { updateProfile } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaPencilAlt, FaSignOutAlt } from 'react-icons/fa';

import InformationBlock from '@/app/user/components/information-block';
import NameBlock from '@/app/user/components/name-block';
import RenamePanel from '@/app/user/components/rename-panel';
import Table from '@/app/user/components/table';
import TopicBlock from '@/app/user/components/topic-block';
import rating_data from '@/app/user/rating_data.json';
import { UserAuth } from '@/helpers/context/auth-context';

const handlePromise = (promiseFunction: () => Promise<void>): void => {
  promiseFunction()
    .then(() => {
      console.log('Promise resolved successfully.');
    })
    .catch(error => {
      console.error('Promise failed:', error);
    });
};

const Page = () => {
  // Handling rename
  const { currentUser, isUserLoaded, signIn, logOut, request } = UserAuth();
  const [userData, setUserData] = useState<{
    nickname?: string;
    email?: string;
    name?: string;
  } | null>(null);
  const [displayName, setDisplayName] = useState('Loading...');
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (isUserLoaded && currentUser) {
      setDisplayName(currentUser.displayName ?? '');
      handlePromise(async () => {
        const res = await request('/api/users/me/private');
        if (res?.ok) {
          const data = (await res.json()) as {
            user: { nickname?: string; email?: string; name?: string };
          };
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
      if (res?.ok) {
        setUserData(prev => (prev ? { ...prev, nickname: newName } : prev));
      }
    });
  };

  const rating_header = ['標題', '課名', '課號', '授課教師', '年份', '編輯'];
  const rating_colRatio = ['25%', '25%', '15%', '15%', '10%', '10%'];
  /* To be deleted after confirmation, please also delete exam_data.json
  const exam_header = ["課名", "課號", "授課教師", "年份"]
  const exam_colRatio = ["50%", "20%", "20%", "10%"]
  */
  const router = useRouter();


  // Handle not login case
  if (!isUserLoaded || currentUser === null) {
    return <div>Redirecting to login...</div>;
  } else
    return (
      <>
        <div className="relative flex flex-col items-start gap-2 py-4 lg:ml-8 lg:pr-8 lg:max-w-4xl lg:w-[80%]">
          <div className="container mx-auto flex flex-row justify-between items-stretch py-4">
            <div className="flex flex-row items-center gap-6">
              <Image
                alt="User Icon"
                src={currentUser.photoURL ?? '/teacher_img/Hm_tsai.png'} // May want to change to other picture when for deployment
                height={128}
                width={128}
                className="object-cover object-top w-36 h-36 rounded-full"
              />

              <div className="flex flex-row items-center gap-3">
                <NameBlock
                  content={
                    userData
                      ? (userData.nickname ?? userData.name ?? 'Loading...')
                      : 'Loading...'
                  }
                />
                <button
                  onClick={() => {
                    setPanelOpen(true);
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Modify display name"
                >
                  <FaPencilAlt className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end">
              <button
                onClick={() => {
                  handlePromise(logOut);
                }}
                className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-red-500/30 transition-all duration-300 p-2 px-5 rounded-xl bg-white/10 border border-white/5 hover:border-red-500/40 shadow-sm backdrop-blur-sm mb-6 font-medium"
                aria-label="Logout"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <p>Logout</p>
              </button>
              <InformationBlock
                key="other"
                content={userData ? (userData.name ?? '') : ''}
              />
              <InformationBlock
                key="email"
                content={userData ? (userData.email ?? '') : ''}
              />
            </div>
          </div>

          <RenamePanel
            isOpen={isPanelOpen}
            initialName={displayName}
            onCancel={() => {
              setPanelOpen(false);
            }}
            onSave={handleSave}
          />

          <div className="flex flex-col gap-4 py-4 w-full">
            <div key="course" className="w-full">
              <TopicBlock content="你發布的課程評價" />
              <Table
                key="rating_table"
                table={rating_data}
                header={rating_header}
                colRatio={rating_colRatio}
              />
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

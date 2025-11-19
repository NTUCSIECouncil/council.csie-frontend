'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import ArticleDisplay from '@/app/rate/articles/[articleId]/components/article-display';
import { type Course } from '@/types/backend';
import clientFetch from '@/utils/client-fetch';
import EditComponent from './components/edit-component';
import { EditContext } from './context';

type TabType = 'edit' | 'preview';

interface ArticleIdResponse {
  articleId: string;
}

interface ErrorResponse {
  message: string;
  details?: ErrorDetail;
}

interface ErrorDetail {
  field: string;
  reason: string;
}

const NewPostPage = (): React.JSX.Element => {
  const router = useRouter();

  // tab state
  const [activeTab, setActiveTab] = useState<TabType>('edit');

  // form state
  const [title, setTitle] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [semester, setSemester] = useState<string>('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // validation
  const isFormValid = () => {
    // TODO: check validation rules
    return (
      title.trim().length > 0 &&
      selectedCourse !== null &&
      content.trim().length >= 50 &&
      !isSubmitting
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      const postData = {
        title: title.trim(),
        tags: selectedTags,
        ratings: {
          // TODO: use fixed value for ratings temporarily
          sweetness: 4,
          chill: 5,
          teaching: 3,
          gain: 4,
          recommend: 5,
        },
        course: selectedCourse._id,
      };

      const createResponse = await clientFetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        cache: 'no-store',
      });

      if (!createResponse.ok) {
        const errorData = (await createResponse.json()) as ErrorResponse;
        if (createResponse.status === 400) {
          throw new Error(`Bad Request: ${errorData.message}`);
        } else if (createResponse.status === 401) {
          throw new Error(`Bad Request: ${errorData.message}`);
        }
      }

      const articleId = ((await createResponse.json()) as ArticleIdResponse)
        .articleId;

      console.log('Post submitted successfully, articleId:', articleId);

      const contentUploadResponse = await clientFetch(
        `/api/articles/${articleId}/file`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ file: content.trim() }),
        },
      );

      if (!contentUploadResponse.ok) {
        const errorData = (await createResponse.json()) as ErrorResponse;
        if (createResponse.status === 400) {
          throw new Error(`Bad Request: ${errorData.message}`);
        } else if (createResponse.status === 401) {
          throw new Error(`Bad Request: ${errorData.message}`);
        }
      }

      // Redirect to success page or back to rate page
      router.push(`/rate/articles/${articleId}`);
    } catch (error) {
      console.error('Error submitting post:', error);
      // TODO: Show error message to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <EditContext.Provider
      value={{
        title,
        setTitle,
        selectedCourse,
        setSelectedCourse,
        content,
        setContent,
        selectedTags,
        setSelectedTags,
        semester,
        setSemester,
      }}
    >
      <main className="flex flex-col items-center w-3/5 mx-auto min-h-screen">
        <div className="w-full max-w-5xl m-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => {
                  setActiveTab('edit');
                }}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === 'edit'
                    ? 'bg-slate-300 text-slate-900'
                    : 'text-gray-300 hover:text-white cursor-pointer'
                }`}
              >
                編輯
              </button>
              <button
                onClick={() => {
                  setActiveTab('preview');
                }}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === 'preview'
                    ? 'bg-slate-300 text-slate-900'
                    : 'text-gray-300 hover:text-white cursor-pointer'
                }`}
              >
                預覽
              </button>
            </div>
          </div>

          {activeTab === 'edit' ? (
            <form onSubmit={handleSubmit}>
              <EditComponent />
              <div className="flex gap-4 pt-6 border-t border-gray-500 px-4 mt-8">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 border border-gray-500 text-gray-300 rounded-xl hover:bg-gray-800 hover:text-white transition font-medium"
                >
                  取消
                </button>

                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`px-6 py-3 rounded-xl font-medium transition ${
                    isFormValid()
                      ? 'bg-slate-300 text-slate-900 hover:bg-slate-400'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? '發布中...' : '發布評價'}
                </button>
              </div>

              {/* Validation Messages */}
              {/* {!isFormValid() && (title || selectedCourse || content) && (
                <div className="text-sm text-red-400 mt-2 px-4">
                  {!title.trim() && '請輸入標題'}
                  {title.trim() && !selectedCourse && '請選擇課程'}
                  {title.trim() &&
                    selectedCourse &&
                    content.trim().length < 50 &&
                    `內容至少需要 50 字`}
                </div>
              )} */}
            </form>
          ) : (
            // Preview Mode
            <ArticleDisplay
              articleData={{
                title: title || '課程評價標題',
                creator: '預覽使用者', // TODO: change to real userId
                content: content,
                tags: selectedTags,
                createdAt: new Date().toISOString().split('T')[0],
              }}
              courseData={
                selectedCourse
                  ? {
                      names: [selectedCourse.names[0]],
                      curriculum: selectedCourse.curriculum,
                      lecturer: selectedCourse.lecturer,
                    }
                  : {
                      names: ['請選擇課程'],
                      curriculum: '',
                      lecturer: '',
                    }
              }
              semester={selectedCourse?.class ?? ''}
              showEditButton={false}
            />
          )}
        </div>
      </main>
    </EditContext.Provider>
  );
};

export default NewPostPage;

'use client';

import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineReportProblem } from 'react-icons/md';

interface Props {
  onClose: () => void;
  articleId: string;
  articleTitle: string;
}

const ReportPanel = ({
  onClose,
  articleId,
  articleTitle,
}: Props): React.JSX.Element => {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const openMailClient = () => {
    const recipient = 'CSIEacademic@gmail.com';
    const subject = encodeURIComponent(`檢舉文章 - ${articleId}`);

    const bodyLines = [
      `文章編號: ${articleId}`,
      `文章標題: ${articleTitle}`,
      '',
      '檢舉原因:',
      selectedReason || '未選擇',
      '',
      '詳細說明:',
      description || '無',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    //Using Gmail
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');

    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-2xl shadow-2xl p-8 w-[600px] max-w-full border-2 border-red-800"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <MdOutlineReportProblem />
            檢舉文章
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {articleTitle && (
          <div className="mb-4 p-3 bg-slate-800 rounded-lg">
            <p className="text-sm text-gray-300 mb-1">文章標題</p>
            <p className="text-white font-medium">{articleTitle}</p>
            <p className="text-sm text-gray-400 mt-1">文章編號: {articleId}</p>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-lg font-medium mb-3 text-white">
            檢舉原因
          </label>
          <div className="flex flex-wrap gap-2">
            {['不當內容', '垃圾訊息', '惡意攻擊', '侵犯隱私', '其他'].map(
              reason => (
                <button
                  key={reason}
                  type="button"
                  className={`px-4 py-2 rounded-full transition ${
                    selectedReason === reason
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                  onClick={() => {
                    setSelectedReason(reason);
                  }}
                >
                  {reason}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-3 text-white">
            詳細說明
          </label>
          <textarea
            className="w-full px-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 focus:outline-none focus:border-transparent resize-none"
            rows={5}
            placeholder="請詳細說明檢舉原因..."
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition"
          >
            取消
          </button>
          <button
            type="button"
            onClick={openMailClient}
            className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
          >
            開啟 Gmail 檢舉
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportPanel;

'use client';

import { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';

import { useEdit } from '../context';

// Sample template for course review - can be expanded later
const SAMPLE_TEMPLATE = `# 課程心得

## 課程內容
請描述這門課的主要內容、教學方式等...

## 作業與考試
請分享作業量、考試難度、評分方式等...

## 教授教學
請評價教授的教學風格、互動程度等...

## 總體評價
請給出總體建議，這門課適合什麼樣的學生...

---
評分 (1-5星): ⭐⭐⭐⭐⭐`;

const ContentEditor = (): React.JSX.Element => {
  const { content, setContent } = useEdit();
  const [showTemplate, setShowTemplate] = useState(false);

  const loadTemplate = () => {
    setContent(SAMPLE_TEMPLATE);
    setShowTemplate(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="block text-lg font-medium text-white">
          內容 <span className="text-red-400">*</span>
        </label>
        <button
          type="button"
          onClick={() => {
            setShowTemplate(true);
          }}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-slate-300 hover:bg-slate-400 text-slate-900 rounded-xl transition"
        >
          <FaFileAlt />
          載入模板
        </button>
      </div>

      <textarea
        className="w-full h-80 px-4 py-3 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 resize-vertical bg-[#1c1c29] bg-opacity-50 text-white placeholder:text-gray-400"
        placeholder="請分享您對這門課的心得與評價..."
        value={content}
        onChange={e => {
          setContent(e.target.value);
        }}
      />

      <div className="mt-2 text-sm text-gray-400">
        支援 Markdown 格式 • 最少 50 字
      </div>

      {/* Template modal */}
      {showTemplate && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => {
            setShowTemplate(false);
          }}
        >
          <div
            className="bg-gray-800 rounded-2xl shadow-2xl p-6 w-[600px] max-w-full max-h-[80vh] overflow-y-auto"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <h3 className="text-xl font-semibold mb-4">課程心得模板</h3>

            <pre className="bg-gray-700 p-4 rounded-xl text-sm whitespace-pre-wrap overflow-x-auto mb-4 border">
              {SAMPLE_TEMPLATE}
            </pre>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowTemplate(false);
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
              >
                取消
              </button>
              <button
                type="button"
                onClick={loadTemplate}
                className="px-4 py-2 bg-slate-600 text-white hover:bg-slate-700 rounded-xl transition"
              >
                使用此模板
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentEditor;

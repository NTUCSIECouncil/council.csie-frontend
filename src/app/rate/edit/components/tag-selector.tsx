'use client';

import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

interface Props {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const COMMON_TAGS = [
  '通識',
  '必修',
  '程式設計',
  '機率',
  '資結',
  '網頁',
  'CSX',
  '資工系',
  '歷史',
  '文學',
  '作業多',
  '教得好',
  '輕鬆',
  '點名',
  '報告',
  '討論',
  '有趣',
  '考試多',
  'CP值高',
  '恨帥潮',
  '數位',
  '設計',
  '數據',
  '資料結構',
  '演算法',
  '網路',
  '作業系統',
  '軟體工程',
  '計算機',
  '數學系',
  '物理系',
  '電機系',
];

const TagSelector = ({
  selectedTags,
  onTagsChange,
}: Props): React.JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [newTag, setNewTag] = useState('');
  const [showNewTagInput, setShowNewTagInput] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const addNewTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !selectedTags.includes(trimmedTag)) {
      onTagsChange([...selectedTags, trimmedTag]);
      setNewTag('');
      setShowNewTagInput(false);
    }
  };

  const filteredTags = COMMON_TAGS.filter(
    tag =>
      tag.toLowerCase().includes(searchText.toLowerCase()) &&
      !selectedTags.includes(tag),
  );

  return (
    <div className="w-full">
      <label className="block text-lg font-medium mb-4 text-white">標籤</label>

      {/* Selected Tags Section */}
      <div className="mb-4">
        <h3 className="text-base font-medium mb-2 text-white">已選 TAG</h3>
        <div className="flex flex-wrap gap-2 min-h-[2.5rem] p-4">
          {selectedTags.length === 0 ? (
            <span className="text-gray-400 self-center">尚未選擇</span>
          ) : (
            selectedTags.map(tag => (
              <button
                key={tag}
                type="button"
                className="flex items-center gap-1 px-3 py-1 bg-slate-600 text-white rounded-full hover:bg-slate-500 transition"
                onClick={() => {
                  toggleTag(tag);
                }}
              >
                {tag}
                <FaTimes className="text-xs" />
              </button>
            ))
          )}
        </div>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="搜尋更多 tags..."
        className="w-full px-4 py-3 mb-4 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 bg-[#1c1c29] bg-opacity-50 text-white placeholder:text-gray-400"
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
        }}
      />

      {/* Add New Tag Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-medium text-white">常用 TAG</h3>
          <button
            type="button"
            onClick={() => {
              setShowNewTagInput(!showNewTagInput);
            }}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-slate-300 hover:bg-slate-400 text-slate-900 rounded-xl transition"
          >
            <FaPlus className="text-xs" />
            新增標籤
          </button>
        </div>

        {/* New Tag Input */}
        {showNewTagInput && (
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="輸入新標籤..."
              className="flex-1 px-3 py-2 text-sm border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 bg-[#1c1c29] bg-opacity-50 text-white placeholder:text-gray-400"
              value={newTag}
              onChange={e => {
                setNewTag(e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addNewTag();
                }
              }}
            />
            <button
              type="button"
              onClick={addNewTag}
              className="px-3 py-2 text-sm bg-slate-300 text-slate-900 hover:bg-slate-400 rounded-xl transition"
            >
              新增
            </button>
            <button
              type="button"
              onClick={() => {
                setShowNewTagInput(false);
                setNewTag('');
              }}
              className="px-3 py-2 text-sm bg-gray-600 hover:bg-gray-500 text-white rounded-xl transition"
            >
              取消
            </button>
          </div>
        )}

        {/* Available Tags */}
        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
          {filteredTags.length > 0 ? (
            filteredTags.map(tag => (
              <button
                key={tag}
                type="button"
                className="px-3 py-1 bg-slate-500 hover:bg-slate-400 text-white rounded-full transition text-sm"
                onClick={() => {
                  toggleTag(tag);
                }}
              >
                {tag}
              </button>
            ))
          ) : (
            <span className="text-gray-400 self-center">
              {searchText ? '找不到符合的標籤' : '所有常用標籤已選擇'}
            </span>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-400">
        選擇相關標籤可以幫助其他同學更容易找到您的評價
      </div>
    </div>
  );
};

export default TagSelector;

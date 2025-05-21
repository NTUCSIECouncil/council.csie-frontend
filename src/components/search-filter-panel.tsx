'use client';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface Props {
  onClose: () => void;
}

const COMMON_TAGS = [
  '通識', '必修', '程式設計', '機率', '資結', '網頁', 'CSX', '資工系', '歷史', '文學',
  '作業多', '教得好', '輕鬆', '點名', '報告', '討論', '有趣', '考試多', 'CP值高', '恨帥潮',
  '數位', '設計', '數據', '資料結構', '演算法', '網路', '作業系統', '軟體工程', '計算機',
  '數學系', '物理系', '電機系',
];

const SearchFilterPanel = ({ onClose }: Props): React.JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { window.removeEventListener('keydown', onKeyDown); };
  }, [onClose]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredTags = COMMON_TAGS.filter(tag =>
    tag.toLowerCase().includes(searchText.toLowerCase())
    && !selectedTags.includes(tag)
  );

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-[600px] max-w-full"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">搜尋篩選 TAG</h2>

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">已選 TAG</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTags.length === 0
              ? (
                  <span className="text-gray-400">尚未選擇</span>
                )
              : (
                  selectedTags.map(tag => (
                    <button
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-slate-600 rounded-full hover:bg-slate-500 transition"
                      onClick={() => { toggleTag(tag); }}
                    >
                      {tag}
                      <FaTimes className="text-xs" />
                    </button>
                  ))
                )}
          </div>
        </div>

        <input
          type="text"
          placeholder="搜尋更多 tags..."
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500"
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value); }}
        />

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">常用 TAG</h3>
          <div className="flex flex-wrap gap-2">
            {filteredTags.length > 0
              ? (
                  filteredTags.map(tag => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-slate-500 rounded-full hover:bg-slate-400 transition"
                      onClick={() => { toggleTag(tag); }}
                    >
                      {tag}
                    </button>
                  ))
                )
              : (
                  <span className="text-gray-400">找不到符合的 TAG</span>
                )}
          </div>
        </div>

        <button
          className="block mx-auto px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition"
          onClick={onClose}
        >
          關閉
        </button>
      </div>
    </div>
  );
};

export default SearchFilterPanel;

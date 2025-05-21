import Image from 'next/image';
import type { TabItem } from '@/utils/constants';

interface DividerBarProps {
  items: TabItem[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const DividerBar = ({
  items,
  selectedTab,
  setSelectedTab,
}: DividerBarProps): React.JSX.Element => {
  return (
    <div className="bg-[#1c1c29] pb-2">
      <div className="flex justify-between mx-auto px-4 text-white text-lg border-b-2 border-[#d4d2d5]">
        {items.map((item) => {
          const value = item.type === 'text' ? item.label : item.alt;
          const isSelected = selectedTab === value;
          return (
            <button
              key={value}
              onClick={() => { setSelectedTab(value); }}
              className={`relative flex-1 text-center pb-1 transition-all ${
                isSelected
                  ? 'text-white after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:w-[75%] after:h-1 after:bg-[#d4d2d5] after:rounded-full'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.type === 'text'
                ? (
                    item.label
                  )
                : (
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={144}
                      height={144}
                      className={`mx-auto transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-50'
                      }`}
                    />
                  )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DividerBar;

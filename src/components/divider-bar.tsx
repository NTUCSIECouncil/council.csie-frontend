const DividerBar = ({
  items,
  selectedTab,
  setSelectedTab,
}: {
  items: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}): React.JSX.Element => {
  return (
    <div className="bg-[#1c1c29] border-b border-[#d4d2d5]">
      <div className="flex justify-between max-w-5xl mx-auto px-4 text-white text-lg">
        {items.map(item => (
          <button
            key={item}
            onClick={() => { setSelectedTab(item); }}
            className={`relative flex-1 text-center py-1 transition-all ${
              selectedTab === item
                ? 'text-white after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:w-28 after:h-1 after:bg-[#d4d2d5] after:rounded-full'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DividerBar;

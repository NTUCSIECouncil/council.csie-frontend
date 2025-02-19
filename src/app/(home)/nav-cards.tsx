import Link from 'next/link';

const pages = [
  {
    name: '德田生活',
    href: '/life',
    description: '德田館是資工社畜的家，每當考試前夕，總是聚集許多捲捲人，通宵在新館把所有人捲爆。',
  },
  {
    name: '課程評價網',
    href: '/rate',
    description: '歷年課程的回饋與評價，可以在選課前參考參考。',
    lastUpdateTime: new Date('August 11, 2024 08:57:00'),
  },
  {
    name: '課程資料庫',
    href: '/database',
    description: '考古題資料庫。',
    lastUpdateTime: new Date('August 11, 2024 08:57:00'),
  },
  {
    name: '教授訪談',
    href: '/interview',
    description: '系上教授訪談。',
    lastUpdateTime: new Date('August 11, 2024 08:57:00'),
  },
];

const NavCards = (): React.JSX.Element => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {pages.map((page) => {
        return (
          <Link
            key={page.name}
            href={page.href}
            className="w-72 h-96 flex flex-col justify-between px-4 py-8 rounded-2xl bg-white/10 shadow-lg backdrop-blur-[15px] hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-4">
              <p className="text-2xl font-bold text-center">{page.name}</p>
              <hr color="white" className="w-[85%] mx-auto border-t" />
              <p className="w-[80%] mx-auto text-center">{page.description}</p>
            </div>
            {page.lastUpdateTime && (
              <div className="pt-4 text-center text-sm opacity-80">
                <p>{`上次更新：${page.lastUpdateTime.toISOString().split('T')[0]}`}</p>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default NavCards;

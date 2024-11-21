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
];

const NavCards = (): React.JSX.Element => {
  return (
    <div className="flex items-start justify-center gap-4">
      {pages.map((page) => {
        return (
          <Link
            key={page.name}
            href={page.href}
            className="
              flex flex-col justify-between
              backdrop-blur-sm rounded-xl w-72 h-96 shadow-xl bg-cyan-500 bg-opacity-10 py-8
              hover:bg-white hover:bg-opacity-10
            "
          >
            <div className="flex flex-col items-center space-y-2">
              <p className="text-xl font-semibold text-center">{page.name}</p>
              <hr color="white" className="w-[85%] mx-auto border-t" />
              <p className="w-[75%] mx-auto">{page.description}</p>
            </div>
            <div className="space-y-2">
              {page.lastUpdateTime !== undefined
              && (
                <p className="text-center">{`上次更新：${page.lastUpdateTime.toISOString().split('T')[0]}`}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavCards;

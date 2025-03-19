import Image from 'next/image';
import Link from 'next/link';
import { FaLightbulb } from 'react-icons/fa';
import LifeCourseContent from '@/components/life-course-content';
import Table from '@/components/life-course-table';
import LifeSubTopic from '@/components/life-sub-topic';
import TLDR from '@/components/life-tldr';
import LifeCourseTopic from '@/components/life-topic';
import buildingImage from '@public/building_original.jpg';

const table = [
  ['項目', '作業', '期中', '期末', '課堂參與'],
  ['占比', '30% ~ 35%', '30% ~ 35%', '30% ~ 35%', '5% ~ 10%'],
];

const Page = (): React.JSX.Element => {
  return (
    <main className="mx-auto w-4/5 md:w-2/3 my-10 self-start">
      <div className="flex flex-col items-start gap-2 py-4">
        <LifeCourseTopic topic="計算機概論（單班）" subtopic="INTRODUCTION TO COMPUTER" lecturer="徐宏民" author="王淇" />
        <LifeSubTopic content="課程內容" />
        <LifeCourseContent content="單班的計算機概論大致上可以分成上下兩半，上半主要集中在布林代數（Boolean Algebra）跟邏輯電路，會涵蓋一些基礎的內容例如數字的儲存、邏輯閘以及邏輯電路的設計，下半學期會涵蓋較多不同的主題，包含 Git、Python、作業系統、計算機結構、網路架構、資料庫的基礎內容。" />
        <LifeSubTopic content="計分方式" />
        <Table table={table} />
        <TLDR content="適合想大概知道電腦內部在幹嘛、願意花一點時間來拿分數的人" />
      </div>
    </main>
  );
};

export default Page;

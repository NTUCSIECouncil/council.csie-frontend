import Link from 'next/link';
import CourseBlock from './course-block';
import Search from '@/components/search';
import Filters from '@/components/filters';

interface articleProps {
  _id: string;
  title: string;
  lecturer: string;
  tags: string[];
  grade: string;
  categories: string[];
  content: string;
}

// Temporary function
async function fakeFetch (url: string): Promise<articleProps[]> {
  const articles = [{
    _id: '0',
    title: '普通物理學',
    lecturer: '胡德邦',
    tags: ['程式', '甜涼'],
    grade: '1',
    categories: ['必修', '大一'],
    content: '胡德邦教授的普通物理學課程备受學生歡迎。他以清晰簡潔的講解風格和豐富的教學經驗，深受學生喜愛。在課堂上，他不僅僅注重理論知識的傳授，更加重視與學生的互動和實踐應用。透過生動的案例和有趣的實驗，他成功地激發了學生對物理學的興趣和好奇心。胡教授注重培養學生的問題解決能力和思維方式，鼓勵他們勇於探索未知領域。他的課程內容涵蓋了廣泛的物理學知識，從基礎理論到前沿技術，為學生提供了全面的學習體驗。不僅如此，胡德邦教授還以其富有啟發性的教學風格和貼近生活的案例，為學生樹立了良好的學習榜樣。總的來說，胡德邦教授的普通物理學課程是一門富有啟發性和挑戰性的課程，對學生的學術和人生發展都具有重要意義。'
  },
  {
    _id: '1',
    title: '計算機程式',
    lecturer: '劉邦鋒',
    tags: ['真強者', '超硬'],
    grade: '1',
    categories: ['必修', '大一'],
    content: '劉邦鋒教授的計算機程式課程是一門嚴苛但深具挑戰性的課程。他以嚴謹的態度和高要求著稱，對學生的學習態度和成果要求嚴格。在課堂上，他經常提出複雜且具有挑戰性的編程任務，要求學生深入理解課程內容並能夠獨立解決問題。他對代碼質量和風格的要求也非常高，鼓勵學生不斷改進和優化自己的編程技能。雖然劉教授的課程給予了學生豐富的知識和實踐經驗，但也常常讓學生感到壓力重重。他的嚴苛態度可能會挑戰學生的自我要求和學習動力，但同時也激勵他們不斷努力提高自己。總的來說，劉邦鋒教授的計算機程式課程雖然嚴苛，但對於學生的專業成長和職業發展具有重要的促進作用。'
  }
  ];
  return await new Promise((resolve, reject) => {
    resolve(articles);
  });
}

const Page = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}): Promise<JSX.Element> => {
  const query = searchParams?.query ?? '';
  // const currentPage = Number(searchParams?.page) ?? 1;

  const SEARCH_API_ENDPOINT = 'backend/api/articles/search';
  const url = `${SEARCH_API_ENDPOINT}?${query}`;
  // fetch API according to $searchParams
  // const res = await fetch(url);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  // setSearchResult(await res.json());
  // console.log(searchResult);
  // fakeFetch(url).then((articles) => {
  const articles = await fakeFetch(url);

  return (
    <div className="flex flex-col gap-4 items-center mt-8">
      <div className="w-3/5">
        <form className="items-center">
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div className="flex items-center gap-2 my-2 mx-10 text-sm">
            <p className="text-base">篩選：</p>
            <Filters />
          </div>
        </form>
      </div>
      <main className="w-3/5">
        <div className="flex flex-col gap-3">
          {articles.map((article) => (
            <Link
              href={`/rate/articles/${article._id}`}
              key={article._id}
            >
              <CourseBlock
                title={article.title}
                lecturer={article.lecturer}
                tags={article.tags}
                content={article.content.length > 280 ? `${article.content.substring(0, 280)} [...]` : article.content}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;

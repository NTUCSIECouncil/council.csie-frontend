'use client';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import Search from '@/components/search';
import { renderFilter } from '@/helpers/filter';
import Background from './background';

interface ParamType {
  grade?: string;
  category?: string;
  keyword?: string;
  tags?: string[];
}

function submitSearch(router: AppRouterInstance, _formData: FormData): void {
  const searchUrl = '/rate/filter-results';
  const params: ParamType = {};

  // Something needs to be implemented at the backend.

  // const chosenTags = [];
  // for (const k in tags) {
  //   if (tags[k].state[0] === true) { chosenTags.push(k); }
  // }
  // if (chosenTags.length > 0) {
  //   params.tags = chosenTags;
  // }

  router.push(searchUrl + '?' + (new URLSearchParams(params as URLSearchParams)).toString());
}

const Page = (): React.JSX.Element => {
  const router = useRouter();

  return (
    <main className="flex flex-1 justify-center items-center">
      <Background />
      <div>
        <p className="text-5xl font-bold my-4 tracking-widest text-center">課程評價網</p>
        <form
          action={submitSearch.bind(null, router)}
          className="w-[500px] flex flex-col items-center"
        >
          <Search className="my-2 w-full" placeholder="輸入關鍵字" />
          <div>
            <div className="flex items-center gap-2 my-2">
              <p className="text-lg">篩選：</p>
              { renderFilter('courseGrade') }
              { renderFilter('courseType') }
            </div>
            {/* <div className="flex items-center gap-2 my-2">
              <p className="text-lg">標籤：</p>
              感覺做成搜尋的比較好，不知道 DCard 怎麼運作的
            </div> */}
          </div>
        </form>
      </div>
      {/* <div className={styles.wrap}>
        <p className={styles.word}>
          TAG：&nbsp;&nbsp;&nbsp;
          {Object.keys(availableTags).map((tag, idx) => (
            <button
              key={idx}
              onClick={(e) => { flipTag((availableTags)[tag].state); }}
              className={'tag' + ((availableTags)[tag].state[0] ? ' tag-on' : '')}
              style={{ cursor: 'pointer' }}
              type="button"
            >
              {(availableTags)[tag].name}
            </button>
          ))}
        </p>
      </div> */}
    </main>
  );
};

export default Page;

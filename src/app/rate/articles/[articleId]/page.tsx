import { Suspense } from 'react';
import Article from './article';

const Page = async (
  props: {
    params: Promise<{
      articleId: string;
    }>;
  },
): Promise<React.JSX.Element> => {
  const params = await props.params;
  // const { request } = UserAuth();

  return (
    <main className="flex flex-col items-center w-3/5">
      <div className="w-full max-w-5xl m-4">
        <Suspense>
          <Article
            articleId={params.articleId}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;

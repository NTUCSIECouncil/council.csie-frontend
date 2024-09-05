import { Suspense } from 'react';
import Article from './article';

const Page = async ({ params }: {
  params: {
    articleId: string;
  };
}): Promise<React.JSX.Element> => {
  // const { request } = UserAuth();

  return (
    <main className="flex flex-col items-center">
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

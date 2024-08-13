import Markdown from 'react-markdown';
import { UserAuth } from '@/context/auth-context';
import Tag from '@/ui/tag';

/*
interface Article {
  title: string;
  lecturer: string;
  tag?: string[];
  semester?: string;
  grade?: number;
  categories?: string[];
  content?: string;
  creator: User;
  createdAt?: Date;
  updatedAt?: Date;
}
*/

const Page = async ({ params }: {
  params: {
    articleId: string;
  };
}): Promise<JSX.Element> => {
  const { request } = UserAuth();

  const response = await request(`/api/articles/${params.articleId}`);
  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      // fetch API according to $articleId
      setIsLoading(true);
      // let article;
      const response = await request(`/api/articles/${params.articleId}`);

      if (!response.ok) {
        // windows alert
        if (response.status === 404) {
          setError('Article not found.');
        } else {
          setError('An error occurred while fetching the article.');
        }
        return;
      }
      const res = await response.json();

      console.log(res.result);
      setArticle(res.result);
      setError(null);
    };

    fetchArticle()
      .catch(error => {
        console.log(error.message); // 'An error has occurred: 404'
        setError('Failed to fetch article due to a network error.');
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log(params.articleId);
  }, [params.articleId, request]);

  // render list of search results provided by $article
  // return JSON.stringify(article, null, 2);
  if (isLoading) {
    return <div style={{ fontSize: '24px', color: 'var(--text)' }}>Loading...</div>;
  }

  if (error !== null && error !== '') {
    return <div style={{ fontSize: '24px', color: 'var(--text)' }}>{error}</div>;
  }

  const grade =
    article.grade === 1
      ? '大一'
      : article.grade === 2
        ? '大二'
        : article.grade === 3
          ? '大三'
          : article.grade === 4
            ? '大四'
            : 'err';

  const titleTags = [grade].concat(article.categories as string[]);

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-5xl m-4">
        <div className="w-full flex justify-between items-end my-2 px-4">
          <p className="font-bold text-5xl">{article.title}</p>
          <p className="font text-2xl">{article.lecturer}</p>
        </div>
        <hr className="w-full border-gray-500 border-t-4" />
        <div className="w-full flex gap-3 justify-end my-2">
          <div className="flex gap-1 items-center">
            {titleTags.map((tag) => (
              <Tag content={tag} key={tag} />
            ))}
          </div>
          <div className="flex gap-1 items-center">
            {article.tag.map((tag) => (
              <Tag content={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Markdown>
            {article.content}
          </Markdown>
        </div>
      </div>
    </main>
  );
};

export default Page;

import { sidebar } from '@/helpers/sidebar';

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto md:w-2/3">
      <h1 className="text-5xl font-bold">會長的話</h1>
      {sidebar('lifeCouncil')}

      <p className="text-2xl mt-6 text-lg font-semibold py-4">系學會會長：鄭允臻</p>
      <div className="whitespace-pre-line text-lg mt-4">
        {`哈囉各位！我是第 47 屆臺大資訊工程系學生會會長鄭允臻！從今以後，系上對你們的稱呼會是「B13」，代表著你們是113年入學的，那我在這裏代表系上所有學長姊們，一起歡迎各位 B13 的到來～

        資訊系的生活充滿挑戰性與多樣性：辦活動、交朋友、談戀愛、秀才藝、做研究、實習、打競賽、加系隊、玩社團，這些讀書以外的事情，讓同在資工系的大家，可以有非常多不同的可能性，這讓大學生活格外的有趣好玩，不知道你們有沒有很期待！

        這裡要小小潑各位一桶冷水。雖然大學生活很多元繽紛，同時卻也令人容易迷惘。大學之前，我們大多追求如何有效率的完成需要完成的事情，上了大學之後，選擇要完成哪些事情卻成了主要的課題。太多的選擇擺在你面前，我們必須選擇取捨。我們是否能夠評估自己的上限並且知道我們想要走什麼樣的路，又或者，我們有沒有勇氣不盲從他人的腳步而被「捲」走，並走出屬於自己的路，這是在大學期間，容易令人迷惘，但又格外重要的必修課。

        因此想要給大家小小的鼓勵：多善用你身邊這群強大的同儕，與他們激盪出思想上、互動上的火花，但是不要只將眼睛聚焦在他人身上，比較自己與他人的落差。定睛自己，把一些時間投資在與自己的對話，趁有本錢的時候，勇敢探索，勇敢失敗，勇敢接受自己的各種不堪，也學習自我肯定，在身心健康的前提下，朝理想的自己邁進！

        餵了太多雞湯了，最後還是再次歡迎 B13 加入資訊系這個大家庭，希望大家能夠順利融入，希望將來回首，這裡能夠盛滿大家美好的回憶！`}
      </div>
    </main>
  );
};

export default Page;

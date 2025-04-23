import React from 'react';
// import { QuestionBlock } from "../tools";
import LifeInterviewAnswer from '@/components/life-interview-answer';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';

const Page = (): React.JSX.Element => {
  return (
    <main className="mx-auto w-4/5 md:w-2/3 my-10 self-start">
      {sidebar('lifeInterview', '鄭卜壬教授')}
      <div className="relative flex flex-col items-start gap-2 py-4">
        <LifeTopic topic="鄭卜壬教授" mailto="pjcheng@csie.ntu.edu.tw" website="http://www.csie.ntu.edu.tw/~pjcheng/" author_interview="黃俊翔、林天行、王政祺" image="/professors/pjcheng.jpg" />

        <LifeSubTopic textSize="text-xl" content="有很多新生在剛升上大學之後會因為身邊有很多強者而感到受挫，教授會建議新生們在心態或學習方式上有甚麼調整？" />
        <LifeInterviewAnswer content="由於大家高中接觸 CS 的經歷都不一樣，有人可能比較早進入這個領域，尤其像是計算機程式設計這門課的題目，有人可能五分鐘就寫完了，有人則要花上一整個下午。但這其實可以想說，那些人只是比較早起步而已，何況其實不止 CS ，每個學科都有人比較早開始學，所以我覺得用一個健康的心態來面對會比較好。雖然真的在執行的時候，受挫感一定會比較深，但就如同我剛剛所說的，可以用健康的心態去找其他同學交流、把這個差距慢慢地縮小。事實上那些真的很天才、可以無師自通的同學真的是少之又少，大部分的同學都是一步一步這樣走來的，擔心是難免的，但也不用因此壓力太大。" />

        <LifeSubTopic textSize="text-xl" content="教授認為新生在打工、休閒、愛情、社團等等課外活動該如何選擇，那些事情一定要把握？" />
        <LifeInterviewAnswer content="個人很鼓勵大家多接觸，因為來這裡不是為了求學，某種程度也是來生活的，其實這中間的任何經歷我都是樂觀其成的，不一定說只是為了錢，這些經歷對踏入社會的另外一個階段是一個很好的養分。" />
        <LifeInterviewAnswer content="選擇的部分我覺得就見仁見智，沒什麼對錯之分，不過我比較擔心的是愛情的部分，系上很多學生會因為在學業上很順遂、就誤以為在其他的領域也會如此，再加上以前在這方面可能沒什麼經驗，就會不太清楚被拒絕時該怎麼調適心態，而我過去看過很多學生都是在這方面受到挫折。" />
        <LifeInterviewAnswer content="學業了不起就是延畢，比較是屬於短期的問題，除非自己不念書，只要願意付出的話一定是有辦法解決的，但感情方面是強求不來的，這一塊是我們過去看到比較會有極端的情形產生，也是我們比較擔心的。" />
        <LifeInterviewAnswer content="那對於這些壓力與挫折，我很鼓勵大家去約系上專業的心理諮商師，他已經輔導了大量的學生，常常行程都是滿的。又或是大家也可以去找導師談談，我覺得大家可以把導師當成朋友，而不只是一位吃飯的對象。大家遇到問題真的不用不好意思，如果大家發現自己的心態跟過去有很大的差異、或是覺得不太認識自己，那其實代表你在經歷很大的轉變，如果這樣的轉變比較負面、或是自己不太喜歡的話，那就建議你去尋求比較專業的協助了。" />

        <LifeSubTopic textSize="text-xl" content="建議學生需要先做些什麼準備才能應付比較困難的課程？" />
        <LifeInterviewAnswer content="我覺得直接去問那位老師就可以了，如果感到困惑大膽的去敲門，我相信老師們都很樂意分享。那除此之外呢，你們還可以多接觸那個方向其他的書籍，不一定要是教科書，舉例來說，有些同學在看程式設計的課本時比較不能接受語法生硬的內容，但有些書籍是從應用著手、比較容易能讓同學進入狀況。那只要稍微有點概念後，就比較能夠吃下老師講課、以及教科書中的內容了。" />

        <LifeSubTopic textSize="text-xl" content="教授會如何建議未來想做專題研究的學生找到研究方向？" />
        <LifeInterviewAnswer content="其實我很鼓勵大家去接觸專題，做專題是一個從找到問題到解決問題的一個訓練，及早接觸、多方面看看，找導師、授課老師、系主任都是很好的管道。" />
        <LifeInterviewAnswer content="我覺得大三再銜接專題是非常 ok 的，但我更鼓勵同學們在大一、大二時就開始接觸，我建議你們可以一間一間實驗室去看，即使你對於那個實驗室的目標、技術都不清不楚，但你只要願意去聽，就會耳濡目染，多去參與、多去聽他們的報告與發表，就更容易找到自己的興趣以及需要的能力。" />
        <LifeInterviewAnswer content="那也不用擔心說做出一些嘗試會跌倒，現在跌倒就只要站起來就好，但未來跌倒會受傷，不要因為長大了，就收起小時候勇於跌跌撞撞的精神。總之就是去多方嘗試，不要害怕失敗、也不用把自己綁死在一個地方。" />

        <LifeSubTopic textSize="text-xl" content="對新生講的話。" />
        <LifeInterviewAnswer content="升上大學後，心態一定要有所調整，大學就像是一個小型社會，任何問題都沒有標準的答案，比起答案會更注重討論。大學之前的制度就只是難度持續的增加，但大學生活就不只這些東西了，不是把事情做好就會得到高分、受到肯定，如果期待的是這種舊式的思維，那會是非常可惜的。話雖如此，大一的同學們也不用太緊張，慢慢地接受這樣的改變就可以了。" />
        <LifeInterviewAnswer content="那除此之外，在訪談中有一再地強調，希望學生不要覺得跟老師有所隔閡，不要害怕去和老師們約時間，你不跟老師們互動，老師就算有心也不知道該如何幫助你，這邊的環境就是你願意付出、追求的越多，能收穫的就會更多，畢竟老師再怎麼樣的主動想要幫助，終究還是比不上學生主動的尋求協助來得有效率。" />

      </div>
    </main>
  );
};

export default Page;

import React from 'react';
// import { QuestionBlock } from "../tools";
import LifeInterviewAnswer from '@/components/life-interview-answer';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';
import building from '@public/building.jpg';

const Page = (): React.JSX.Element => {
  return (
    <main className="mx-auto w-4/5 md:w-2/3 my-10 self-start">
      {sidebar('lifeInterview')}
      <div className="relative flex flex-col items-start gap-2 py-4">
        <LifeTopic topic="周承滿幹事" mailto="cmchou@csie.ntu.edu.tw" website="https://www.facebook.com/man.man.1848" author_interview="王政祺、毛翊蓁、林天行" image="/professors/cmchou.jpg" />

        <LifeSubTopic textSize="text-xl" content="通常新生可能會碰到什麼問題？可以如何面對並克服？" />
        <LifeInterviewAnswer content="這題應該先問劉邦鋒老師 XD 。在寫程式上，可能你練了很久，但是得不到相對應的成果。對於這個問題，我覺得大家應該要不害怕去問同學，開始願意去跟同學發問、願意去問助教，高中那套只看著課本就會的方式是不適用的。大家一開始一定會碰到這個問題，多問就能比較容易上手。" />

        <LifeSubTopic textSize="text-xl" content="該如何平衡讀書以及社交？" />
        <LifeInterviewAnswer content="首先要抱持著課業並不輕鬆的先決條件！不能覺得我上了大學就可以開始過著跟高中不一樣的生活，但是不用為了最後那一兩分而犧牲自己的社交活動。我比較建議大家把課業維持在一個你覺得可以的程度，然後把時間投入在其他活動。如果你覺得有一件事情是你離開校園後就沒有辦法去做的，那就去做！但是如果你在籌備活動或是參與活動的過程中，發現自己已經心力交瘁了，那就適度的去放鬆跟調整。" />

        <LifeSubTopic textSize="text-xl" content="建議大一新生有哪些事情是要盡量把握的？（ex. 計程修好、社交 ……）" />
        <LifeInterviewAnswer content="我想應該是多參加系上活動多交朋友吧！同學是學習過程中很重要的夥伴，學程式與傳統高中學科很不相同，需要大量的練習及實作，埋頭自己學習是很難有效率的，所以計算機程式設計要學好之外，希望大家也要多參加系上活動認識學長姐跟同學，會很有幫助的。" />

        <LifeSubTopic textSize="text-xl" content="如果新生之後想要輔系、雙主修，在大一應該要先做哪些準備？" />
        <LifeInterviewAnswer content="每個同學在入學前，一定都有想在大學做的事，可能是玩社團，可能是打工等等。我也鼓勵大家都嘗試看看，這都是一種良好的人生經驗累積！但當這些活動會開始影響到你的課業，或是身體健康時，就請要記得該取捨了。畢竟每個人都只有 24 小時，如何做好時間管理，在課業與其他事物之間取得平衡，也是大一新生必要的學習喔！" />

        <LifeSubTopic textSize="text-xl" content="如何評斷一門課要不要繼續修下去？" />
        <LifeInterviewAnswer content="這個我非資訊專業無法給予實質建議，但還是要提醒每學期只能停修一門喔 ！（很重要！） 所以是哪一門就要好好去斟酌，當然最好的方式是，學期初就好好評估自己狀況，保留多點彈性，免得期中進退兩難。" />

        <LifeSubTopic textSize="text-xl" content="面對停修或挫折的心態調適？" />
        <LifeInterviewAnswer content="挫折其實也是大學需要學習的重要功課，不要先急著否認自己，你們都相當優秀，請勇於詢問老師、學長姐、身邊同學！或許每個人面對的狀況或困難不盡相同，但從中應該可以找到適合自己的方法，你也會發現其實你不孤單，而這也是很重要的成長養分。" />

        <LifeSubTopic textSize="text-xl" content="想對新生說的話？" />
        <LifeInterviewAnswer content="請記得要固定收 Email，我寄的信不要忽略！不要當垃圾信啦！還有最重要的一點，身心靈健康才是最重要的事，當你覺得喘不過氣時，歡迎隨時來找我聊聊，我都會很願意傾聽的。歡迎大家！期許我能成為你們信任的大姐姐～" />

      </div>
    </main>
  );
};

export default Page;

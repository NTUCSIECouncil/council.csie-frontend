import React from 'react';
// import { QuestionBlock } from "../tools";
import LifeInterviewAnswer from '@/components/life-interview-answer';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';

const Page = (): React.JSX.Element => {
  return (
    <main className="mx-auto w-4/5 md:w-2/3 my-10 self-start">
      {sidebar('lifeInterview', '陳縕儂教授')}
      <div className="relative flex flex-col items-start gap-2 py-4">
        <LifeTopic topic="陳縕儂教授" mailto="yvchen@csie.ntu.edu.tw" website="https://www.csie.ntu.edu.tw/~yvchen/" author_interview="王政祺、毛翊蓁、林天行" image="/professors/yvchen.jpg" />

        <LifeSubTopic textSize="text-xl" content="資訊系的學生除了資訊能力以外還需要具備什麼軟實力？" />
        <LifeInterviewAnswer content="有一個最重要的是 presentation 的能力，除了口語表達以外，還牽涉到你要怎麼去組織報告的架構。如果沒有特別訓練過的話通常會比較偏向流水帳的方式，聽的人會覺得有點無聊。比較好的組織可能是去想像一個報告會有很多段落，段落之間彼此是平行的，將大 picture 先讓讀者知道，比較是結構式的，流水帳是自己很清楚，但聽的人不一定會有什麼感覺，要比較好記的話就是要給大架構，細節不記得比較沒關係。" />
        <LifeInterviewAnswer content="這件事情不是很容易，因為台灣學生從小到大比較沒有機會接觸，出國之後看到很多台灣學生跟國外學生的差異是包裝。國外可能可以包裝得非常 fancy，但台灣學生可能就只會平鋪直敘地講出來，但這卻是 presentaion 非常重要的技巧，可以透過一些 project 的 presentation 來練習等等。" />

        <LifeSubTopic textSize="text-xl" content="社交能力會是大學生需要具備的能力之一嗎？" />
        <LifeInterviewAnswer content="我覺得是需要具備的。這其實要看工作性質，但因為大學就是希望能透過基礎能力的養成，來培養未來工作會需要的技能。而未來工作大部分會需要 cowork，要怎麼跟別人好好的討論、分配工作，其實很重要也蠻困難的。大家會發現如果兩三個人一起合作，常常會出現分配不均然後引起紛爭的問題，能夠趁大學的時候遇到這種狀況，然後思考如何排解是一件很重要的事情，而且在學校學習這件事的成本比工作低。" />

        <LifeSubTopic textSize="text-xl" content="想請問教授對新生的時間分配有什麼建議？" />
        <LifeInterviewAnswer content="可以照自己的規劃！每個人對於每個部分所給的 priority 不一樣，例如有人想要出國唸書，那成績對他的 priority 就比較重要，那有些人可能覺得大學的時候找到可以交往的對象非常重要，每一個人本來就會有不同的標準，我覺得重要的是在一個特定的 priority 下，要怎麼適當的分配時間。" />

        <LifeSubTopic textSize="text-xl" content="教授建議學生可以如何在大一大二時找到未來專題研究的方向？可以如何準備呢？" />
        <LifeInterviewAnswer content="系上開了前瞻資訊科技課程，這門課有一點像是讓大家用比較輕鬆的方式去了解每個教授的研究主題，一個學期可能會有六個老師，會帶大家了解各自的研究的方向，修了以後可能會得到一點感覺，也許不一定會發現自己最喜歡的領域，但至少可以找到自己不喜歡的。因為現在蠻多同學都提早修專題研究課程，所以算蠻適合同學的第一步。" />

        <LifeSubTopic textSize="text-xl" content="請問教授對於大學畢業就去工作的看法？" />
        <LifeInterviewAnswer content="可以評估每一個人對自己未來的規劃，大部分我看到的 case 可能是做專題的時候覺得沒有那麼有興趣，也剛好拿到還不錯的 offer，或是公司給大學畢業生和碩士畢業生的 offer 大同小異。也有一些人可能是去公司工作後才比較清楚想要什麼，才又回來再念，或是在業界做得還蠻順利的。先去工作如果對於當下而言較好的話也很鼓勵。研究所可能很多人會覺得沒有興趣，那為什麼要唸研究所呢？研究所除了寫論文以外，還有很多不是做研究也很適用的。就像我前面說的 presentation 的能力，還有一塊是要怎麼尋找問題以及去看一些相關的論文，這些能力都是比較需要自己主動去規劃跟探索的，相較之下在大學這部分就會比較少一些。有可能大家剛去的時候不覺得自己有差，但後來就發現有研究所畢業的人那方面的能力比自己強。不能只看做這個研究或論文本身，因為軟實力其實才是更受用的，用到任何一個公司跟領域都是受用的。" />

        <LifeSubTopic textSize="text-xl" content="想請教授對新生說幾句話。" />
        <LifeInterviewAnswer content="不要害怕！如果 programming 的第一堂課的成績沒有非常好的話也不要太在意，因為很多人也是第一次修都沒有修過，但後來把它好好修好後之後也是能夠很順利的！因為那門課其實是整個系上當人的比例最高的課，可以不用太悲觀或是嚇到啦～" />

      </div>
    </main>
  );
};

export default Page;

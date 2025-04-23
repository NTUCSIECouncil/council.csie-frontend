import React from 'react';
// import { QuestionBlock } from "../tools";
import LifeInterviewAnswer from '@/components/life-interview-answer';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeInterview', '林忠緯教授')}
      <div className="relative flex flex-col items-start gap-2 py-4 ml-8 md:max-w-4xl">
        <LifeTopic topic="林忠緯教授" mailto="cwlin@csie.ntu.edu.tw" website="https://www.csie.ntu.edu.tw/~cwlin/" author_interview="林天行、王政祺、毛翊蓁" image="/professors/cwlin.jpg" />

        <LifeSubTopic textSize="text-xl" content="教授認為資訊系的學生要如何才能發展出不同於其他領域的專業？" />
        <LifeInterviewAnswer content="大家心目中的程式可能是 input 吃進來得到正確的 output ，但是什麼方法是最有效率的，或者什麼方法會有什麼特性，我覺得這是資工系學生需要理解的。我相信我們系的程式設計課程是全校最難的，後續的資料結構、演算法等課程也會讓大家更加深入理解程式背後的思路。另外系統程式、作業系統（大二上必修跟大二下必修）讓大家理解程式在系統上到底怎麼運作，這也是我們系很專業的課程。" />

        <LifeSubTopic textSize="text-xl" content="教授認為資訊系的學生除了資訊能力外，還需要具備哪些軟實力？" />
        <LifeInterviewAnswer content="我覺得是看大家興趣在哪裡。相信大家也都知道，未來趨勢對我們系的學生當然是大好，路很寬廣，各個領域都很有發展機會。軟實力的話當然可以講說團隊合作、跟別人合作、跟別人溝通、作為一個好人但又不是濫好人，我覺得都很重要，畢竟將來大家都要出社會。" />

        <LifeSubTopic textSize="text-xl" content="那想請問教授建議學生可以如何在大學生活中找到自己有興趣的領域以及培養專業能力？" />
        <LifeInterviewAnswer content="我覺得還是以學習為主，學習也就是從修課先開始，然後高年級以後專題可以多試幾個沒關係。我知道現在也有很多同學暑假去做實習，我覺得也很好，就是去看工作會長什麼樣。有些同學可能也有自己的興趣，像是社團等等，有人對運動很有興趣，那說不定以後就可以將資訊工程的技術應用在運動，或是有人對車子很有興趣，那就可以應用在車子上。" />

        <LifeSubTopic textSize="text-xl" content="高中跟大學的學習環境有什麼差異？可以如何調整自己？" />
        <LifeInterviewAnswer content="大學就是很自由，不管是學習還是其他事情，很多事情可以有不同的價值，大家各自做各自的選擇。有些同學想修很多課，這樣很好；有些同學只想修最低學分，這樣也很好，反正就是自己想清楚、自己做決定。學習的話，我覺得大學是沒有範圍的，雖然老實講大家將來多多少少還是會重視成績，因為要申請學校或者推甄等等還是會看成績，但是考試或作業或報告可能不像高中怎麼樣就一分、怎麼樣就兩分，或者考試可能很難，方向跟想像的完全不一樣。我覺得大家就還是著重在自己的學習，分數當然要爭取，但也不要過度在意。" />

        <LifeSubTopic textSize="text-xl" content="新生該如何規劃自己的大一生活？" />
        <LifeInterviewAnswer content="請好好享受大學生活。大部分同學會遇到一些挫折跟失敗，但是好多年以後回來看，這四年應該還是人生中最快樂的幾年，就好好享受吧！自己選擇，然後對自己負責。" />
        <LifeInterviewAnswer content="不免還是要說學習是蠻重的一塊，但是如果把大學生活都只放在學習的話也是有點可惜，就是自己要學會時間規劃，不要做超多事然後什麼事都做不好，要有所取捨。" />

        <LifeSubTopic textSize="text-xl" content="很多新生進入資訊系時，從未深入接觸過電腦科學領域，因而產生許多不適應，教授有什麼樣的建議嗎？" />
        <LifeInterviewAnswer content="就跟打籃球一樣，每天看 NBA 你還是不會打籃球，就像學寫程式只看不練，就學不會。我自己寫程式的經驗就是要多花時間練習，然後程式到最後是實作你心裡的邏輯，在嘗試、練習的過程中也可以訓練自己的邏輯。" />

        <LifeSubTopic textSize="text-xl" content="想請問教授建議學生可以如何在大學生活裡面找到研究方向？" />
        <LifeInterviewAnswer content="我覺得大一大二有點早，畢竟很多基礎課程沒修過。我覺得大部分同學大三再開始考慮研究就可以了，除非真的很早就立定志向往某領域發展或決定要唸博士。系上教授開的選修大部分都是跟自己研究有關的主題，大家可能一開始不知道要跟哪個老師，那就去修他的課看看。舉例來說，我有一門課是智慧型汽車導論，就跟我的研究比較有關，我也會建議很多想要加入我的實驗室的同學先去修。另外就是大學部的前瞻資訊科技課程，每個老師上兩週也是一個很初步的理解各老師的主題。" />

        <LifeSubTopic textSize="text-xl" content="想請問教授是從什麼時候要往研究的路上走的？又是什麼時候決定要回台大任教？" />
        <LifeInterviewAnswer content="我大學的時候是覺得將來可能要讀博士，但是碩士班的時候才決定要出國讀博士。我自己覺得大學專題通常還是比較粗淺的體驗，因為同時還要兼顧其他事情，涉入就不會太深。通常碩士班的時候才會對研究有更深入的了解。會回台灣因為家人都在台灣，所以想要回來。剛才講到唸博士這件事情，要提醒一下，其實大學畢業就可以申請進入博士班。國外博士班，普遍是教授幫你出學費跟給你生活費，所以不太需要擔心財力，但是既然教授要養學生，一定也是非常競爭。" />

        <LifeSubTopic textSize="text-xl" content="因為教授大學讀資工系，然後研究所轉往電機領域的方向，想請問教授後來回來為什麼是在資工系任教而不是繼續在電機的領域？" />
        <LifeInterviewAnswer content="我碩士班唸的是 EDA（電子設計自動化），我去唸博士班的時候博士班的老闆也是做 EDA 的超級大咖，但是當時他正在往大系統發展，他就給了車內通訊、如何保護資訊安全的題目給我，做得就比較偏向資工了。我覺得電機跟資工其實沒有差那麼遠，雖然課程會讓大家專長有所不同，但是將來要再跨我覺得也不是問題。" />

        <LifeSubTopic textSize="text-xl" content="教授對於畢業之後直接去工作的看法？" />
        <LifeInterviewAnswer content="這個問題有兩個面向。第一面向，如果沒有要做研究到底要不要念研究所，我自己是覺得不用，大學畢業就可以去職場了。第二面向，學歷還是有點通貨膨脹，很多公司直接說要具備碩士學位，這個雖然我自己不是這麼認同，但是如果你真的想要去那些公司然後他們又有要求要有碩士學位，那就是用碩士班兩年好好充實自己。站在整個社會或是國家發展的立場，我們當然希望台灣的博士要再多一些，像我們系上多少還是面臨師生比偏低的問題，就是老師相對偏少。" />
        <LifeInterviewAnswer content="國家發展相對會需要很多資訊領域的人才，但如果老師不夠的話，訓練學生當然也是一個問題。當然很多人唸博士會出國唸，然後留在國外，但是也自然會有人回台灣。但是回到一開始，雖然整體來說希望更多人讀博士，但我覺得這還是自己的事情，我還是相信每個人自己做自己的選擇，每個人自己的選擇決定未來要怎麼做。" />

        <LifeSubTopic textSize="text-xl" content="最後請教授對新生說幾句話。" />
        <LifeInterviewAnswer content="恭喜大家進入我們系上！這應該是一個環境很好，而且未來發展非常有潛力的地方。大學是一個很自由的地方，所以應該可以過得很快樂。未來幾年大家應該以學習為主，但還是有很多多采多姿的生活可以體驗。例如社團、系隊、談戀愛等，想要過什麼生活都好，要自己去選擇，然後不管是成果、後果都是要自己負責。過程中一定有很好或很不好的事情發生，但這都是一個過程，大家就是盡可能去享受。" />
      </div>
    </main>
  );
};

export default Page;

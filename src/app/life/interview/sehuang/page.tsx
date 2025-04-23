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
        <LifeTopic topic="黃上恩教授" mailto="sehuang@csie.ntu.edu.tw" website="https://tmt514.github.io" author_interview="劉蕃熙" image="/professors/sehuang.jpg" />

        <LifeSubTopic textSize="text-xl" content="教授對於新生該如何安排課表有什麼建議，對於大一先修高年級必修有什麼看法？" />
        <LifeInterviewAnswer content="系上有規劃各年級課程，有某種程度的連貫性，會以台灣高中生的程度評估。不過，推薦對自己能力有掌握，且了解高年級課程，有把握的同學可以試試看。但是這樣的「越級打怪」也會有風險，如果在期中時發現自己的腦力與體力負荷不來，導致需要停修或是成績不符合理想，或是無法平衡生活，可能會讓自己的自信心下降，造成惡性循環。因此，同學們應該要在選課時就仔細評估自己是否能負荷，並且先想過發生無法負荷等情況該如何應對，這樣的話會比較合適。" />

        <LifeSubTopic textSize="text-xl" content="很多新生進入系上後發現周圍有許多「強者」（高中有比程式競賽的人），想請問教授認為沒有程式背景的同學應該如何與所謂的「強者」學習與互動，才能達到雙贏的局面? 另外，無基礎的學生在面對程度遠超前他們的強者時，該如何調適心態？" />
        <LifeInterviewAnswer content="強者有很多種，有些人是從高中知道自己對資訊有興趣，就可以提早準備，這是一條大家比較看的到的路，但其實有更多的是其他領域的強者。" />
        <LifeInterviewAnswer content="沒有基礎的同學看到厲害的人可能會沒有信心，但那些所謂的「強者」在剛開始學的時候，一定也有經歷過這些挫敗。看到有些人比較得心應手時，可以問他們是怎麼想到的，同學通常都會願意回答。" />
        <LifeInterviewAnswer content="另外，在不同的知識背景下，你們對問題的見解與表達方式可能會有差別，當討論到有情緒的時候，請意識到帶有情緒的討論往往會加深誤會，試著以理性討論才能有有效的溝通。" />

        <LifeSubTopic textSize="text-xl" content="針對畢業後應該出國唸書、繼續在國內升學，或是先工作幾年再繼續升學，教授有什麼建議呢？另外，教授認為讀研究所對工作上的幫助有什麼？" />
        <LifeInterviewAnswer content="每個時代都不太一樣，這幾年有些風氣是大學畢業就進入業界工作，這樣很好，可以提早接觸實戰經驗。相對來說，研究室訓練自己做一個比較嶄新，沒有探索過的東西，是對於人類知識前緣的突破。有些非常要求技術、大規模的工作可能會要求具備研究所的能力，這部分也是讀研究所的好處。" />
        <LifeInterviewAnswer content="而對於要不要出國的部分，這是很個人的，會與你在大學四年時進行的人生規劃有關，可以多參考同學、學長姐、老師的想法。" />
        <LifeInterviewAnswer content="先工作幾年再繼續升學，有好有壞。好處是先了解業界是什麼樣子，在遇到無法在業界中討論的問題時，或發現自己有缺了某塊經驗，非常適合再去念研究所，更了解自己要什麼。壞處是就沒辦法賺錢（笑），也沒有一定要怎樣，橋到船頭自然直。" />

        <LifeSubTopic textSize="text-xl" content="教授認為同學應該要如何發現自己感興趣的領域，對於尋找專題研究的方向應該如何努力呢？" />
        <LifeInterviewAnswer content="若你知道自己對某個領域有興趣，你會在不知不覺當中 follow 這個領域正發生什麼事，默默地越學越深，之後找專題時就可以找對應的老師。" />
        <LifeInterviewAnswer content="但我覺得，如果你們進的實驗室與自身興趣不符也不用擔心。很多時候，一個研究做到一個地方，會需要其他領域的 insight 才能解決問題，或發現沒想過的問題，資訊領域很多概念是互通的，若是把這個經驗當作衡量以前的課有沒有學好的指標，也是一種很好的動力。" />
        <LifeInterviewAnswer content="對於如何尋找有興趣的領域，我認為可以去觀察各大資訊領域期刊與會議、美國電腦協會(ACM)裡有哪些領域的分類，或是瀏覽各教授之研究主題及開設的課程，找到感興趣的課名時，去看看課程內容、在生活上的應用，思考是不是自己喜歡的，這些都是發掘興趣的方法。當然，你也很有可能在工作後發現自己更有興趣的領域，那時再換跑道也沒關係。" />

        <LifeSubTopic textSize="text-xl" content="教授認為該如何規劃自己的大學生活，像是課業、打工、社團、愛情等應該如何分配與管理時間？" />
        <LifeInterviewAnswer content="每個人有不同想法。以我自己的經驗，我們做理論的，從想要想清楚一個問題，到想清楚，可能花很多時間，而壓縮其他時間。管理時間是重要的，我認為大致的框架是需要「意識到」你有事情需要完成，有大概的時間觀念在，並要確保你有一直進行思考，想做的事情可以在大難臨頭前解決，最基本的底線是不要造成周圍其他人困擾。在這個框架外是很彈性的，也要注意到（生活上的）其他部分會花到時間。" />

        <LifeSubTopic textSize="text-xl" content="對於資訊系的學生，教授認為那些是我們必須有的能力？" />
        <LifeInterviewAnswer content="我認為最重要的是願意動手嘗試、解決問題的能力：別人說的話不一定正確，因此動手實際驗證，或去測試有沒有更好的方法，這樣把心中所想的東西實作出來的能力是很重要的。" />
        <LifeInterviewAnswer content="同樣重要的是技術底子：經過四年的資訊系教育，你們不只要懂技術，還要了解後面的原理，如此遇到問題時才能知道如何解決。有深厚的技術底子也會讓你比較有自信，這樣做什麼事都會比較順暢。" />
        <LifeInterviewAnswer content="最後是表達能力與合作能力：資訊系大部分的必修科目比較偏向在培養個人實力，但若要走到業界，絕大多數都是團體戰。要把你自己了解，但別人不會的東西傳達出來，才能領導大家一起往前衝；或者我們也常需要向別人推銷自己的想法、說服別人這個想法是好的，這時表達能力就格外重要。" />

        <LifeSubTopic textSize="text-xl" content="想請問教授是如何決定要往學術界發展呢？是透過大學時參加的實習、研究嗎？教授當初有想過先去做幾年高薪的工作累積資本，再去學界嗎？" />
        <LifeInterviewAnswer content="我大學時實習風氣不太盛行，比較幸運是我拿到 ICPC 獎牌，因此得以在大二暑假實習。後來到大三大四做了專題，老師給了我一篇論文慢慢看，但我沒有什麼想法，那時意識到自己智力不夠，發現一些未來在研究中可能會遇到的困難。" />
        <LifeInterviewAnswer content="在碩一升碩二的實習時，我過得非常開心，也因此拿到 offer 時很掙扎。但後來研究討論出突破點，老師說有機會申請博班，在這個時候我才放棄了offer。後來在博班也申請多次實習，有很多收穫。但相對理論研究就做不出來，導致壓力很大，再次陷入掙扎。" />
        <LifeInterviewAnswer content="決定不去（業界的）關鍵，一部份是因為公費留學規定我需要回國一段時間，另一方面是在美國走理論方面的學術研究免不了要教書，那不如回台大教。另一方面，我覺得我在碩博班學到的東西，更適合用在大學基礎課程中，那回來教書不失為一個好選擇。會建議同學，當你看到真的有一個想要看到他被解決、你真的很好奇的問題，那就是可以往學界發展的指標！" />

        <LifeSubTopic textSize="text-xl" content="最後請教授對新生說幾句話。" />
        <LifeInterviewAnswer content="大學這四年應該會是最能影響你以後待人處事方法的人生階段。除了學習知識發展出你的專業以外，請不要放棄思考，找出你人生的目標。這件事情可能很累或很花時間，但是大學這四年的時間是相對充裕的。請不要害怕去尋求協助。相對地，在行有餘力之時，請想看看有沒有自己能幫得上身邊的同學們，並且回饋給幫助你的人的地方。在學習某些課程的時候，可能會下意識地不想寫某些作業，這可能代表你對這個領域在潛意識裡面比較沒有興趣，也可能只是感興趣的時間點還沒到。認知到了這點以後，可能就會比較釋懷了，也能夠比較理性思考自己接下來想怎麼做。最後，祝大家能夠享受大學的時光，活出屬於自己精彩的四年。" />

      </div>
    </main>
  );
};

export default Page;

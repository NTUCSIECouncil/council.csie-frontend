import LifeEvent from '@/components/life-activities-event';
import LifeSubTopic from '@/components/life-sub-topic';
import LifeTopic from '@/components/life-topic';
import { sidebar } from '@/helpers/sidebar';

const Page = (): React.JSX.Element => {
  return (
    <main className="m-auto flex flex-row w-[80%] mt-12">
      {sidebar('lifeCouncil', '系上活動')}
      <div className="ml-8 md:max-w-4xl">
        <LifeTopic topic="系上活動" />
        <LifeEvent
          title="各區小迎新"
          description="小迎新是系學會為大一新生舉辦的第一個活動，分別在北中南三區。目的是為了讓學弟妹們都能在開學前，稍微了解一下台大的環境，與系上的活動、課業等。學長姊通常會在這時候，分享自身的大學生活以及介紹選課的方式。學弟妹們也可以趁早認識自己的同屆同學，找到自己之後共同奮戰的好夥伴（大腿）。"
          image="/activities/welcome.png"
        />
        <LifeEvent
          title="迎新宿營"
          description="今年的宿營會預計在8月底與護理系及日文系一起舉辦。宿營的目的，主要是為了讓大一的學弟妹能夠更加認識彼此與學長姐，以及認識一些外系的朋友。活動內容通常會包含：大地遊戲、RPG、晚會等等，每年的內容都會做微調，但都能夠讓大家玩得十分盡興！"
          image="/activities/orient.png"
        />
        <LifeEvent
          title="前瞻工作坊"
          description="前瞻工作坊是一個為大一新生介紹資訊系各種「教授覺得你會但高中老師根本沒教」的工具與技術的活動。除了會介紹基礎電腦指令和工作站的使用之外，還會介紹像是git 跟python 的使用，幫助大家更順利的與系上課程接軌。工作坊的時間將會安排在上學期，並且以每次介紹一個主題的方式進行。"
          image="/activities/workshop.png"
        />
        <LifeEvent
          title="愛現大會"
          description="愛現大會是屬於大一新生的活動，若充滿著表演慾，那這絕對是一個在系上同學前好好表現的機會，也能夠讓大家迅速的就記住你！平常可能不會發現，但可能身旁的同學們可能都身懷絕技，不論是專業的才藝還是搞笑的表演，這個舞台都能夠讓大家盡情發揮，也讓自己平常不為人知的一面可以盡情展露。"
          image="/activities/showoff.png"
        />
        <LifeEvent
          title="系烤"
          description="系烤通常會與迎新宿營的外系夥伴一起舉辦。除了一起烤肉、喝酒、聊天以外，系烤也會舉辦一些特別的活動跟小遊戲來讓大家更加投入。跟幾個要好的朋友一起報名，放下自己平常的重擔，與身旁的同學們一起烤肉喝酒，增進彼此的感情吧！"
          image="/activities/bbq.png"
        />
        <LifeEvent
          title="電資野台"
          description="電資野台通常會在上學期舉辦，若對組團有興趣，那電資野台絕對是登台的首選。電資野台的獨特氣氛，讓此活動成為一個能夠與三五好友一同喝酒、聽音樂的好時機，有拿不完的啤酒還有聽不完的音樂，絕對是個與系上朋友一同享受晚上的好選擇。"
          image="/activities/yatai.png"
        />
        <LifeEvent
          title="資訊週"
          description="資訊週的舉辦時間，通常會在上學期期中考後的某一個禮拜。主要由大一大二負責，會在小福前面擺攤賣一些食物、飲料，並且還會有一些表演。可以趁這個時候邀請外系的朋友們來支持資訊週，拍拍照、打打卡，是一個與系上同學共事並更加認識彼此的好時機。"
          image="/activities/week.png"
        />
        <LifeEvent
          title="新生盃 ICPC"
          description="新生盃 ICPC 是由學術部為大一新生舉辦的程式競賽。若對P教授的計程考驗覺得意猶未盡，那新生盃 ICPC 絕對是一個挑戰自己，與另外兩位隊友一起比賽的好機會。每解出一題就會得到一顆氣球，到最後教室會充滿各種顏色的氣球，甚至還有提供點心給大家吃（白吃白喝），是相當歡樂的比賽，甚至實力太強的隊伍會獲得一些小彩蛋！？"
          image="/activities/ICPC.png"
        />
        <LifeEvent
          title="系卡"
          description="若錯過了上學期的愛現大會，那麼下學期的系卡一定不能錯過！系卡提供給系上同學想要上台表現的好時機，不管是想要認真的展現自己的歌喉，還是想要單純享受舞台並帶來歡樂，系卡都能夠滿足這些需求，是一個專屬於系上讓大家在台上發光發熱的機會。"
          image="/activities/karaoke.png"
        />
        <LifeEvent
          title="杜鵑花節"
          description="杜鵑花節會在下學期舉行，是台大每年在杜鵑花季所舉辦的活動。每個系都會有專屬的攤位，讓前來的高中生能夠更加了解資訊系，並且也能多多宣傳系上的活動如資訊營等，是向高中生宣傳系所的一個重要管道。"
          image="/activities/azalea.png"
        />
        <LifeEvent
          title="資電嘉年華"
          description="資資電嘉年華是電資學院一年一度的活動，由資訊系與電機系輪流主辦，會有許多種類的比賽項目，如動態的籃球、排球、桌球等，到靜態的麻將、電競等，有十分多樣的競技種類。不管擅不擅長、有沒有比賽經驗，都歡迎參加，一起享受資電嘉年華共襄盛舉的感覺。"
          image="/activities/carvinal.png"
        />
        <LifeEvent
          title="資訊之夜"
          description="資訊之夜是資工系一年一度的大盛會，不論年級，都能夠參加資訊之夜，並一起準備許多種類的表演。雖然需要投入時間來練習表演，但也可能是自己少數能夠接觸到像是轉螢光棒等表演的特殊機會，與同學一起練習的時光，也總是能產生出許多歡笑。是一個凝聚同學情感，讓自己勇於初嘗試的好機會。"
          image="/activities/night.png"
        />
        <LifeEvent
          title="資訊營"
          description="資訊營會在暑假期間舉辦，是一個為高中生舉辦的六天五夜活動，可以讓高中生對於資工系有一定的初步了解，除了會上一些與資工系相關的課程，請教授和學長分享經驗，也會有一些類似宿營會有的活動，如 RPG、大地遊戲、晚會等等，是一個能夠讓高中生了解資訊方面的知識，與多加宣傳系上的好機會。非常歡迎大家來參加！"
          image="/activities/camp.png"
        />
        <LifeEvent
          title="耶誕舞會"
          description="在忙碌的期中週過後，快來安排一場美麗的耶誕邂逅吧！在這裡，你可以在五彩的霓虹燈下，配上些許酒精，一起認識來自各系的夥伴。也可以單純的享受隨音樂起舞的樂趣，觀賞各種絕妙演出。身懷絕技的你，更可以與不知名的對手來一場街舞 battle。在這個夜晚，盡情享受這獨特的氛圍吧！"
          image="/activities/prom.png"
        />
        <LifeEvent
          title="資馬開門"
          description="資馬開門是資訊系全新舉辦的馬利歐賽車賽事，共分為競賽組與休閒組。在繁重的課業壓力下，不妨停下腳步，拿起手把，與同學們在競技中增進彼此交流，挑戰極限速度與豐富獎品！"
          image="/activities/kart.png"
        />
        <LifeEvent
          title="烤雞蛋糕大賽"
          description="烤雞蛋糕大賽就如同字面上，是一個讓大家吃烤雞和蛋糕和烤雞蛋糕的活動。烤雞蛋糕大賽會分成競賽組與休閒組，可以看自己是想要挑戰狼吞虎嚥的極限，參加競賽組挑戰神秘獎品，或是只想輕鬆觀賽喝飲料吃烤雞蛋糕的休閒組。一起來吃烤雞蛋糕喝飲料，享受烤雞蛋糕大賽的氣氛吧！"
          image="/activities/chicken.png"
        />
      </div>
    </main>
  );
};

export default Page;

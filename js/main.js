// FOOD スワイパー
const swiper = new Swiper("#js-food-swiper", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 10,

  speed: 800,
});

// time table popup
const data = {
  yaris: {
    title: "GR YARIS 100台展示",
    time: "10:00〜17:00",
    desc: "全国から集結したGRヤリス100台を一挙展示。ここでしか見られないカスタム車両や個性豊かな一台一台を間近で楽しめます",
    target: "全員",
  },
  talk: {
    title: "トークショー",
    time: "11:00〜12:00",
    desc: "開発者や関係者が登壇し、GRヤリス誕生の裏側やこだわりを語る特別セッション。ここでしか聞けない貴重な話も満載",
    target: "大人向け",
  },
  ride: {
    title: "GR YARIS 乗車体験",
    time: "14:00〜17:00",
    desc: "GRヤリスの走行性能と加速を実際に体感できる貴重なチャンス。スポーツカーならではの走りを全身で感じてみよう",
    target: "大人向け",
  },
  pit: {
    title: "ピット体験",
    time: "13:00〜17:00",
    desc: "プロの整備士になりきって、タイヤ交換や点検作業にチャレンジできる体験型コンテンツ",
    target: "5歳以上",
  },
  kids: {
    title: "E-SPORTS / 木育体験",
    time: "10:00〜12:00",
    desc: "リアルさながらのドライビングシミュレーターで、レースの臨場感とスピードを体感しよう<br />木のぬくもりに触れながら、ものづくりの楽しさを学べるワークショップ",
    target: "E-SPORTS:10歳以上<br />木育体験:3歳以上",
  },
  dance: {
    title: "ダンススクール",
    time: "17:00〜18:00",
    desc: "プロのインストラクターと一緒に、リズムに乗って体を動かす楽しいダンス体験",
    target: "子ども向け / 先着100名",
  },
  bingo: {
    title: "BINGO大会",
    time: "18:00〜19:00",
    desc: "豪華景品が当たるチャンス！家族みんなで楽しめるドキドキのビンゴ大会",
    target: "全員",
  },
  festival: {
    title: "HIPHOP盆踊り/打ち上げ花火",
    time: "19:00〜20:30 / 20:00~打ち上げ花火",
    desc: "伝統の盆踊りにHIPHOPのリズムを融合させた、新感覚のダンスイベント。夜空を彩る迫力満点の花火で、イベントのフィナーレを盛大に締めくくります",
    target: "全員",
  },
};

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    const id = item.dataset.id;
    const info = data[id];
    if (!info) return;

    const popup = item.querySelector(".popup");

    // すでに開いてたら閉じる（トグル）
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
      return;
    }

    // 他のpopup閉じる
    document.querySelectorAll(".popup").forEach((p) => {
      p.classList.remove("active");
    });

    // 中身セット
    popup.innerHTML = `
      <strong>${info.title}</strong><br>
      ${info.time}<br>
      ${info.desc}<br>
      対象：${info.target}
    `;

    popup.classList.add("active");
  });
});

// 外クリックで閉じる
document.addEventListener("click", () => {
  document.querySelectorAll(".popup").forEach((p) => {
    p.classList.remove("active");
  });
});

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

const triangleModalData = {
  "wood-work": {
    subtitle: "遊びながら出来た! が増えていく。小さな成功が次の挑戦に繋がる",
    description:
      "木のぬくもりにふれながら、手を動かして完成させる体験型ワークショップ。<br>小さな達成感を積み重ねながら、ものづくりの楽しさに自然と入り込めます。",
    body: `
      <p><span>場所 :</span> Kidsブース</p>
      <p><span>開催時間 :</span> 10時〜11時</p>
      <p><span>対象年齢 :</span> 3歳以上</p>
    `,
  },
  "kids-dance": {
    subtitle: "初心者大歓迎! 踊る楽しさに触れてみよう!",
    description:
      "音に合わせて身体を動かしながら、リズム感と表現する楽しさを<br>その場で感じられる体験型イベント。プロダンサーによる指導有。<br>初心者でも安心してお気軽にご参加頂けます。",
    body: `
      <p class="mask-modal__meta-row">
        <span class="mask-modal__meta-item"><span>会場 :</span> ステージ中央エリア</span>
        <span class="mask-modal__meta-item"><span>開催時間 :</span> 17時〜</span>
      </p>
      <p class="mask-modal__meta-row">
        <span class="mask-modal__meta-item"><span>内容 :</span> Kids hip-hop入門</span>
        <span class="mask-modal__meta-item"><span>対象 :</span> 10名限定</span>
      </p>
    `,
  },
  "pit-crew": {
    subtitle: "君も\"支える側\"から主役になる。今日、君もPitCrewに。",
    description:
      "ピットクルーになりきって、レース現場のスピード感と連携の面白さを体験できる<br>体験型プログラム。動きがある体験なので<br>参加実感と写真映えの両方を取りやすい構成です。",
    body: `
      <p class="mask-modal__meta-row">
        <span class="mask-modal__meta-item"><span>場所 :</span> pitエリア</span>
        <span class="mask-modal__meta-item"><span>開催時間 :</span> 13時〜17時</span>
      </p>
      <p class="mask-modal__meta-row">
        <span class="mask-modal__meta-item"><span>対象年齢 :</span> 5歳以上</span>
        <span class="mask-modal__meta-item"><span>所要時間 :</span> 45分</span>
      </p>
    `,
  },
  "e-sports": {
    subtitle: "白熱のレースゲームでスピードとテクニックを競い合おう。",
    description:
      "ドライビングシミュレーターを通して、スピード感や操作の繊細さをリアルに感じられる<br>体験型ゲーミングアトラクション。<br>実車とは違う入口で、クルマの面白さに触れてみよう！",
    body: `
      <p class="mask-modal__meta-row">
        <span class="mask-modal__meta-item"><span>場所 :</span> e-sports特設ブース</span>
        <span class="mask-modal__meta-item"><span>開催時間 :</span> 10時〜13時</span>
      </p>
      <p class="mask-modal__meta-row">
        <span class="mask-modal__meta-item"><span>対象年齢 :</span> 10歳以上</span>
        <span class="mask-modal__meta-item"><span>優勝者特典 :</span> GT手袋プレゼント</span>
      </p>
    `,
  },
};

const triangleTriggers = document.querySelectorAll(".triangle-trigger");
const maskModal = document.querySelector("#js-mask-modal");
const maskModalImage = document.querySelector("#js-mask-modal-image");
const maskModalTitle = document.querySelector("#js-mask-modal-title");
const maskModalSubtitle = document.querySelector("#js-mask-modal-subtitle");
const maskModalDescription = document.querySelector("#js-mask-modal-description");
const maskModalBody = document.querySelector("#js-mask-modal-body");
const maskModalClose = document.querySelector("#js-mask-modal-close");

let activeTriangleTrigger = null;
let openModalTimerId = null;

const resetTriangleTrigger = (trigger) => {
  if (!trigger) return;
  trigger.classList.remove("is-flipping");
  trigger.removeAttribute("aria-expanded");
};

const closeMaskModal = () => {
  if (!maskModal || !maskModal.classList.contains("is-active")) return;

  maskModal.classList.remove("is-active");
  maskModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-modal-open");
  resetTriangleTrigger(activeTriangleTrigger);
  activeTriangleTrigger = null;
};

const openMaskModal = (trigger) => {
  if (
    !maskModal ||
    !maskModalImage ||
    !maskModalTitle ||
    !maskModalSubtitle ||
    !maskModalDescription ||
    !maskModalBody
  ) {
    return;
  }

  const modalId = trigger.dataset.modalId;
  const modalInfo = triangleModalData[modalId];
  const modalTitle = trigger.dataset.modalTitle || "";
  const modalImage = trigger.dataset.modalImage || "";
  const modalImageAlt = trigger.dataset.modalImageAlt || modalTitle;

  maskModalImage.src = modalImage;
  maskModalImage.alt = modalImageAlt;
  maskModalTitle.textContent = modalTitle;
  maskModalSubtitle.textContent = modalInfo?.subtitle || "";
  maskModalDescription.innerHTML = modalInfo?.description || "";
  maskModalBody.innerHTML = modalInfo?.body || "";
  maskModal.classList.remove(
    "mask-modal--wood-work",
    "mask-modal--kids-dance",
    "mask-modal--pit-crew",
    "mask-modal--e-sports",
  );
  maskModal.classList.add(`mask-modal--${modalId}`);

  maskModal.classList.add("is-active");
  maskModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
  trigger.setAttribute("aria-expanded", "true");
};

triangleTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (maskModal?.classList.contains("is-active")) return;

    clearTimeout(openModalTimerId);
    resetTriangleTrigger(activeTriangleTrigger);

    activeTriangleTrigger = trigger;
    trigger.classList.add("is-flipping");

    openModalTimerId = window.setTimeout(() => {
      openMaskModal(trigger);
    }, 620);
  });
});

maskModal?.addEventListener("click", (event) => {
  const closeTarget = event.target.closest("[data-modal-close]");
  if (closeTarget) {
    closeMaskModal();
  }
});

maskModalClose?.addEventListener("click", closeMaskModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMaskModal();
  }
});

const triangleGroups = document.querySelectorAll(".triangle-group");

if (triangleGroups.length) {
  if (!("IntersectionObserver" in window)) {
    triangleGroups.forEach((group) => {
      group.classList.add("is-visible");
    });
  } else {
    const triangleObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    triangleGroups.forEach((group) => {
      triangleObserver.observe(group);
    });
  }
}

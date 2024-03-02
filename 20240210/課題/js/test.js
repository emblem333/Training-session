// スクロールトリガーを設定
gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box", // アニメーションが発生するトリガー要素
        start: "top center", // トリガー要素がビューポートの中央に来たときにアニメーションが始まる
        end: "bottom center", // トリガー要素がビューポートの下端に達したときにアニメーションが終了
        scrub: true, // スクロール時にアニメーションをスクラブする（アニメーションをスクロール速度に同期させる）
    },
    x: 500, // x軸方向の移動距離
    rotation: 360, // 360度回転
    duration: 2 // アニメーションの期間（秒）
});
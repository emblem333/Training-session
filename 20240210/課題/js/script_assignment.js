gsap.to('.animation_1',{x:"90vw", rotation:720, duration:3,
  scrollTrigger:{
    trigger:'.animation_1',
    start:'top 40%',
    end:'bottom 30%',
    // markers:true,
    toggleActions:'play none none reverse',
    repeat: -1,
  }
});

gsap.fromTo('.animation_2',
  {
    y: 300, /*アニメーション開始前の縦位置(下に100px)*/
    autoAlpha: 0, /*アニメーション開始前は透明*/
  },
  {
    y: 0, // アニメーション後の縦位置(上に100px)
    autoAlpha: 1, // アニメーション後に出現(透過率0)
    scrollTrigger:{
      trigger:'.animation_2',
      start:'top 60%',
      end:'bottom 30%',
      toggleActions:'play none none reverse',
    },
  }
);

gsap.to('.animation_3',{scaleX:3, scaleY:3,
  scrollTrigger:{
    trigger:'.animation_3',
    start:'top 50%',
    end:'bottom 30%',
    toggleActions:'play none none reverse',
  }
});
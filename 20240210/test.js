gsap.to('.box',{x:400,
    scrollTrigger:{
      trigger:'.box',
      start:'top 80%',
      end:'bottom 20%',
      markers:true,
      toggleActions:'play none none reverse',
      // 以下は確認用 箱の中の文字がスクロール位置によって変わります！
      onEnter:()=>{
        document.querySelector('.box').innerHTML = 'onEnter';
      },
      onLeave:()=>{
        document.querySelector('.box').innerHTML = 'onLeave';
      },
      onEnterBack:()=>{
        document.querySelector('.box').innerHTML = 'onEnterBack';
      },
      onLeaveBack:()=>{
        document.querySelector('.box').innerHTML = 'onLeaveBack';
      },
    }
  });
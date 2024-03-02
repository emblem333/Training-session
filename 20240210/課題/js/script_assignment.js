gsap.to('.animation_1',{x:400,
  scrollTrigger:{
    trigger:'.animation_1',
    start:'top 50%',
    end:'bottom 30%',
    markers:true,
    toggleActions:'play none none reverse',
  }
});
gsap.to('.animation_2',{x:400,
  scrollTrigger:{
    trigger:'.animation_2',
    start:'top 50%',
    end:'bottom 30%',
    toggleActions:'play none none reverse',
  }
});
gsap.to('.animation_3',{x:400,
  scrollTrigger:{
    trigger:'.animation_3',
    start:'top 40%',
    end:'bottom 30%',
    toggleActions:'play none none reverse',
  }
});
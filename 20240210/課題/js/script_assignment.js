const scrollAnimations = [
  document.querySelectorAll('.scroll_animation_1'),
  document.querySelectorAll('.scroll_animation_2'),
  document.querySelectorAll('.scroll_animation_3')
];
const distance = document.querySelectorAll('.distance');
const windowHeight = window.innerHeight;

scrollAnimations.forEach((element, index) => {
  element.forEach(element => {
    const elementDistance = element.offsetTop;
    distance[index].textContent = '上からの距離:' + elementDistance;

    window.addEventListener('scroll', function(){
      let scrollY = window.scrollY;
      if(scrollY >= elementDistance - (windowHeight / 2)){
        element.classList.add('active');
      }
    });
  });
});

gsap.to('#animation_01', {
  x: 500,
  delay: 1,
  duration: 1,
  ease: 'power4.out', //力強さを表現１～４
  repeat: -1,
  yoyo: true,
})
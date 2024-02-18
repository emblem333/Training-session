//第１引数に対象、第2引数に変化さえたいプロパティーと設定値を指定
//gsap.to('#animation_01',{x: 200, duration: 2});

// gsap.to('#animation_01',{
//  x: 300,
//  backgroundColor: 'pink',
//  duration: 2,
//  repeat: -1,
//  yoyo: true,
// });

// gsap.to('#animation_01',{
//   // x: 100,
//   // y: 100,
//   // duration: 1,
//   scale: 2,
//   duration: 1,
//   delay: 2,
//   repeat: -1,
// })

// document.querySelectorAll()と同じ結果が返ってくる
// gsap.to(['#animation_01, #animation_02'], {
//   x: 500,
//   delay: 1,
//   duration: 2,
//   ease: 'power4.out', //力強さを表現１～４
//   repeat: -1,
//   yoyo: true,
// })

gsap.to('#animation_01', {
  x: 500,
  delay: 1,
  duration: 2,
  ease: 'power4.out', //力強さを表現１～４
  repeat: -1,
  yoyo: true,
})

// gsap.from('#animation_02', {
//   x: 500,
//   delay: 1,
//   duration: 2,
//   ease: 'power4.out', //力強さを表現１～４
//   repeat: -1,
//   yoyo: true,
// })

gsap.set('#animation_02', {
  x: 500,
  delay: 1,
  duration: 2,
  ease: 'power4.out', //力強さを表現１～４
  repeat: -1,
  yoyo: true,
})


const div = document.createElement('div');
div.classList.add('animation_03');
div.textContent = 'こんにちは';
document.body.append(div);
gsap.to(div,{
  fontSize: 50,
  delay: 1,
  duration: 2,
  repeat: -1,
})
//距離を測る
const scrollAppears = document.querySelectorAll('.scroll_appear');

const distance = document.querySelectorAll('.distance');
const windowHeight = window.innerHeight;

for(let index = 0; index < scrollAppears.length; index++){
  //distance[index].textContent = '上からの距離:' + scrollAppears[index].offsetTop;
  const elmentDistance = scrollAppears[index].offsetTop;
  distance[index].textContent = '上からの距離:' + elmentDistance;

  // スクロールイベント
  window.addEventListener('scroll', function(){
    let scroll_y = window.scrollY;
    //スクロールの位置がoffsettopで計測した位置に達したら"acitive"のclassを追加
    if(scroll_y >= elmentDistance - (windowHeight / 2)){
      //activeのclassを追加する処理
      scrollAppears[index].classList.add('active');
    }
  });
}
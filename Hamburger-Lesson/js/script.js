$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
//$(this)はクリックされた要素自身を表す

// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
// このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定する

// ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定する
// #sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu">に設定されている

// このように設定することで、ハンバーガーメニューがクリックされたときに、
// フェードインとフェードアウトが交互に実行されるようになる
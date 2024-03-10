const question_list = [ /*オブジェクト*/
  {
    //問題１
    sentence: 'この中で赤い果物はどれでしょうか？',
    answers: ['みかん','リンゴ','レモン','スイカ'],
    correct: 'リンゴ',
  },
  {
    //問題２
    sentence: 'ピカチュウをライチュウに進化させるために必要な道具は？',
    answers: ['でんきだま','じしゃく','かみなりのいし','ひかりいし'],
    correct: 'かみなりのいし',
  },
  {
    //問題３
    sentence: '次の中で飲み物ではないのはどれでしょうか？',
    answers: ['コーラ','牛乳','ビール','カレー'],
    correct: 'カレー',
  }
];

const question_all = question_list.length; //問題の総数
let question_count = 0; //何問答えたかの数
let score = 0; //正解数
let answer_button = document.getElementsByTagName('button');

//問題の出題&タグ取得
const question_switch = () => {
  document.getElementById('question_sentence').innerText = 
  question_list[question_count].sentence;

  let answer_count = 0;
  while(answer_count < question_list[question_count].answers.length){
    //buttonタグのvalue
    document.getElementsByTagName('button')[answer_count].value = 
    question_list[question_count].answers[answer_count];

    //buttonタグの中のclass(answer_text)の中
    document.getElementsByClassName('answer_text')[answer_count].innerText = 
    question_list[question_count].answers[answer_count];

    answer_count++; //処理の最後にanswer_countに「1」
  }
};

question_switch();

for(let i = 0; i < answer_button.length; i++){
  answer_button[i].addEventListener('click', () =>{
    if(answer_button[i].value == question_list[question_count].correct){
      document.getElementById('result_message')
      .innerHTML = '正解！';
      score++;
    }else{
      document.getElementById('result_message')
      .innerHTML = '不正解！';
    }
    setTimeout(function(){
      document.getElementById('result_message')
      .innerHTML = '';
    }, 1000); //正誤を次の問題に繋げないために
    question_count++;

    //答えたら問題の切り替え
    if(question_count < question_all) {
      setTimeout(function(){
        question_switch(); //2問目以降
      }, 1000);//ミリ秒
    }else {
      setTimeout(function(){
        document.getElementById('result_message').innerHTML = 
        '問題が解き終わりました！<br>あなたは全'+ question_all + '問中、' + score + '問正解しました！';
      },1000);
    }
  });
}
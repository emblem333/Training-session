const question_list = [
  {
    //問題１
    sentence: 'この中で赤い果物はどれでしょうか？',
    answers: ['みかん','リンゴ','レモン','スイカ'],
    correct: 'リンゴ', //正解
    incorrect:'', //不正解
    almost:'', //惜しい
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
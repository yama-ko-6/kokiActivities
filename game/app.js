const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれか？',
    answers: [
      'スーパファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },{
    　　question: '福井県の有名な花と言えば次のうちどれか？',
    answers: [
      'ひまわり',
      '水仙',
      'チューリップ',
      'たんぽぽ'
    ],
    correct: '水仙'
  },{
    　　　question: '福井県の丼と言えば次のうちどれか？',
    answers: [
      'ソースカツ丼',
      'カツ丼',
      '蟹玉丼',
      '天丼'
    ],
    correct: 'ソースカツ丼'
  }
];
const quizLength = quiz.length;
let quizIndex = 0; 
let scor = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
document.getElementById('js-question').textContent =  quiz[quizIndex].question;
let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
      window.alert('正解！');
      scor++;
    } else {
      window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + scor + '/' + quizLength + 'です！');
  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e)
  });
  handlerIndex++;
}


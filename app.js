// let check = document.querySelector(".check");

// function Mat() {
//   let colors = ["yellow", "blue"];
//   console.log(colors[1]);
//   document.body.style.backgroundColor = colors[1];
// }
// // Mat();

// check.addEventListener("click", Mat);

// console.log((document.querySelector(".message").textContent = "its mine"));

// let new_msg = document.querySelector('.message')

// // new_msg.textContent = 'na Ty tok am'

// // new_msg.style.color = 'red'

// let question = document.querySelector('.number')

// question.textContent = '!'

// let Ade = document.querySelector('.score')
// // console.log(Ade.textContent);

// Ade.textContent = 100

// let input = document.querySelector('.guess')

// console.log(input, typeof input);

// // console.log((document.querySelector('.guess').value = 20))

// // Handling click event
// let btn = document.querySelector('.check')

// function check() {
//   //  new_msg.textContent = 'type a number'
//   if (input.value == '') {
//     new_msg.textContent = 'type a number'
//   }else{
//       new_msg.textContent = 'you are koret'
//   }
// }

// btn.addEventListener('click', check)

// let number = document.querySelector(".guess");

// let btn = document.querySelector(".check");

// let new_msg = document.querySelector(".message");

// function zz() {

//     if (number.value == '') {
//       new_msg.textContent = "type a number";
//     } else {
//       new_msg.textContent = "you are koret";
//     }
// }

// btn.addEventListener("click", zz);

//lets Start

let numberGenerator = Math.ceil(Math.random() * 6);

// let numberGenerator = 3;

console.log(numberGenerator);

let Score = 20;

let HighScore = 0;

let msg = document.querySelector(".message");

let num = document.querySelector(".number");

let btn = document.querySelector(".check");

let data = Number(document.querySelector(".guess").value);

let again = document.querySelector(".again");

let score = document.querySelector(".score");

let highscore = document.querySelector(".highscore");

// console.log(typeof data);

function chat(message) {
  msg.textContent = message;
}

function chips(bat) {
  //   highscore.textContent = bat;

  if (bat > HighScore) {
    highscore.textContent = bat;
    HighScore = bat;
  }
}

function cheq() {
  data = Number(document.querySelector(".guess").value);
  if (!data) {
    chat("type a number");
    document.body.style.backgroundColor = "black";
    num.textContent = "?";
  } else if (data === numberGenerator) {
    chat("correct");
    chips(Score);
    document.body.style.backgroundColor = "green";
    num.textContent = numberGenerator;
    // score.textContent = Score;
    // confirm();
  } else {
    chat("try Again");
    document.body.style.backgroundColor = "red";
    num.textContent = "?";
    Score--;
    score.textContent = Score;
  }
}

function Dave() {
  //   location.reload();
  Score = 20;
  num.textContent = "?";
  document.body.style.backgroundColor = "orange";
  score.textContent = "20";
}
btn.addEventListener("click", cheq);
again.addEventListener("click", Dave);

// function confirm() {
//   if (score.textContent < highscore.textContent) {
//     highscore.textContent = highscore.textContent;
//   } else if (score.textContent >= highscore.textContent) {
//     highscore.textContent = score;
//   }
// }
//

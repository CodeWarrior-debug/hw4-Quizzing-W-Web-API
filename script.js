var questionsArray=[];
var activeQuestion;
var usedQuestionsArray=[];
var timeLeft;
var score;



//on window load, hide ingame view, set button to start game

window.onload=chgShowID("in-game");
window.onload=chgShowID("question-list");




function chgShowID(idName){
    var activeElement = document.getElementById(idName);
    if (activeElement.style.display="none"){
        activeElement.style.display="initial"
    } else {activeElement.style.display="none"}
}


q1={
    question: "What is the first animal mentioned in the subtext of the opening credits?",
    option1: "Moose",
    option2: "Rabbit",
    option3: "Horse",
    option4: "Llama",
    correct: "Moose"
    }



//Thanks to Stack Overflow Question# 20618355

// window.onload = function () {
//     var oneMinute = 60,
//         display = document.querySelector('#time');
//     startTimer(oneMinute, display);
// };

// //Thanks to Stack Overflow Question# 20618355
// function startTimer(duration) {
//     var timer = document.getElementById("timer");
//     setInterval(function() {
//         if(time >= 0){
//             timer.textContent = "Time: " + time;
//             time--;
//         }
//     }, 1000);
// }

// // Randomly picks guessword and formats guess box
// function setWord() {
//     var guessWord = guessWords[Math.floor(Math.random() * guessWords.length)];
//     for (var i = 0; i < guessWord.length; i++){
//         answerBox.innerHTML += "<p id='" + i + "element' data-value='" + guessWord[i] + "' data-status='hidden'></p>";
//     }
//     return guessWord;
// }

// function setWord() {
//     var guessWord = guessWords[Math.floor(Math.random() * guessWords.length)];
//     return guessWord;
// }
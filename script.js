




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
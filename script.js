var activeQuestion;
var usedQuestionsArray=[];
var timeLeft=60;
var score=60;
var timer=document.getElementById("timer")
var startBtn=document.getElementById("start");
var questionText=document.getElementById("question");
var lioption1=document.getElementById("1");
var lioption2=document.getElementById("2");
var lioption3=document.getElementById("3");
var lioption4=document.getElementById("4");
var element;
var x=0;
var scoreNote=document.getElementById("your-score");
var scoreList=document.getElementById("score-table");
var playerInitials=document.getElementById("initials");
var submitBtn=document.getElementById("submit");
var replayBtn=document.getElementById("play-again");
var gameStatus='';
var scoreRecent;
var timer = document.getElementById("timer");
var timer_is_on = 0;
var savedScores;
var myscore;


//on window load, hide ingame view, set button to start game

window.onload=hideID("in-game");
window.onload=hideID("game-over");
startBtn.addEventListener("click",startGame);
submitBtn.addEventListener("click",recordScores);
replayBtn.addEventListener("click",refreshPage);


lioption1.addEventListener("click",function(event) {
element = event.target;
submitAnswer(element)});

lioption2.addEventListener("click",function(event) {
element=event.target;   
submitAnswer(element)});

lioption3.addEventListener("click",function(event) {
element=event.target;   
submitAnswer(element)});

lioption4.addEventListener("click",function(event) {
    element=event.target;   
    submitAnswer(element)});

//establish question set

    q1={
    question: "What is the first animal mentioned in the subtext of the opening credits?",
    option1: "Moose",
    option2: "Rabbit",
    option3: "Horse",
    option4: "Llama",
    correct: "Moose",
    }
    
    q2={
    question: "Why could the coconut not be brought to Britain by an African swallow?",
    option1: "Unable to grasp it by the husk",
    option2: "Insufficient airspeed velocity",
    option3: "Non-migratory bird",
    option4: "Hates coconuts",
    correct: "Non-migratory bird",
    }
    
    q3={
    question: "What was the fee for taking away a dead body on the cart?",
    option1: "Sixpence",
    option2: "One Shillling",
    option3: "Ninepence",
    option4: "One Crown",
    correct: "Ninepence",
    }
        
    q4={
    question: "What was the first limb of the Black Knight removed by King Arthur?",
    option1: "Right arm",
    option2: "Left arm",
    option3: "Left leg",
    option4: "Right leg",
    correct: "Left arm",  
    }
    
    q5={
    question: "What was the fate of the newt?",
    option1: "He turned into a knight",
    option2: "It got better",
    option3: "He was eaten by a duck",
    option4: "He crawled away",
    correct: "It got better",  
    }
    
    q6={
    question: "Who was the first knight King Arthur added to his round table?",
    option1: "Galahad",
    option2: "Robin",
    option3: "Bedevere",
    option4: "Lancelot",
    correct: "Bedevere",  
    }
    
    q7={
    question: "What is the last line of the Camelot song?",
    option1: "We eat ham and jam and spam a lot",
    option2: "I have to push the pram a lot",
    option3: "We sing from the diaphragm a lot",
    option4: "It's a busy life in Camelot",
    correct: "I have to push the pram a lot",  
    }
    
    q8={
    question: "After the Trojan Rabbit failure, what alternate Trojan animal did Sir Bedevere propose trying?",
    option1: "Duck",
    option2: "Badger",
    option3: "Horse",
    option4: "Porcupine",
    correct: "Badger",  
    }
    
    q9={
    question: "What modern day character was slain by an armored horseman?",
    option1: "A famous historian",
    option2: "A London Bobby",
    option3: "An American journalist",
    option4: "A Cambridge professor",
    correct: "A famous historian",  
    }
    
    q10={
    question: "Which of King Arthur's knights meets the three-headed knight?",
    option1: "Sir Bedemere",
    option2: "Sir Galahad",
    option3: "Sir Lancelot",
    option4: "Sir Robin",
    correct: "Sir Robin",  
    }

    var questionsArray = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

//establish reusable functions

    function hideID(idName) {
        var activeElement = document.getElementById(idName);
        {activeElement.style.display="none"}
    }

    function showID(idName){
        var activeElement = document.getElementById(idName);
        {activeElement.style.display="initial"}
    }

    function getandLogQuestion(){       //picks question, 
        activeQuestion=questionsArray[x];
        x++;
        if (x === (questionsArray.length + 1) ) {
            finalScore=timeLeft;
            finishGame();
        }
    }

// set start game function
    function startGame(){
        hideID("pre-game");
        showID("in-game");
        showID("timer");
        showID("question");
        showID("question-list");
        timeLeft=60;
        startCount(timeLeft);
        getandLogQuestion();
        loadQuestion();
    }

    function loadQuestion(){
        questionText.innerHTML=activeQuestion.question;
        lioption1.innerHTML=activeQuestion.option1;
        lioption2.innerHTML=activeQuestion.option2;
        lioption3.innerHTML=activeQuestion.option3;
        lioption4.innerHTML=activeQuestion.option4;
    }

    function submitAnswer(element){

        if (element.innerHTML!==activeQuestion.correct){
            timeLeft=timeLeft-5;
        };

        if (x===(questionsArray.length + 1)){
        finalScore=timeLeft;
        finishGame();
        }
        
        if (timeLeft <=0){
        finalScore=timeLeft;
        finishGame();
        }

        getandLogQuestion();
        if (gameStatus!=="finished") loadQuestion();
    }

    //Thanks to w3 schools for timer using timedCount
   
   function startCount(numberSeconds) {
    if (!timer_is_on) {
      timeLeft = numberSeconds;
      timedCount();
      timer_is_on = 1;
    }
  }
   
   function timedCount() {
    timer.textContent = "Time: " + timeLeft;
    timeLeft = timeLeft - 1;
    t = setTimeout(timedCount, 1000);
    if(timeLeft<=0){stopCount()};
  }
    
    function stopCount() {
        clearTimeout(t);
        timer_is_on = 0;
    }

    function finishGame(){
        stopCount();
        hideID("in-game");
        showID("game-over");
        finalScore=Math.max(timeLeft,0);
        scoreNote.textContent=finalScore;
        gameStatus="finished";
    }

    function recordScores(){
        initials=playerInitials.value;
        score=finalScore;
        myscore = {
            initials: [initials],
            score: [score],
        }
        saveScores();
    }
   
    function saveScores() {
        savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        if (savedScores.length===0) {
            localStorage.setItem("savedScores", JSON.stringify(myscore));
        } else 
        {
            savedScores.initials.push(myscore.initials[0]);
            savedScores.score.push(myscore.score[0]);
            localStorage.setItem("savedScores", JSON.stringify(savedScores));
        };
        addLi();
    }

    // function to add new row.
    function addLi() {
        savedScores = JSON.parse(localStorage.getItem("savedScores"));
        for (a=0; a < savedScores.initials.length; a++) {
            myInitials=savedScores.initials[a];
            myScore=savedScores.score[a];
            liStamp=(myInitials + ": " + myScore)
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(liStamp));
            scoreList.appendChild(li);
        }
    }

    function refreshPage(){
        location.reload();
    }
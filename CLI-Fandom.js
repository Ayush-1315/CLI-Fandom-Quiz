//Initializations
var score = 0;
var readLineSync = require('readline-sync');
//Questions
var reelQuest = [
  {
    question: "Who played 'Rooh Baba' role in the movie? \n a) Sonu Nigam \n b) Varun Dhawan \n c) Kartik Aaryan \n d) Kiara Advani \n",
    ans: 'c',
  },
  {
    question: "Why 'Reet' is hiding from her family? \n a) She was playing 'Hide&Seek' \n b) To make her family belive that she is dead \n c) She has mental issues \n d) Ruhan asked her to do this \n",
    ans: 'b',
  },
  {
    question: "Who was the ghost ? \n a) Anjulika \n b) Rajjo \n c) Reet \n d) Manjulika \n",
    ans: 'a',
  },
  {
    question: "How was the ghost? \n a) Evil \n b) Kind \n c) Beautiful  \n d) Boring \n",
    ans: 'b',
  },
  {
    question: "Where did Reet and Ruhan met? \n a) Cafe \n b) Water Park \n c) Music Festival \n d) Hill Station \n",
    ans: 'd',
  }
];
//Functions
function welcome(name) {
  console.log("Welcome " + name + " ,let's have quiz on 'Bhool Bhulaiya-2'");
  console.log("\n\n\t\t\t\tSTARTING GAME IN 5 Secs.......");
  setTimeout(start, 5000);
}
function askquestion(question, answer) {
  let userAns = readLineSync.question("Question: \n" + question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    score++;
    console.log('Right!');
  }
  else {
    console.log('Wrong!');
  }
  console.log("Current Score: " + score);
  console.log("____________________");
}
function start() {
  for (var i = 0; i < reelQuest.length; i++) {
    let currentQuestion = reelQuest[i];
    askquestion(currentQuestion.question, currentQuestion.ans);
  }
  console.log("Your Score: " + score);
  highScores.push({
    name: username,
    score: score,
  });
  let showLeader = readLineSync.question("Want to see leaderboard?? (Y/N) \n");
  if (showLeader.toUpperCase() === 'Y') {
    showLeaderboards();
  }
  setTimeout(() => { console.log("\t\t\t\t Share your score with me at 'ayushraj1315@gmail.com'") }, 3000);
  console.log("\t\t\t\tThanks for playing with me......☺☺☺☺\n")
}
function showLeaderboards() {
  console.log("\t\t\t\t\t LEADERBOARDS\n");
  for (let i = 0; i < highScores.length; i++) {
    let player = highScores[i];
    console.log(player.name);
    console.log("Score: " + player.score);
    console.log("-----------------");
  }
}
//Leaderboards
var highScores = [
  {
    name: 'Amandeep',
    score: 3,
  },
  {
    name: 'Piyush Alankar',
    score: 5,
  },
  {
    name: 'Rahul',
    score: 2,
  }
];
//User Details

var username = readLineSync.question("What's your good name? \n");
welcome(username);
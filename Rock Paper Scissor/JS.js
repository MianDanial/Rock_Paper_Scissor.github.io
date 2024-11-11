let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

//for showing msg that you win or loss
const msg = document.querySelector("#msg");

//for update the user and comp score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

//function for draw game
const drawGame = () => {
  console.log("Game is Draw.");
  msg.innerText = "Game is Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

//console for Winner and lose
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win !, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    //console.log("Congrats You Win ! ");
} else { 
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Loose,Play again ! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    //console.log("ooh You Loose , Play again");
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //generate computer choice > modular
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  //it declare that who will win
  //fight b/w user and comp
  //if else statement
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissior
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


//event listner for get the ID of choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice is clicked" , userChoice)
    playGame(userChoice);
  });
});

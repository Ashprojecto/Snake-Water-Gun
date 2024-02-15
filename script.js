let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScored = document.querySelector("#user-score");
const compScored = document.querySelector("#comp-score");

// For Generating computer's choice

const genCompChoice = () => {
  const options = ["snake", "water", "gun"];
  const Idx = Math.floor(Math.random() * 3);
  return options[Idx];
};

//When Game is a Draw
const gameDraw = () => {
  msg.innerText = "It's a Draw. Play Again";
  msg.style.backgroundColor = "black";
};

//Score is decided
const winnerIs = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScored.innerText = userScore;
    msg.innerText = `You win Yours ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScored.innerText = compScore;
    msg.innerText = `You lost Comps ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//Game between User and Computer
const gamePlay = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "snake") {
      userWin = compChoice === "water" ? true : false;
    } else if (userChoice === "water") {
      userWin = compChoice === "gun" ? true : false;
    } else {
      userWin = compChoice === "snake" ? true : false;
    }
    winnerIs(userWin, userChoice, compChoice);
  }
};

// When images are clicked
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});

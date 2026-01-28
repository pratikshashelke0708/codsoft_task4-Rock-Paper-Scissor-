let playerScore = 0;
let computerScore = 0;
let currentTurn = "player";

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const playerHandSpan = document.getElementById("player-hand");
const computerHandSpan = document.getElementById("computer-hand");
const resultText = document.getElementById("result");
const turnText = document.getElementById("turn");
const buttons = document.querySelectorAll(".choices button");

const emojis = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function disableButtons() {
  buttons.forEach(btn => btn.disabled = true);
}

function enableButtons() {
  buttons.forEach(btn => btn.disabled = false);
}

function playGame(playerChoice) {
  if (currentTurn !== "player") return;

  currentTurn = "computer";
  disableButtons();
  turnText.textContent = "Computer's turn... 🤖";

  const computerChoice = getComputerChoice();

  setTimeout(() => {
    playerHandSpan.textContent = emojis[playerChoice];
    computerHandSpan.textContent = emojis[computerChoice];

    if (playerChoice === computerChoice) {
      resultText.textContent = "It's a draw! 🤝";
    } 
    else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      resultText.textContent = "You win! 🎉";
    } 
    else {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      resultText.textContent = "You lose! 😢";
    }

    currentTurn = "player";
    turnText.textContent = "Your turn! Choose 🪨 📄 ✂️";
    enableButtons();
  }, 800); // delay to simulate computer thinking
}
var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

document.getElementById("score-0").textContent = "0";

document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
// document.querySelector(".dice").style.display = "none";

var inHtmlclass = document.querySelector(".dice");

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  inHtmlclass.style.display = "block";
  inHtmlclass.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});
// hold event
document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");
  } else {
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  inHtmlclass.style.display = "none";
}

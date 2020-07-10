var activePlayer = 1;

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
});

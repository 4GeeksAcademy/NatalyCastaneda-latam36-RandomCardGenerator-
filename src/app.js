/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //   //write your code here
  let sticks = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function newCard() {
    let randomStick = sticks[Math.floor(Math.random() * sticks.length)];
    let randomValue = values[Math.floor(Math.random() * values.length)];
    document.querySelector("#topStick").innerHTML = randomStick;
    document.querySelector("#numbersLiterals").innerHTML = randomValue;
    document.querySelector("#bottomStick").innerHTML = randomStick;

    if (randomStick === "&hearts;" || randomStick === "&diams;") {
      document.querySelector("#topStick").style.color = "red";
      document.querySelector("#numbersLiterals").style.color = "red";
      document.querySelector("#bottomStick").style.color = "red";
    } else {
      document.querySelector("#topStick").style.color = "black";
      document.querySelector("#numbersLiterals").style.color = "black";
      document.querySelector("#bottomStick").style.color = "black";
    }
  }
  document.querySelector("#clickMe").addEventListener("click", newCard);

  newCard();

  setInterval(newCard, 10000);
};
function adjustFontSizes(newWidth, newHeight) {
  const baseWidth = 250;
  const baseHeight = 250;
  const topStickBaseSize = 50;
  const numbersLiteralsBaseSize = 100;
  const bottomStickBaseSize = 50;

  const widthRatio = newWidth / baseWidth;
  const heightRatio = newHeight / baseHeight;
  const sizeFactor = (widthRatio + heightRatio) / 2;

  const newTopStickFontSize = topStickBaseSize * sizeFactor;
  const newNumbersLiteralsFontSize = numbersLiteralsBaseSize * sizeFactor;
  const newBottomStickFontSize = bottomStickBaseSize * sizeFactor;

  document.getElementById("topStick").style.fontSize =
    newTopStickFontSize + "px";
  document.getElementById("numbersLiterals").style.fontSize =
    newNumbersLiteralsFontSize + "px";
  document.getElementById("bottomStick").style.fontSize =
    newBottomStickFontSize + "px";
}

document.getElementById("resizeButton").onclick = function() {
  const card = document.getElementById("card");
  const newWidth = parseInt(document.getElementById("widthInput").value);
  const newHeight = parseInt(document.getElementById("heightInput").value);

  card.style.width = newWidth + "px";
  card.style.height = newHeight + "px";

  adjustFontSizes(newWidth, newHeight);
};

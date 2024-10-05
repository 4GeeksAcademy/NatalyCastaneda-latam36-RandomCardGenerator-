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

  function resizeCard() {
    document.getElementById("card").style.width =
      document.getElementById("WidthInput").value + "px";
    document.getElementById("card").style.height =
      document.getElementById("HeightInput").value + "px";
  }
  document
    .querySelector("#resizeCardBtn")
    .addEventListener("click", resizeCard);
  function adjustFontSize(container, desiredWidth) {
    var fontSize = parseInt(
      window.getComputedStyle(container, null).getPropertyValue("font-size")
    );
    while (container.scrollWidth > desiredWidth && fontSize > 0) {
      fontSize--;
      container.style.fontSize = fontSize + "px";
    }
  }
};

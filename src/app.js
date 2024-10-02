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

  let randomStick = sticks[Math.floor(Math.random() * sticks.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];
  document.querySelector("#topStick").innerHTML = randomStick;
  document.querySelector("#numbersLiterals").innerHTML = randomValue;
  document.querySelector("#bottomStick").innerHTML = randomStick;

  if (randomStick === "&hearts;" || randomStick === "&diams;") {
    document.querySelector("#topStick").style.color = "red";
    document.querySelector("#numbersLiterals").style.color = "red";
    document.querySelector("#bottomStick").style.color = "red";
  }
};

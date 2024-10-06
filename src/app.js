/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //   //write your code here
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background: rgba(15, 126, 19, 255);
      min-height: 100vh;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: white;
      margin: auto;
      height: 400px;
      width: 300px;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .upperStick, .downStick {
      display: flex;
      height: 20%;
      align-items: center;
      padding: 10px;
    }

    #topStick, #bottomStick {
      font-size: 90px;
    }

    #numbersLiterals {
      font-size: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60%;
      width: 100%;
    }

    #containerProperties {
      margin-top: 20px;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      background-color: lightgray;
    }
  `;
  document.head.appendChild(style);

  const masterContainer = document.createElement("div");
  masterContainer.id = "masterContainer";
  masterContainer.classList.add("container-fluid");
  document.body.appendChild(masterContainer);

  const card = document.createElement("div");
  card.id = "card";
  masterContainer.appendChild(card);

  const upperStick = document.createElement("div");
  upperStick.classList.add("upperStick");
  card.appendChild(upperStick);

  const topStick = document.createElement("span");
  topStick.id = "topStick";
  upperStick.appendChild(topStick);

  const range = document.createElement("div");
  range.classList.add("range");
  card.appendChild(range);

  const numbersLiterals = document.createElement("span");
  numbersLiterals.id = "numbersLiterals";
  range.appendChild(numbersLiterals);

  const downStick = document.createElement("div");
  downStick.classList.add("downStick");
  card.appendChild(downStick);

  const bottomStick = document.createElement("span");
  bottomStick.id = "bottomStick";
  downStick.appendChild(bottomStick);

  const containerProperties = document.createElement("div");
  containerProperties.id = "containerProperties";
  masterContainer.appendChild(containerProperties);

  const replicate = document.createElement("div");
  replicate.id = "replicate";
  containerProperties.appendChild(replicate);

  const clickMeButton = document.createElement("button");
  clickMeButton.id = "clickMe";
  clickMeButton.innerText = "Pick me!";
  replicate.appendChild(clickMeButton);

  const containerSizes = document.createElement("div");
  containerSizes.id = "containerSizes";
  containerProperties.appendChild(containerSizes);

  const containerWidth = document.createElement("div");
  containerWidth.id = "containerWidth";
  containerSizes.appendChild(containerWidth);

  const widthLabel = document.createElement("label");
  widthLabel.setAttribute("for", "widthInput");
  widthLabel.innerText = "Enter Width: ";
  containerWidth.appendChild(widthLabel);

  const widthInput = document.createElement("input");
  widthInput.type = "text";
  widthInput.id = "widthInput";
  widthInput.value = "300";
  containerWidth.appendChild(widthInput);

  const containerHeight = document.createElement("div");
  containerHeight.id = "containerHeight";
  containerSizes.appendChild(containerHeight);

  const heightLabel = document.createElement("label");
  heightLabel.setAttribute("for", "heightInput");
  heightLabel.innerText = "Enter Height: ";
  containerHeight.appendChild(heightLabel);

  const heightInput = document.createElement("input");
  heightInput.type = "text";
  heightInput.id = "heightInput";
  heightInput.value = "400";
  containerHeight.appendChild(heightInput);

  const resizeButton = document.createElement("button");
  resizeButton.id = "resizeButton";
  resizeButton.innerText = "Change size";
  containerSizes.appendChild(resizeButton);

  const sticks = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  const values = [
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
    "K",
  ];

  function newCard() {
    let randomStick = sticks[Math.floor(Math.random() * sticks.length)];
    let randomValue = values[Math.floor(Math.random() * values.length)];
    topStick.innerHTML = randomStick;
    numbersLiterals.innerHTML = randomValue;
    bottomStick.innerHTML = randomStick;

    if (randomStick === "&hearts;" || randomStick === "&diams;") {
      topStick.style.color = "red";
      numbersLiterals.style.color = "red";
      bottomStick.style.color = "red";
    } else {
      topStick.style.color = "black";
      numbersLiterals.style.color = "black";
      bottomStick.style.color = "black";
    }
  }

  clickMeButton.addEventListener("click", newCard);

  newCard();

  resizeButton.addEventListener("click", function() {
    const newWidth = parseInt(widthInput.value);
    const newHeight = parseInt(heightInput.value);

    card.style.width = newWidth + "px";
    card.style.height = newHeight + "px";
  });
};

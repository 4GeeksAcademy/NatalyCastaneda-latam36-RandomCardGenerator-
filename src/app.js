/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //   //write your code here
  const body = document.body;

  const masterContainer = document.createElement("div");
  masterContainer.id = "masterContainer";
  masterContainer.className = "container-fluid";

  const card = document.createElement("div");
  card.id = "card";

  const upperStick = document.createElement("div");
  upperStick.className = "upperStick";
  const topStick = document.createElement("span");
  topStick.id = "topStick";
  upperStick.appendChild(topStick);

  const range = document.createElement("div");
  range.className = "range";
  const numbersLiterals = document.createElement("span");
  numbersLiterals.id = "numbersLiterals";
  range.appendChild(numbersLiterals);

  const downStick = document.createElement("div");
  downStick.className = "downStick";
  const bottomStick = document.createElement("span");
  bottomStick.id = "bottomStick";
  downStick.appendChild(bottomStick);

  card.appendChild(upperStick);
  card.appendChild(range);
  card.appendChild(downStick);

  const containerProperties = document.createElement("div");
  containerProperties.id = "containerProperties";

  const replicate = document.createElement("div");
  replicate.id = "replicate";
  const clickMeButton = document.createElement("button");
  clickMeButton.id = "clickMe";
  clickMeButton.innerText = "Pick me!";
  clickMeButton.onclick = newCard;
  replicate.appendChild(clickMeButton);

  const containerSizes = document.createElement("div");
  containerSizes.id = "containerSizes";

  const containerWidth = document.createElement("div");
  containerWidth.id = "containerWidth";
  const widthLabel = document.createElement("label");
  widthLabel.setAttribute("for", "WidthInput");
  widthLabel.innerText = "Enter Width:";
  const widthInput = document.createElement("input");
  widthInput.type = "text";
  widthInput.id = "widthInput";
  widthInput.value = "300";
  widthInput.maxLength = 3;
  widthInput.pattern = "\\d*";
  containerWidth.appendChild(widthLabel);
  containerWidth.appendChild(widthInput);

  const containerHeight = document.createElement("div");
  containerHeight.id = "containerHeight";
  const heightLabel = document.createElement("label");
  heightLabel.setAttribute("for", "heightinput");
  heightLabel.innerText = "Enter Height:";
  const heightInput = document.createElement("input");
  heightInput.type = "text";
  heightInput.id = "heightInput";
  heightInput.value = "400";
  heightInput.maxLength = 3;
  heightInput.pattern = "\\d*";
  containerHeight.appendChild(heightLabel);
  containerHeight.appendChild(heightInput);

  const resizeButton = document.createElement("button");
  resizeButton.id = "resizeButton";
  resizeButton.innerText = "Change size";
  resizeButton.onclick = resizeCard;

  containerSizes.appendChild(containerWidth);
  containerSizes.appendChild(containerHeight);
  containerSizes.appendChild(resizeButton);

  containerProperties.appendChild(replicate);
  containerProperties.appendChild(containerSizes);

  masterContainer.appendChild(card);
  masterContainer.appendChild(containerProperties);

  body.appendChild(masterContainer);

  const styles = `
    body {
      background: rgba(15, 126, 19, 255);
      min-height: 100vh;
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
    }
    #masterContainer {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .upperStick, .downStick {
      display: flex;
      height: 20%;
      align-content: center;
      flex-wrap: wrap;
    }
    #topStick, #bottomStick {
      font-size: 90px;
      padding-left: 13px;
    }
    .range {
      align-content: center;
    }
    #numbersLiterals {
      font-size: 160px;
      justify-content: center;
      align-items: center;
      display: flex;
      height: 60%;
      width: 100%;
    }
    .downStick {
      display: flex;
      height: 20%;
      align-content: center;
      flex-wrap: wrap;
      justify-content: end;
    }
    #bottomStick {
    font-size: 90px;
    padding-right: 13px;
    padding-bottom: 25px;
    }
    #containerProperties {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-right: 100px;
    }
    #replicate {
      min-height: 100px;
      display: flex;
      align-items: end;
      justify-content: end;
    }
    #containerSizes {
      display: flex;
      gap: 10px;
      padding-top: 50px;
    }
    #clickMe {
      border-radius: 20px;
      padding: 13px;
      transform-style: preserve-3d;
      transition: ease-in-out 2s;
      font-weight: bold;
      display: block;
      border: none;
    }
    button:hover {
      transform: rotateX(360deg);
      border: none;
    }
    label {
      display: inline-block;
      font-weight: 500;
      color: white;
      padding-bottom: 5px;
    }
    #resizeButton {
      border-radius: 20px;
      border: none;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

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
    "K"
  ];

  function newCard() {
    let randomStick = sticks[Math.floor(Math.random() * sticks.length)];
    let randomValue = values[Math.floor(Math.random() * values.length)];
    topStick.innerHTML = randomStick;
    numbersLiterals.innerHTML = randomValue;
    bottomStick.innerHTML = randomStick;

    const color =
      randomStick === "&hearts;" || randomStick === "&diams;" ? "red" : "black";
    topStick.style.color = color;
    numbersLiterals.style.color = color;
    bottomStick.style.color = color;
  }

  clickMeButton.addEventListener("click", newCard);
  newCard();
  setInterval(newCard, 10000);

  function adjustFontSizes(newWidth, newHeight) {
    const baseWidth = 250;
    const baseHeight = 250;
    const topStickBaseSize = 50;
    const numbersLiteralsBaseSize = 100;
    const bottomStickBaseSize = 50;

    const widthRatio = newWidth / baseWidth;
    const heightRatio = newHeight / baseHeight;
    const sizeFactor = (widthRatio + heightRatio) / 2;

    topStick.style.fontSize = topStickBaseSize * sizeFactor + "px";
    numbersLiterals.style.fontSize =
      numbersLiteralsBaseSize * sizeFactor + "px";
    bottomStick.style.fontSize = bottomStickBaseSize * sizeFactor + "px";
  }

  function resizeCard() {
    const card = document.getElementById("card");
    const newWidth = parseInt(document.getElementById("widthInput").value);
    const newHeight = parseInt(document.getElementById("heightInput").value);

    card.style.width = newWidth + "px";
    card.style.height = newHeight + "px";

    adjustFontSizes(newWidth, newHeight);
  }
};

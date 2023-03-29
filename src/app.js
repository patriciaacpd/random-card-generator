const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const pintas = ["♦", "♥", "♠", "♣"];
let imgElement = document.createElement("h1");
let cardTitleUp = document.createElement("h4");
let cardTitleDown = document.createElement("h4");

window.onload = function mycard() {
  function generateRandomPinta() {
    let randomPinta = pintas[Math.floor(Math.random() * pintas.length)];
    return `${randomPinta}`;
  }
  let randomPinta = generateRandomPinta();

  function generateRandomValue() {
    let randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
    return `${randomValue}`;
  }

  let card = document.getElementById("card");
  card.style.height = "280px";
  card.style.width = "180px";
  card.style.backgroundColor = "white";
  card.style.padding = "15px";
  card.style.border = "1px solid black";
  card.style.borderRadius = "10px";
  card.style.marginLeft = "560px";
  card.style.marginTop = "150px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "center";

  //let imgElement = document.createElement("h1");
  document.body.style.background = "green";
  imgElement.innerHTML = generateRandomValue();
  imgElement.style.textAlign = "center";
  //let cardTitleUp = document.createElement("h4");
  cardTitleUp.innerHTML = randomPinta;

  //let cardTitleDown = document.createElement("h4");
  cardTitleDown.innerHTML = randomPinta;
  cardTitleDown.style.transform = "rotate(180deg)";
  cardTitleDown.style.fontSize = "2.5em";
  cardTitleUp.style.fontSize = "2.5em";
  if (randomPinta === "♦" || randomPinta === "♥") {
    imgElement.style.color = "red";
    cardTitleUp.style.color = "red";
    cardTitleDown.style.color = "red";
  } else {
    imgElement.style.color = "black";
    cardTitleUp.style.color = "black";
    cardTitleDown.style.color = "black";
  }
  card.appendChild(cardTitleUp);
  card.appendChild(imgElement);
  card.appendChild(cardTitleDown);

  let cardButton = document.getElementById("change-card");
  cardButton.addEventListener("click", () => {
    mycard();
  });
  cardButton.style.borderRadius = "2px";
  cardButton.style.border = "1px solid black";
  cardButton.style.padding = "10px";
  cardButton.style.fontWeight = "bold";
  cardButton.style.marginLeft = "605px";
  cardButton.style.marginTop = "80px";
};

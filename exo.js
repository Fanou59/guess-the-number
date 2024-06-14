import "./style.css";

// Variables de récupération des éléments du DOM
let score = 0;
const inputGuess = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const resultat = document.querySelector("#resultat");
const spanScore = document.querySelector("#score");
const replay = document.querySelector("#replay");

//générer un nombre entier aléatoire entre 0 et 500 (on met 501 pour avoir le 500 inclu)
const randomNumber = Math.floor(Math.random() * 501);

//au click de Submit lancement du jeu
submit.addEventListener("click", (e) => {
  e.preventDefault;
  const numberGuess = Number(inputGuess.value);

  resultat.textContent = checkNumber(numberGuess, randomNumber);
  spanScore.textContent = score;
  inputGuess.value = "";
});

//au click sur le bouton Replay => rechargement de la page
replay.addEventListener("click", (e) => {
  e.preventDefault;
  location.reload();
});

function checkNumber(number, guess) {
  const jauge = document.querySelector("#jauge");
  const largeurJauge = jauge.getBoundingClientRect().width;
  const cross = "X";
  const success = "🟢";

  //condition si le nombre entré est supérieur au nombre à trouver
  if (number > guess) {
    //appelle de la fonction pour calculer le score (+1)
    score = scoreCalcul(score);
    indicateJaugeHelper(number, largeurJauge, cross);
    return `🔴 My guess is below ${number}`;

    //condition si le nombre entré est inférieur au nombre à trouver
  } else if (number < guess) {
    score = scoreCalcul(score);
    indicateJaugeHelper(number, largeurJauge, cross);
    return `🔴 My guess is above ${number}`;
  }
  indicateJaugeHelper(number, largeurJauge, success);
  return `🟢 You've found my guess, it's ${number}`;
}

function scoreCalcul(currentScore) {
  return currentScore + 1;
}

function indicateJaugeHelper(number, largeurJauge, indicateurIcone) {
  const jaugeContainer = document.querySelector("#jaugecontainer");
  const positionHelper = (number / 500) * largeurJauge;
  const indicateur = document.createElement("span");
  indicateur.textContent = indicateurIcone;
  indicateur.className =
    "absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none";
  indicateur.style.left = `${positionHelper}px`;
  jaugeContainer.appendChild(indicateur);
}

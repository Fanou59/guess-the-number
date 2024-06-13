import "./style.css";

// Variables de récupération des éléments du DOM
const inputGuess = document.querySelector("#guess");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault;
  const numberGuess = inputGuess.value;
  console.log(numberGuess);
});
// générer un nombre entier aléatoire entre 0 et 500
// récupérer le nombre proposé par l'utilsateur après le submit
// écrire la condition si le chiffre est au dessus ou en dessous
// en fonction de la réponse : afficher 🔴 ou 🟢
// en fonction de la réponse : afficher soit le chiffre proposé dans 'My guess is' + below or above + chiffre
// afficher une croix dans l'input entre 0 et 500 en fonction du chiffre proposé
// afficher 🟢 dans l'input si le chiffre est bon
// incrémenter le score de +1 à chaque tentative
// refresh du jeu (clear) en cliquant sur REPLAY

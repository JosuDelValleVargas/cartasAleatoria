/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "rey",
    "reina",
    "jota"
  ];

  function cartaAleatorio(palos) {
    return palos[Math.floor(Math.random() * palos.length)];
  }
  function cartaAleatorio(numeros) {
    return numeros[Math.floor(Math.random() * numeros.length)];
  }

  const palo = cartaAleatorio(palos);
  const numero = cartaAleatorio(numeros);

  const carta = {
    palo: palo,
    numero: numero
  };

  console.log(carta);

  let cardNumero = document.querySelector("#numero");
  cardNumero.innerHTML = `<p>${carta.numero}</p>`;

  if (carta.palo === "♦" || carta.palo === "♥") {
    let cardSuperior = document.querySelector("#card_superior");
    cardSuperior.innerHTML = `<p style="color: red;">${carta.palo}</p>`;

    let cardInferior = document.querySelector("#card_inferior");
    cardInferior.innerHTML = `<p style="color: red;">${carta.palo}</p>`;
  } else {
    let cardSuperior = document.querySelector("#card_superior");
    cardSuperior.innerHTML = `<p>${carta.palo}</p>`;

    let cardInferior = document.querySelector("#card_inferior");
    cardInferior.innerHTML = `<p>${carta.palo}</p>`;
  }
};

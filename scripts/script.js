"use strict";

// Selectors
const buttonOption1 = document.querySelector(".player--option-1_div");
const buttonOption2 = document.querySelector(".player--option-2_div");
const howToPlayButton = document.querySelector(".btn--how-to-play");
const closeHowToPlay = document.querySelector(".close--modal");
const startButton = document.querySelector(".start--game");

// Listeners
buttonOption1.addEventListener("click", function (e) {
  const clicked = e.target.closest(".player--option_button");
  if (!clicked) return;
  console.log(`Player chose FIGHT!`);
});

buttonOption2.addEventListener("click", function (e) {
  const clicked = e.target.closest(".player--option_button");
  if (!clicked) return;
  console.log(`Player chose RUN!`);
});

// How to play button
howToPlayButton.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button--how");
  if (!clicked) return;
  document.querySelector(".modal--window").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});

// Closing tool tip
closeHowToPlay.addEventListener("click", closeToolTip);
document.querySelector(".overlay").addEventListener("click", closeToolTip);
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.querySelector(".modal--window").classList.contains("hidden")
  )
    closeToolTip();
});

// Start button
startButton.addEventListener("click", function (e) {
  const clicked = e.target.closest(".clickable--btn");
  if (!clicked) return;
  document.querySelector(".player--area").classList.remove("hidden");
  document.querySelector(".buttons--div").classList.remove("hidden");
  document.querySelector(".button--how").classList.add("hidden");
  document.querySelector(".day--counter").classList.remove("hidden");
  document.querySelector(".start--game").classList.remove("hover");
  document.querySelector(".start--button").classList.add("hidden");
  document.querySelector(".current--version").classList.add("hidden");
});

// Functions
function closeToolTip() {
  document.querySelector(".modal--window").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

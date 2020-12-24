import "./styles.css";
import displayController from "./displayController";

const game = (() => {
  let names = [];
  displayController.resetNamesForm();
  const startBtn = document.getElementById("start-btn");
  const playBtn = document.getElementById("play-btn");

  startBtn.addEventListener("click", displayController.startAnimation, false);
  playBtn.addEventListener("click", (names = displayController.play), false);
})();

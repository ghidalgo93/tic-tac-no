import "./styles.css";
import displayController from "./displayController";

const game = (() => {
  const startBtn = document.getElementById("start-btn");
  const playBtn = document.getElementById("play-btn");
  let names = [];

  startBtn.addEventListener("click", displayController.startAnimation, false);
  playBtn.addEventListener("click", (names = displayController.play), false);
})();

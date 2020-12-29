import $ from "jquery";
import "./styles.css";
import displayController from "./displayController";
import gameboard from "./gameboard";
import player from "./player";

const game = (() => {
  let player1;
  let player2;
  displayController.resetNamesForm();
  const startBtn = document.getElementById("start-btn");
  const playBtn = document.getElementById("play-btn");
  const gameboardElem = document.getElementById("gameboard");

  startBtn.addEventListener("click", displayController.startAnimation, false);
  playBtn.addEventListener(
    "click",
    function (e) {
      const names = displayController.play(e);
      if (names) {
        displayController.displayBoard(gameboard.getBoard());
        player1 = player(names[0], "X");
        player2 = player(names[1], "O");
      }
    },
    false
  );
  $(gameboardElem).on("click", ".game-square", (e) => {
    // check if occupied
    // place token on board at index for turns token
    // displayBoard
    // check win
    // next players turn
  });
})();

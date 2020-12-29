import "./styles.css";
import $ from "jquery";
import displayController from "./displayController";
import gameboard from "./gameboard";
import player from "./player";
import helpers from "./helpers";

const game = (() => {
  let player1;
  let player2;
  let turn;
  displayController.resetNamesForm();
  const startBtn = document.getElementById("start-btn");
  const playBtn = document.getElementById("play-btn");
  const gameboardElem = document.getElementById("gameboard");

  startBtn.addEventListener("click", displayController.startAnimation, false);
  playBtn.addEventListener(
    "click",
    (e) => {
      const names = displayController.play(e);
      if (names) {
        displayController.displayBoard(gameboard.getBoard());
        player1 = player(names[0], "X");
        player2 = player(names[1], "O");
        turn = player1;
      }
    },
    false
  );
  $(gameboardElem).on("click", ".game-square", (e) => {
    const { index } = e.target.dataset;
    if (gameboard.getBoard()[index].length === 0) {
      gameboard.placeToken(index, turn.getToken());
      displayController.displayBoard(gameboard.getBoard());
      // check for win
      if (gameboard.checkBoard().result !== undefined) {
        console.log(`result: ${gameboard.checkBoard().result}`);
        console.log(`winner: ${gameboard.checkBoard().winner}`);
      }
      turn = turn === player1 ? (turn = player2) : (turn = player1);
    }
  });
})();

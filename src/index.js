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
  const resetGame = document.getElementById("reset-button");
  const resetPlayers = document.getElementById("reset-players");

  startBtn.addEventListener("click", displayController.startAnimation, false);
  playBtn.addEventListener(
    "click",
    (e) => {
      const names = displayController.play(e);
      if (names) {
        gameboard.clearBoard();
        displayController.displayBoard(gameboard.getBoard());
        player1 = player(names[0], "X");
        player2 = player(names[1], "O");
        turn = helpers.randomStarter(player1, player2);
        displayController.postMessage(`${turn.getName()}'s turn!`);
      }
    },
    false
  );
  $(gameboardElem).on("click", ".game-square", (e) => {
    const { index } = e.target.dataset;
    if (gameboard.checkUnoccupied(index) && !gameboard.gameOver()) {
      gameboard.placeToken(index, turn.getToken());
      displayController.displayBoard(gameboard.getBoard());
      if (gameboard.gameOver()) {
        displayController.endGame(gameboard.checkBoard().result, turn);
      } else {
        turn = turn === player1 ? (turn = player2) : (turn = player1);
        displayController.postMessage(`${turn.getName()}'s turn!`);
      }
    }
  });
  resetGame.addEventListener(
    "click",
    (e) => {
      e.target.textContent = "Restart";
      gameboard.clearBoard();
      displayController.displayBoard(gameboard.getBoard());
      turn = helpers.randomStarter(player1, player2);
      displayController.postMessage(`${turn.getName()}'s turn!`);
    },
    false
  );
  resetPlayers.addEventListener("click", displayController.resetPlayers, false);
})();

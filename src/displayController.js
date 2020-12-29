import helpers from "./helpers";

const displayController = (() => {
  function postMessage(message) {
    const messageBoard = document.getElementById("message-board");
    messageBoard.textContent = message;
  }
  function resetNamesForm() {
    document.getElementById("name-form").reset();
  }
  function displayBoard(board) {
    const gameboard = document.getElementById("gameboard");
    helpers.removeAllChildNodes(gameboard);
    board.forEach((token, i) => {
      const square = document.createElement("div");
      square.classList.add("game-square");
      square.textContent = token;
      square.dataset.index = i;
      gameboard.appendChild(square);
    });
  }
  function startAnimation() {
    this.style.display = "none";
    const title = document.getElementById("title");
    title.classList.add("slide-up");
    const formContainer = document.getElementById("form-container");
    formContainer.classList.remove("form-hide");
    formContainer.classList.add("form-display");
  }
  function play(e) {
    e.preventDefault();
    const formContainer = document.getElementById("form-container");
    const gameContainer = document.getElementById("game-container");
    const inputsRaw = document.querySelectorAll(".inputs");
    const inputs = [inputsRaw[0].value, inputsRaw[1].value];
    if (helpers.verifyInputs(inputs)) {
      formContainer.classList.add("slide-down");
      gameContainer.classList.remove("slide-down");
      gameContainer.classList.add("game-display");
      const player1NameContainer = document.getElementById("player1-name");
      const player2NameContainer = document.getElementById("player2-name");
      player1NameContainer.textContent = inputs[0];
      player2NameContainer.textContent = inputs[1];
      return inputs;
    }
    formContainer.classList.remove("shake");
    void formContainer.offsetWidth;
    formContainer.classList.add("shake");
    return undefined;
  }

  function resetPlayers() {
    // hide game container
    document.getElementById("game-container").classList.add("slide-down");
    // show form container
    document.getElementById("form-container").classList.remove("slide-down");
    document.getElementById("form-container").classList.add("form-display");
  }

  function endGame(result, winner) {
    if (result === "tie") postMessage("tie!");
    else if (result === "win") postMessage(`${winner.getName()} wins!`);
    const resetBtn = document.getElementById("reset-button");
    resetBtn.textContent = "Play again";
  }
  return {
    postMessage,
    resetNamesForm,
    displayBoard,
    startAnimation,
    play,
    resetPlayers,
    endGame,
  };
})();

export default displayController;

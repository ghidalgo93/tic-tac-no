import helpers from "./helpers";

const displayController = (() => {
  function resetNamesForm() {
    document.getElementById("name-form").reset();
  }
  function displayBoard(board) {
    const gameboard = document.getElementById("gameboard");
    board.forEach((token) => {
      const foo = document.createElement("div");
      foo.classList.add("game-square");
      foo.textContent = token;
      gameboard.appendChild(foo);
    });
    // helpers.removeAllChildNodes(gameboard)
    // reload the board with the given gameboard array
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
      gameContainer.classList.add("game-display");
      const player1NameContainer = document.getElementById("player1-name");
      const player2NameContainer = document.getElementById("player2-name");
      player1NameContainer.textContent = inputs[0];
      player2NameContainer.textContent = inputs[1];

      // const test = ["", "", "", "", "", "", "", "", ""];
      // displayBoard(test);

      // Store names
      return inputs;
    }
    formContainer.classList.remove("shake");
    void formContainer.offsetWidth;
    formContainer.classList.add("shake");
    return undefined;
  }
  return { resetNamesForm, startAnimation, play };
})();

export default displayController;

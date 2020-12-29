const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const tokens = ["X", "O"];

  const getAllArrays = () => {
    const rows = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
    ];
    const cols = [
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
    ];
    const diags = [
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];
    return rows.concat(cols, diags);
  };
  const getBoard = () => board;
  const placeToken = (index, token) => {
    if (board[index] === "") {
      board[index] = token;
      return true;
    }
    return false;
  };
  const checkBoard = () => {
    let result;
    let winner;
    const allArrays = getAllArrays();
    let arraysFilled = 0;
    for (const array of allArrays) {
      if (array.every((elem) => elem === tokens[0])) {
        result = "win";
        winner = tokens[0];
      } else if (array.every((elem) => elem === tokens[1])) {
        result = "win";
        winner = tokens[1];
      } else if (array.every((elem) => elem !== "")) {
        arraysFilled++;
      }
    }
    if (arraysFilled === 8) {
      // check tie
      result = "tie";
      winner = null;
    }
    return {
      result,
      winner,
    };
  };
  const clearBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, placeToken, checkBoard, clearBoard };
})();

export default gameboard;

const init = () => {
  const game = document.querySelector(".board");
  document.querySelector(".player1").classList.add("active");
  let player1 = true;
  let player2 = false;
  let gamea = true;
  let moves = ["", "", "", "", "", "", "", "", ""];

  const winCobbination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const resetGame = () => {
    moves = ["", "", "", "", "", "", "", "", ""];
    player1 = true;
    player2 = false;
    gamea = true;

    document.querySelectorAll(".board__field").forEach((el) => {
      el.textContent = "";
      el.classList.add("hover-effect");
      game.addEventListener("click", fillField);
    });
  };
  const endGame = () => {
    game.removeEventListener("click", fillField);
    document.querySelectorAll(".board__field").forEach((el) => {
      el.classList.remove("hover-effect");
    });
  };

  const checkWin = () => {
    winCobbination.forEach((el) => {
      const [posA, posB, posC] = el;
      const value1 = moves[posA];
      const value2 = moves[posB];
      const value3 = moves[posC];

      if (value1 !== "" && value1 === value2 && value1 === value3) {
        endGame();
      }
    });
  };

  const storeMoves = (e) => {
    player1
      ? (moves[e.target.dataset.cell] = "x")
      : (moves[e.target.dataset.cell] = "o");
    console.log(moves);
  };

  const chooseSign = () => {
    player1 ? (sign = "X") : (sign = "O");
  };

  const fillField = (e) => {
    if (gamea) {
      if (
        !e.target.className.includes("board__field") ||
        e.target.textContent != ""
      )
        return;

      chooseSign();
      e.target.textContent = sign;
      document.querySelector(".player1").classList.toggle("active");
      document.querySelector(".player2").classList.toggle("active");
      storeMoves(e);
      checkWin();
      player1 = !player1;
      player2 = !player2;
    }
  };

  game.addEventListener("click", fillField);
  document.querySelector(".reset").addEventListener("click", resetGame);
};

init();

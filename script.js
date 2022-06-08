const init = () => {
  const game = document.querySelector(".game");
  let player1 = true;
  let player2 = false;

  const fillField = (e) => {
    console.log(e.target.className);

    if (!e.target.className.includes("game__field")) return;
    player1 = !player1;
    player2 = !player2;
    player1 ? (e.target.textContent = "X") : (e.target.textContent = "O");
  };
  game.addEventListener("click", (e) => fillField(e));
};

init();

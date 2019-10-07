// Waiting for the DOM before launching the application
document.addEventListener("DOMContentLoaded", function() {
  let pseudo = prompt("Bonjour, quel est votre Pseudo?") || "toto2000";
  localStorage.setItem("username", pseudo);

  // Select the DOM elements
  const $div = document.getElementById("simon");
  const $playBtn = document.getElementById("play");
  const $answerBtns = document.querySelectorAll(".answer-btn");

  // Configure the game
  const options = {
    intervalDuration: 1000
  };

  // Create the game
  const game = new Simon($div, options);

  $playBtn.addEventListener("click", function() {
    game.play();
  });

  for (let $button of $answerBtns) {
    $button.addEventListener("click", function() {
      const color = this.dataset.color;
      game.addAnswer(color);
    });
  }
});

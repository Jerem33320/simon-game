function Simon($simon, options) {
  /**
   * Determines whether the player can play this level or not
   */
  let isRunning = false;

  /**
   * Available colors
   */
  const colors = ["red", "green", "yellow", "blue"];

  /**
   * The color sequence to display at each level
   */
  let sequence = [];

  /**
   * The player answers
   * @type {string[]}
   */
  let playerAnswers = [];

  /**
   * Register a new answer
   * @param {string} answer
   */
  function registerAnswer(answer) {
    if (!colors.includes(answer)) {
      console.error("Invalid color, answer ignored...");
      return;
    }

    if (sequence.length === 0) {
      console.error("Le jeu n'a pas démarré, vous ne pouvez pas répondre !!!");
      return;
    }

    if (playerAnswers.length === sequence.length) {
      console.error("Vous avez deja repondu, pas la peine d'en rajouter !");
      return;
    }

    // Validate the given answer
    const currentIndex = playerAnswers.length;
    const solution = sequence[currentIndex];

    if (solution !== answer) {
      gameOver();
      return;
    }

    // Register answer
    playerAnswers.push(answer);

    // Go to next level if all answers are valid :)
    if (playerAnswers.length === sequence.length) {
      nextLevel();
    }
  }

  /**
   * @returns {string} blue|red|green|yellow
   */
  function getRandomColor() {
    const index = randomInt(colors.length);
    return colors[index];
  }

  /**
   * Prepare the game for the given level
   * @param {number} level
   */
  function goToLevel(level) {
    // Compute the color sequence
    for (let i = sequence.length; i < level; i++) {
      sequence.push(getRandomColor());
    }

    // Reset the player answsers
    playerAnswers = [];
    isRunning = false;
  }

  function nextLevel() {
    goToLevel(sequence.length + 1);
  }

  function run() {
    // Can't run the game if already running
    if (isRunning) return;

    // Toggle flag
    isRunning = true;

    let i = 0;
    const interval = setInterval(function() {
      const color = sequence[i];
      // On arrete l'intervale si on a atteint la fin de la liste des couleurs
      if (!color) {
        clearInterval(interval);
        return;
      }

      // On change la couleur (tout de suite) ...
      $simon.style.backgroundColor = color;
      // on incrémente pour changer la couleur au "tick" suivant
      i++;

      // On planifie le passage en transparent
      setTimeout(function() {
        $simon.style.backgroundColor = "transparent";
      }, options.intervalDuration - 200);
    }, options.intervalDuration);
  }

  function gameOver() {
    alert("GAME OVER");
    // reset sequence
    sequence = [];
    // reset level
    goToLevel(0);
  }

  // Start at level 1
  goToLevel(1);

  // Expose public methods/attributes
  return {
    play: function() {
      run();
    },
    addAnswer: registerAnswer
  };
}

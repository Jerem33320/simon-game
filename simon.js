function Simon($simon, options){
  const colors = ["red", "green","yellow", "blue"];
  let sequence = [];
  let userAnswer = [];

  function goToLevel(level){
    for(let i=sequence.length; i < level; i ++){
      sequence.push(randomColors = colors[Math.floor(Math.random()*colors.length)]);
    }
    // Reset the player answers
    userAnswer = [];
  }

  function nextLevel(){
    goToLevel(sequence.length+1);
  }

  // Enregistrer les réponses
  function fillUserAnswer(color){
    userAnswer.push(color);
  }

  // Valider les réponses
  function validAnswer(level){
    for(let i=0; i<level; i++){
      if (sequence[i] === userAnswer[i]){

      } else {

      }
    }
  }

  function run(){
    let i = 0;
    const interval = setInterval(function(){
    const color = sequence[i];

    if(!color){
      clearInterval(interval);
      return;
    }

    $simon.style.backgroundColor = color;

    i++;

    setTimeout(function(){
      $simon.style.backgroundColor = "transparent";
    }, options.intervalDuration - 200);
   }, options.intervalDuration);
  }

  return {
    play: function(){
      nextLevel();
      run();
    },
    answer: function(color, level){
      fillUserAnswer(color);
      validAnswer(level);
    }
  };
}

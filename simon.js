function Simon($simon, options){
  const colors = ["red", "green","yellow", "blue"];
  let sequence = [];

  function goToLevel(level){
    for(i=1; i <= level; i ++){
      sequence.push(randomColors = colors[Math.floor(Math.random()*colors.length)]);
    }
  }

  function nextLevel(){
    goToLevel(sequence.length+1);
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

  goToLevel(5);
  run();
}

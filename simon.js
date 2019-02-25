function Simon($simon, options){
  const colors = ["red", "green","yellow", "blue"];

  function run(){
    let i = 0;
    const interval = setInterval(function(){
    const color = colors[i];

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

  run();
}

function Simon($simon){
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
   }, 1000);
  }

  run();
}

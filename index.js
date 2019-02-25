document.addEventListener('DOMContentLoaded', function(){
  const colors = ["red", "green","yellow", "blue"];
  const $simon = document.getElementById("simon");

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
  // for(let i = 0; i < colors.length; i++){
  //   const color = colors[i];
  //   setTimeout(function(){
  //     $simon.style.backgroundColor = color;
  //   }, i * 1000);
  // }
})

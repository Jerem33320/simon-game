document.addEventListener('DOMContentLoaded', function(){
  const $div = document.getElementById("simon");
  const $playBtn = document.getElementById("play");

  const game = new Simon($div, {
    intervalDuration: 1000
  });

  $playBtn.addEventListener("click", function(){
    game.play();
  });
  // for(let i = 0; i < colors.length; i++){
  //   const color = colors[i];
  //   setTimeout(function(){
  //     $simon.style.backgroundColor = color;
  //   }, i * 1000);
  // }
})

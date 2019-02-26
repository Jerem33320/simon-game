document.addEventListener('DOMContentLoaded', function(){
  const $div = document.getElementById("simon");
  const $playBtn = document.getElementById("play");

  const $blueBtn = document.getElementById("blue-btn");
  const $yellowBtn = document.getElementById("yellow-btn");
  const $redBtn = document.getElementById("red-btn");
  const $greenBtn = document.getElementById("green-btn");
  const arrayBtn = [$blueBtn, $yellowBtn, $redBtn, $greenBtn];

  const game = new Simon($div, {
    intervalDuration: 1000
  });

  $playBtn.addEventListener("click", function(){
    game.play();
  });

  for (let i = 0; i < arrayBtn.length; i++) {
    arrayBtn[i].addEventListener("click", function() {

       // appeller la fonction validanswer
       let colorUser = arrayBtn[i].style.color;
       console.log(colorUser);

       game.answer(colorUser);
    })
  }

  // for(let i = 0; i < colors.length; i++){
  //   const color = colors[i];
  //   setTimeout(function(){
  //     $simon.style.backgroundColor = color;
  //   }, i * 1000);
  // }
})

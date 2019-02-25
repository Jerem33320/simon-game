document.addEventListener('DOMContentLoaded', function(){
  const $div = document.getElementById("simon");

  new Simon($div, {
    intervalDuration: 1000
  });
  // for(let i = 0; i < colors.length; i++){
  //   const color = colors[i];
  //   setTimeout(function(){
  //     $simon.style.backgroundColor = color;
  //   }, i * 1000);
  // }
})

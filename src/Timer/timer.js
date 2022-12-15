//Seconden aftellen
var countDownSeconds = 20;

//pagina openen moet nog ff worden gefixed
var youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

//id timer
var timerElement = document.getElementById("timer");

setInterval(function() {
  countDownSeconds--;

  // Text moet ook worden geupdate dumbass
  timerElement.innerHTML = countDownSeconds;

  // wanneer timer = 0
  if (countDownSeconds == 0) {
    window.open(youtubeUrl);
  }
}, 1000);

var winSound = new Audio("Mario/win.mp3")
winSound.play();
var score = localStorage.getItem('score')
console.log(score)
var scoreBoard = document.getElementById('score')
scoreBoard.innerText=score;

var play = document.getElementById('play')
play.onclick = () => {
    window.location.href="./game.html"
}
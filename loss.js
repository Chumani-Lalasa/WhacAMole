var lossSound = new Audio("Mario/loss.mp3")
lossSound.play();
var play = document.getElementById('play')
play.onclick = () => {
    window.location.href="game.html"
}

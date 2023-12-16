
var playBtn = document.getElementById("play");
var instructionsDiv = document.getElementById("instructions");
var infoImg = document.getElementById("info");
infoImg.onclick = () => {
  instructionsDiv.style.display = "block";
  infoImg.onclick = () => {
    instructionsDiv.style.display = "none";
  };
};
playBtn.onclick = () => {
  window.location.href = "./game.html";
};
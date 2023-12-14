let presentMoletile;
let presentPlantTile;
let score =0;
let gameOver = false;

var bgSound = new Audio("Mario/game.mp3")
bgSound.play();
bgSound.loop=true;

window.onload = function(){

    playGame()
}

function playGame(){

    for(let i=0;i<9;i++){
        let tile= document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener('click',scoreTile)
        document.getElementById('board').appendChild(tile)
    }

    setInterval(placeMole,1000); 
    setInterval(placePlant,1000); 

}



function getRandomId(){

    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function placeMole(){

    if(gameOver){
        return;
    }

    if(presentMoletile){
        presentMoletile.innerHTML = "";
    }

    let mole = document.createElement('img');
    mole.style.marginLeft="30px"
    mole.src="Mario/monty-mole.png"

    let num = getRandomId();

    if(presentMoletile && placeMole.id == num){
        return;
    }

    presentMoletile= document.getElementById(num)
    presentMoletile.appendChild(mole);
}

function placePlant(){
    if(gameOver){
        return;
    }

    if(presentPlantTile){
        presentPlantTile.innerHTML="";
    }

        let plant = document.createElement('img')
        plant.style.marginLeft="30px"
        plant.src="Mario/piranha-plant.png";

        let num = getRandomId();

        if(presentMoletile && presentMoletile.id == num){
            return;
        }

        presentPlantTile=document.getElementById(num)
        presentPlantTile.appendChild(plant)
  
}

function scoreTile(){
    if(gameOver){
        return;
    }

    if(this == presentMoletile){
        score+=10;
        document.getElementById('score').innerText = score.toString()  // update score
    }
    
    else if(this == presentPlantTile && score!=0){
        localStorage.setItem('score',score);
        window.location.href="win.html"
    }

    else if(this == presentPlantTile && score==0){
        gameOver = true;
        window.location.href="lose.html"
    }

}
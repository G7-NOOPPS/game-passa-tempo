const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

let score = 0;
let time = 30;
let timer;
let size = 80;

function moveTarget(){

    const maxX = gameArea.clientWidth - size;
    const maxY = gameArea.clientHeight - size;

    const x = Math.random()*maxX;
    const y = Math.random()*maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";
}

target.onclick = function(){

    score++;
    scoreText.textContent = score;

    if(size > 35){
        size -= 2;
    }

    target.style.width = size + "px";
    target.style.height = size + "px";

    moveTarget();
}

function startGame(){

    score = 0;
    time = 30;
    size = 80;

    scoreText.textContent = score;
    timeText.textContent = time;

    target.style.width = size + "px";
    target.style.height = size + "px";

    target.style.display = "block";
    moveTarget();

    clearInterval(timer);

    timer = setInterval(()=>{

        time--;
        timeText.textContent = time;

        if(time <= 0){
            clearInterval(timer);
            target.style.display = "none";

            alert(`⏰ Fim de jogo!\nVocê fez ${score} pontos!`);
        }

    },1000);

}
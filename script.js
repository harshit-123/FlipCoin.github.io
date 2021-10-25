const coin = document.querySelector("#coin");
const resetButton = document.querySelector("#reset-button");
const flipButton = document.querySelector("#flip-button");
let head = 0;
let tail = 0;
var audio = new Audio('coinsound.mp3');
flipButton.addEventListener("click",()=>{
    const randNum = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if(randNum){
        setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards";
            audio.play();
        }, 100);
        head++;
    }else{
        setTimeout(() => {
            coin.style.animation = "spin-tails 3s forwards";
            audio.play();
        }, 100);
        tail++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
})
function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${head}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tail}`;
}
function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false;
    },3000);
}
resetButton.addEventListener("click",()=>{
    coin.style.animation = "none";
    audio.pause();
    audio.currentTime = 0;
    head = 0;
    tail = 0;
    updateStats();
})
let gameseq=[];
let userseq=[];
let started=false;
let  level=0;
let score=0;
let h2=document.querySelector("h2");
let  btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
     console.log("Game Started");
     started=true;
     levelUp();
    }
});
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    gameseq.push(randColor);
    let  randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
        score++;
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${score}</b> <br> Press any key to start`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },150);
        reset();
    }
}
function buttonPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",buttonPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    score=0;
}
let[milisec,seconds,minutes,hours]=[0,0,0,0];
let displayTime=document.getElementById("displayTime");
let timer=null;

function stopwatch(){
    milisec++;
    if(milisec == 10){
        milisec=0;
        seconds++;
        if(seconds == 60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h= hours<10 ? "0" + hours : hours;
    let m= minutes<10 ? "0" +minutes : minutes;
    let s= seconds<10 ? "0" + seconds : seconds;
    displayTime.innerHTML= h +":"+m +":"+ s +":"+milisec;
}
 function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
   timer= setInterval(stopwatch,100);
 }
let start=document.querySelector(".start");
start.addEventListener("click",watchStart);

function watchStop() {
    clearInterval(timer);
    
}
function watchReset() {
    clearInterval(timer);
    [milisec,seconds,minutes,hours]=[0,0,0,0];
    displayTime.innerHTML= "00:00:00:0";
}


let stop=document.querySelector(".stop");
stop.addEventListener("click",watchStop);
let reset=document.querySelector(".reset");
reset.addEventListener("click",watchReset);
    



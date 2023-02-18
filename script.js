let ms = 0;
let seconds = 0;
let minutes = 0;
let dms = 0;
let dseconds = 0;
let dminutes = 0;
var stats = "stopped"
var interval = null
var rajitha = 0;
function stopWatch(){
    ms++;
    if (ms/60===1){
        ms=0
        seconds++;
        if(seconds/60===1){
            seconds=0
            minutes++;
        }
    }
    if (ms<10){
        dms = "0"+ ms.toString();
    }
    else{
        dms = ms
    }
    if (seconds<10){
        dseconds = "0"+ seconds.toString();
    }
    else{
        dseconds = seconds
    }
    if (minutes<10){
        dminutes = "0"+ minutes.toString();
    }
    else{
        dminutes = minutes
    }
    document.getElementById("display").innerHTML=dminutes+":"+dseconds+":"+dms
}


function startcheybro(){
    if(stats=="stopped"){
        interval = window.setInterval(stopWatch,10)
        document.getElementById("b2").innerHTML = "Stop"
        document.getElementById("b1").innerHTML = "Lap"
        stats = "started"
    }
    else{
        interval = window.clearInterval(interval)
        document.getElementById("b2").innerHTML = "Start"
        document.getElementById("b1").innerHTML = "Reset"
        stats = "stopped"
    }
}
function reset(){
    window.clearInterval(interval)
    ms=0
    seconds=0
    minutes=0
    document.getElementById("display").innerHTML = "00:00:00"
    document.getElementById("startcheybro").innerHTML = "Start"
    document.getElementById("b1").innerHTML = "Lap"
}

function lapcheybro(){
    rajitha++;
    if(document.getElementById("b1").innerHTML==="Lap"){if(document.getElementById("display").innerHTML!="00:00:00"){
        document.getElementById("ki").innerHTML+=`<li><span class="rajitha">Lap ${rajitha} </span><span>${document.getElementById("display").innerHTML}</span></li>`;
    }}
    else{
        window.clearInterval(interval);
        ms=0;
        seconds=0;
        minutes=0;
        document.getElementById("display").innerHTML = "00:00:00";
        document.getElementById("b2").innerHTML = "Start";
        document.getElementById("b1").innerHTML = "Lap";
        rajitha = 0;
        document.getElementById("ki").innerHTML=``;
    }
    
}

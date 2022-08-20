let min = 0;
let sec = 0;
let ms = 0;

let timer = false;



function start(s) {
    if(s.keyCode == 83)
    {
    timer = true;
    stopWatch();
    }
}

function stop(s) {
    if(s.keyCode == 32){
    timer = false;
    }
}

function reset(s) {
    if(s.keyCode == 82){
    timer = false;
    min = 0; sec = 0; ms = 0;
    document.getElementById('ms').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    }
}

function stopWatch() {
    if (timer == true) {
        ms += 01;
        document.getElementById('ms').innerHTML = ms;
        if (ms == 99) {
            ms = 0;
            sec++;
            document.getElementById('sec').innerHTML = sec;
            if (sec == 60) {
                sec = 0;
                min++;
                document.getElementById('min').innerHTML = min;
            }
        }


        setTimeout("stopWatch()", 10.2);
    }
}

window.addEventListener("keyup", start);
window.addEventListener("keyup", stop);
window.addEventListener("keyup", reset);
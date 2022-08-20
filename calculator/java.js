let c = document.querySelector(".c");
let on = document.querySelector(".on");
let light = document.getElementById("light");


let string = "";
let buttons = document.querySelectorAll(".btn");
window.addEventListener("keydown", function(event) {
    if(event.key == "Enter"){
        string = eval(string);
        document.querySelector(".lower").innerHTML = string;
    }
    else if(event.key == "Backspace"){
        string = string.slice(0,-1);
        document.querySelector(".upper").innerHTML = string;
        if(string == ""){
            document.querySelector(".upper").innerHTML = "0";
        }
    }
    else{
        string +=  `${event.key}`
        document.querySelector(".upper").innerHTML = string;

    }
});

on.addEventListener('click', (e)=>{
if(document.querySelector(".on").innerHTML == "ON"){
    light.style.backgroundColor = "red";
    document.querySelector(".on").innerHTML = "OFF";
    string = ""
    document.querySelector(".upper").innerHTML = "0";
    document.querySelector(".lower").innerHTML = "0";
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector(".lower").innerHTML = string;
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector(".upper").innerHTML = "0";
            document.querySelector(".lower").innerHTML = "0";
        }
        else if(e.target.innerHTML == "x"){
            string += "*";
            document.querySelector(".upper").innerHTML = string;
        }
        else if(e.target.innerHTML == "REM"){
            string += "%";
            document.querySelector(".upper").innerHTML = string;
        }
        else if(e.target.innerHTML == "DEL"){
            console.log(string);
            string = string.slice(0,-1);
            document.querySelector(".upper").innerHTML = string;
            if(string == ""){
                document.querySelector(".upper").innerHTML = "0";
            }
        }
        else if(e.target.innerHTML == "ON"){
            light.style.backgroundColor = "red";
            document.querySelector(".on").innerHTML = "OFF";
            string = ""
            document.querySelector(".upper").innerHTML = "0";
            document.querySelector(".lower").innerHTML = "0";
        }
        else if(e.target.innerHTML == "OFF"){
            light.style.backgroundColor = "black";
            document.querySelector(".on").innerHTML = "ON";
            string = ""
            document.querySelector(".upper").innerHTML = "";
            document.querySelector(".lower").innerHTML = "";
        }
        
        else{
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector(".upper").innerHTML = string;

        }
    });
});
});

// on.onclick = function (){
//     if(document.querySelector(".on").innerHTML == "OFF"){
//         light.style.backgroundColor = "black";
//         document.querySelector(".on").innerHTML = "ON";
//         string = ""
//         document.querySelector(".upper").innerHTML = "";
//         document.querySelector(".lower").innerHTML = "";
//     }
//     else{
//         light.style.backgroundColor = "red";
//         document.querySelector(".on").innerHTML = "OFF";
//         string = ""
//         document.querySelector(".upper").innerHTML = "0";
//         document.querySelector(".lower").innerHTML = "0";
//     }
// }
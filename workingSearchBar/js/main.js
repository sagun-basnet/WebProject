//replacing content.....................
let btnC = document.querySelector('#btnC');
let for_c = document.querySelector('#for_c');
let for_js = document.querySelector('#for_js');
let btnJS = document.querySelector('#btnJS');
let current2 = document.querySelector('.current2');
let current1 = document.querySelector('.current1');

current1.style= "color: black; font-weight: bolder";

for_js.style.display='none';
for_c.style.display="";
btnC.addEventListener('click', () => {
    for_js.style.display='none';
    for_c.style.display="";
    current1.style= "color: black; font-weight: bolder";
    current2.style= "color: rgb(71, 71, 71)";
});
btnJS.addEventListener('click', () => {
    for_c.style.display='none';
    for_js.style.display='';
    current1.style= "color: rgb(71, 71, 71)";
    current2.style= "color: black; font-weight: bolder";
});
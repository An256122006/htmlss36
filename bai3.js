let blue = document.getElementById("blue");
let red = document.getElementById("red");
let purple = document.getElementById("purple");
let yellow = document.getElementById("yellow");
let div = document.getElementById("body");
let savedColor = localStorage.getItem("Color");
if (savedColor) {
    div.style.backgroundColor = savedColor;
}
function changeColor(color) {
    div.style.backgroundColor = color;
    localStorage.setItem("Color", color);
}

blue.onclick = function() {
    changeColor("blue");
}
red.onclick = function() {
    changeColor("red");
}
purple.onclick = function() {
    changeColor("purple");
} 
yellow.onclick = function() {
    changeColor("yellow");
}
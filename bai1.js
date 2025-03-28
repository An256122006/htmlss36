let input=document.getElementById("input");
let btn=document.getElementById("luu");
let body=document.getElementById("body");
let head=document.getElementById("head");
let inputvalue=localStorage.getItem("value");
if(!inputvalue){
    head.style.display="block";
}else{
  head.style.display="none";
  body.style.display="flex";
  body.innerHTML=`<h1>👋 Chào bạn, ${inputvalue}!</h1> <div><button onclick="up()">doi ten</button></div>`;
}
function up(){
    head.style.display="block";
    body.style.display="none";
};
function save(){
    localStorage.setItem("value",inputvalue);
};
btn.onclick=function(){
    inputvalue=input.value;
    save();
    head.style.display="none";
    body.style.display="flex";
    body.innerHTML=`<h1>👋 Chào bạn, ${inputvalue}!</h1> <div><button onclick="up()">doi ten</button></div>`;
    inputvalue="";
};
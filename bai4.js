let arr = JSON.parse(localStorage.getItem("arrlist5")) || [
    { id: 1, names: "laptop", price: 15000000, img: "https://laptop88.vn/media/product/7475_photo_2022_08_05_17_25_57.jpg" },
    { id: 2, names: "giay sneaker", price: 1500000, img: "https://product.hstatic.net/200000456065/product/artboard_2_cef0ebb13d4d46cf9c0470f2bbfa8172.png" },
    { id: 3, names: "dong ho", price: 2000000, img: "https://bizweb.dktcdn.net/100/175/988/articles/rolex-daytona-rainbow-4-of-5-min.jpg?v=1561811575807" }];
let body = document.getElementById("body");
let btn=document.getElementById("btn");
function add() {
    body.innerHTML = "";
    arr.forEach(element => {
        body.innerHTML += `
        <div class="row">
            <img src="${element.img}">
            <div class="row2">
               <div><b>${element.names}</b></div>
               <div class="a">${element.price.toLocaleString('vi-VN')}</div>
               <button class="btn2">Mua ngay</button>
            </div>
        </div>
        `
    });
};
add();
btn.onclick=function(){
    document.body.classList.toggle("b");
    document.getElementById("head").classList.toggle("c");
    document.querySelectorAll(".row2").forEach(element => {
        element.classList.toggle("c");
    });
}
let arr = JSON.parse(localStorage.getItem("arrlist4")) || [
    { id: 1, names: "bun bo hue", img: "https://www.marionskitchen.com/wp-content/uploads/2021/09/Bun-Bo-Hue8627-1200x1500.jpg", like: 0 },
    { id: 2, names: "pho bo", img: "https://hidafoods.vn/wp-content/uploads/2024/01/nau-pho-bo-nam-dinh-1.jpg", like: 0 },
    { id: 3, names: "com tam sai gon", img: "https://images2.thanhnien.vn/528068263637045248/2024/7/1/anh-man-hinh-2024-07-01-luc-113638-17198087615431007741437.png", like: 0 }
];

let body = document.getElementById("body");

function save() {
    localStorage.setItem("arrlist4", JSON.stringify(arr));
}

function add() {
    body.innerHTML = "";
    arr.forEach((element) => {
        body.innerHTML += `
           <div class="row">
           <img src="${element.img}">
            <div class="row2">
                <div class="row3">${element.names}</div>
                <p>❤️ ${element.like} luot thich</p>
                <button onclick="like(${element.id})">Like</button>
            </div>
           </div>
        `;
    });
    save();
}

function like(id) {
    let index = arr.findIndex(element => element.id == id);
    if (index !== -1) {
        arr[index].like++;
        add();
    }
}

add();

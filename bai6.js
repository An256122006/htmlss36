const stars = document.querySelectorAll(".stars");
const ratingDisplay = document.getElementById("selected-rating");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

let selectedRating = 0;
let arr = JSON.parse(localStorage.getItem("productReviews")) || [];

addReviews();

stars.forEach(star => {
    star.onclick = function () {
        selectedRating = parseInt(this.getAttribute("data-value"));
        updateStars(selectedRating);
        ratingDisplay.innerText = `Bạn đã đánh giá: ${selectedRating} sao`;
    };
});

function updateStars(rating) {
    stars.forEach(star => {
        let starValue = parseInt(star.getAttribute("data-value"));
        if (starValue <= rating) {
            star.style.color = "gold";
        } else {
            star.style.color = "gray";
        }
    });
}
function submitReview() {
    let commentText = commentInput.value.trim();

    if (selectedRating === 0) {
        alert("Vui lòng chọn số sao trước khi gửi!");
        return;
    }

    if (!commentText) {
        alert("Vui lòng nhập bình luận!");
        return;
    }

    let newReview = {
        rating: selectedRating,
        comment: commentText
    };

    arr.push(newReview);
    localStorage.setItem("productReviews", JSON.stringify(arr));

    addReviews();
    commentInput.value = "";
}
function addReviews() {
    commentList.innerHTML = "";
    arr.forEach(element => {
        commentList.innerHTML += `
            <div class="commentss">
                <div style="color: gold;">${"★".repeat(element.rating)}</div>
                <div>${element.comment}</div>
            </div>
        `;
    });
}

const stars = document.querySelectorAll(".stars");
const ratingDisplay = document.getElementById("selected-rating");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");
let selectedRating = 0; 
let reviews = JSON.parse(localStorage.getItem("productReviews")) || [];
displayReviews();
stars.forEach(star => {
    star.onclick=function(){
        selectedRating = this.getAttribute("data-value");
        updateStars(selectedRating);
        ratingDisplay.innerText = `Bạn đã đánh giá: ${selectedRating} sao`;
    };
});
function updateStars(rating) {
    stars.forEach(star => {
        let starValue = star.getAttribute("data-value");
        if (starValue <= rating) {
            star.style.color = "gold"; 
        } else {
            star.style.color = "gray"; 
        }
    });
};
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

    let review = {
        rating: selectedRating,
        comment: commentText
    };

    reviews.push(review);
    localStorage.setItem("productReviews", JSON.stringify(reviews));

    displayReviews();
    commentInput.value = ""; 
}


function displayReviews() {
    commentList.innerHTML = ""; 
    reviews.forEach(review => {
        commentList.innerHTML+=`
               <diV class="commentss">
                 <div style="color: gold;">${"★".repeat(review.rating)}</div>
                 <div>${review.comment}</div>
               </diV>
        `
    });
};

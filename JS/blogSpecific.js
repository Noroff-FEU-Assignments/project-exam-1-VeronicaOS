import fetchPosts from "./fetchPosts.js";

const recipeContent = document.querySelector(".main-content");
const title = document.querySelector(".title");
const date = document.querySelector(".date");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const post = await fetchPosts(`/${id}`);

recipeContent.innerHTML = post.content.rendered;

title.textContent = post.title.rendered;

const postDate = post.date.slice(0, 10);
const currentDate = new Date(postDate);
const currentDay = currentDate.getDate();
const curDay = currentDay < 10 ? "0" + currentDay : currentDay;
const currentMonth = currentDate.toLocaleString(`default`, {
    month: "long",
});
const currentYear = currentDate.getFullYear();
const curDate = `${curDay}. ${currentMonth} ${currentYear}`;

date.textContent = curDate;

// MODAL

const original = document.querySelectorAll(".wp-block-image");
const modal = document.querySelector(".modal-container");
const popup = document.querySelector(".modal");

original.forEach((image) => {
    const getImgHTML = image.innerHTML;
    image.addEventListener("click", () => {
        modal.showModal();
        popup.innerHTML = getImgHTML;
    });
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.close();
    }
});

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

date.textContent = post.date.slice(0, 10);

// MODAL

const original = document.querySelectorAll(".popup img");
const popup = document.querySelector(".popup-img");
const imag = document.querySelector("popup-img img");
const API = document.querySelector(".popup")

popup.innerHTML += `<img src="${postImg}" alt=""></img>`

original.forEach((image) => {
    image.onclick = () => {
        popup.style.display = "block";
        image.src = image.getAttribute("src");
    };
});

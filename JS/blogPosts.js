import fetchPosts from "./fetchPosts.js";
import recipePost from "./recipePost.js";

const recipeContainer = document.querySelector(".posts");
const allPosts = document.querySelector(".all-posts");
const viewMoreBtn = document.querySelector(".view-more-btn");

const posts = await fetchPosts();

posts.sort((a, b) => {
    return new Date(b.date.slice(0, 10)) - new Date(a.date.slice(0, 10));
});

posts.forEach((post, i) => {
    if (i < 9) {
        recipePost(post, allPosts);
    }
});

viewMoreBtn.addEventListener("click", () => {
    for (let i = 9; i < posts.length; i++) {
        recipePost(posts[i], allPosts);
    }

    viewMoreBtn.style.display = "none";
});

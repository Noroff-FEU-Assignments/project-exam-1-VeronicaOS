import fetchPosts from "./fetchPosts.js";
import recipePosts from "./recipePost.js";

async function loadPosts() {
    const productContainer = document.querySelector(".latest-posts .latestPosts"); // Corrected selector
    const nxtBtn = document.querySelector(".next");
    const backBtn = document.querySelector(".prev");
    const recipeContainer = document.querySelector(".posts");
    const popularContainer = document.querySelector(".most-popular");

    const posts = await fetchPosts();

    posts.sort((a, b) => {
        return new Date(b.date.slice(0, 10)) - new Date(a.date.slice(0, 10));
    });

    posts.forEach((post) => recipePosts(post, recipeContainer));

    let position = 0;

    nxtBtn.addEventListener("click", () => {
        if (position >= posts.length - 4) return;
        position++;
        productContainer.style.transform = `translateX(-${position * 232}px)`;
    });

    backBtn.addEventListener("click", () => {
        if (position <= 0) return;
        position--;
        productContainer.style.transform = `translateX(-${position * 232}px)`;
    });

    for (let i = 8; i < 12 && i < posts.length; i++) { // Added condition to avoid accessing posts beyond the array length
        recipePosts(posts[i], popularContainer); 
    }
}

loadPosts();

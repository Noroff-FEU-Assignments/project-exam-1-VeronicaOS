import fetchPosts from "./fetchPosts.js";
import recipePost from "./recipePost.js";

const recipeContainer = document.querySelector(".posts");
const allPosts = document.querySelector(".all-posts");
const viewMoreBtn = document.querySelector(".view-more-btn");
const totalNumber = document.querySelector(".number");
const resultsContainer = document.querySelector(".results");

try {
    const posts = await fetchPosts();
    document.querySelector(".loading-container").remove()

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

        totalNumber.textContent = posts.length;

        viewMoreBtn.style.display = "none";
    });
} catch (error) {
    resultsContainer.innerHTML = `<div class="error-msg">AN ERROR OCCURED</div>`;
}

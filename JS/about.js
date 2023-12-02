import fetchPosts from "./fetchPosts.js";
import recipePosts from "./recipePost.js";

const recipeContainer = document.querySelector(".posts");
const favourites = document.querySelector(".favourite-posts");
const resultsContainer = document.querySelector(".results");

try {
    const posts = await fetchPosts();
    document.querySelector(".loading-container").remove()

    let position = 0;

    for (let i = 6; i < 10; i++) {
        recipePosts(posts[i], recipeContainer);
    }
} catch (error) {
    resultsContainer.innerHTML = `<div class="error-msg">AN ERROR OCCURED</div>`;
}

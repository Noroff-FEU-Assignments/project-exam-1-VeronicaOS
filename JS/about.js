import fetchPosts from "./fetchPosts.js";
import recipePosts from "./recipePost.js";

const recipeContainer = document.querySelector(".posts");
const favourites = document.querySelector(".favourite-posts");

const posts = await fetchPosts();

let position = 0;

for (let i = 6; i < 10; i++) {
    recipePosts(posts[i], recipeContainer);
}

export default function recipePost(post, container) {
const postImg = post.better_featured_image.source_url;
const postTitle = post.title.rendered;
const postDate = post.date.slice(0, 10);
container.innerHTML += 
`<figure class="post">
<img src="${postImg}" alt="">
<figcaption class="recipe-details">
    <p class="big">${postTitle}</p>
    <p class="small">${postDate}</p>
    <button type="button">READ MORE</button>
</figcaption>
</figure>`



}
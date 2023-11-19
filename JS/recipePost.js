export default function recipePost(post, container) {
    const postImg = post.better_featured_image.source_url;
    const postTitle = post.title.rendered;
    const postDate = post.date.slice(0, 10);
    const currentDate = new Date(postDate);
    const currentDay = currentDate.getDate();
    const curDay = currentDay < 10 ? "0" + currentDay : currentDay;
    const currentMonth = currentDate.toLocaleString(`default`, {
        month: "long",
    });
    const currentYear = currentDate.getFullYear();
    console.log(curDay, currentMonth, currentYear);
    const curDate = `${curDay}. ${currentMonth} ${currentYear}`

    container.innerHTML += `<figure class="post">
<img src="${postImg}" alt="">
<figcaption class="recipe-details">
    <p class="big">${postTitle}</p>
    <p class="small">${curDate}</p>
    <a href="blog-specific.html?id=${post.id}"><button type="button">READ MORE</button></a>
</figcaption>
</figure>`;
}

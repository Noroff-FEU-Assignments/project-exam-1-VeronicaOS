const noroffUrl = "https://noroffcors.onrender.com/";
const blogPostUrl = "squareeyes.veronicaos.com/wp-json/wp/v2/posts";
const url = noroffUrl + blogPostUrl;

export default async function fetchPosts(id = "?per_page=20") {
    try {
        const response = await fetch(url + id);
        const posts = await response.json();
        return posts;
    } catch (error) {
        return error;
    }
}

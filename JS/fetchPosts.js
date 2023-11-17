const noroffUrl = "https://noroffcors.onrender.com/";
const blogPostUrl = "squareeyes.veronicaos.com/wp-json/wp/v2/posts?per_page=20";
const url = noroffUrl + blogPostUrl;

export default async function fetchPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    } catch (error) {
        return error;
    }
}

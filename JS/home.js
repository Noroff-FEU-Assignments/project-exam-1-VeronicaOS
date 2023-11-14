const productContainer = document.querySelector(".recipe-container");
const nxtBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");


let position = 0;

nxtBtn.addEventListener("click", () => {
    if (position >= 4) return;
    position++;
    productContainer.style.transform = `translateX(-${position * 232}px)`;
});

backBtn.addEventListener("click", () => {
    if (position <= 0) return;
    position--;
    productContainer.style.transform = `translateX(-${position * 232}px)`;
});

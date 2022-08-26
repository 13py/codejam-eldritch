import ancientsData from "./data/ancients.js";

const chooseAncients = document.querySelector(".choose-ancients"),
    difficultyBtns = document.querySelectorAll(".difficulty-selection-btns"),
    stages = document.querySelector(".stages");

function showAncients() {
    console.log(ancientsData[0]);
    let img = document.createElement("img");
    chooseAncients.appendChild(img);
    img.src = ancientsData[0].cardFace;
    img.addEventListener("click", () => {});
}

difficultyBtns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
        console.log(e.target.textContent, e.classList);
        e.target.classList.add("level-btn_active");
    });
});

showAncients();

// Math.floor(Math.random() * (20 - 1 + 1) + 1);
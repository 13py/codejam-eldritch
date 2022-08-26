import ancientsData from "./data/ancients.js";

const chooseAncients = document.querySelector(".choose-ancients"),
    difficultyBtns = document.querySelectorAll(".difficulty-selection-btns");

function showAncients() {
    console.log(ancientsData[0]);
    let img = document.createElement("img");
    chooseAncients.appendChild(img);
    img.src = ancientsData[0].cardFace;
    img.addEventListener("click", () => {
        alert("Привет Даня");
    });
}

difficultyBtns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    });
});

showAncients();
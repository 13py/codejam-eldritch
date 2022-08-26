import ancientsData from "./data/ancients.js";

const chooseAncients = document.querySelector(".choose-ancients");

function showAncients() {
    console.log(ancientsData[0]);
    let img = document.createElement("img");
    chooseAncients.appendChild(img);
    img.src = ancientsData[0].cardFace;
}

showAncients();
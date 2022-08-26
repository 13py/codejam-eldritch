import ancientsData from "./data/ancients.js";

const chooseAncients = document.querySelector(".choose-ancients"),
    difficultyBtns = document.querySelectorAll(".difficulty-selection-btns"),
    stages = document.querySelector(".stages"),
    stage1 = document.querySelector(".stage-1").querySelectorAll("div"),
    stage2 = document.querySelector(".stage-2").querySelectorAll("div"),
    stage3 = document.querySelector(".stage-3").querySelectorAll("div");

function showAncients() {
    console.log(ancientsData[0]);
    let img = document.createElement("img");
    chooseAncients.appendChild(img);
    img.src = ancientsData[0].cardFace;
    img.addEventListener("click", () => {});
    console.log(stage1);

    const curentAncient = ancientsData[0];

    // кол-во карт по цветам на каждом уровне
    let greenCardCount =
        curentAncient["firstStage"].greenCards +
        curentAncient["secondStage"].greenCards +
        curentAncient["thirdStage"].greenCards;
    let brownCardCount =
        curentAncient["firstStage"].brownCards +
        curentAncient["secondStage"].brownCards +
        curentAncient["thirdStage"].brownCards;
    let blueCardCount =
        curentAncient["firstStage"].blueCards +
        curentAncient["secondStage"].blueCards +
        curentAncient["thirdStage"].blueCards;
    console.log(greenCardCount, brownCardCount, blueCardCount);
    // отображаем кол - во карт по цветам
    stage1[0].textContent = ancientsData[0]["firstStage"].greenCards;
    stage1[1].textContent = ancientsData[0]["firstStage"].blueCards;
    stage1[2].textContent = ancientsData[0]["firstStage"].brownCards;
    stage2[0].textContent = ancientsData[0]["secondStage"].greenCards;
    stage2[1].textContent = ancientsData[0]["secondStage"].blueCards;
    stage2[2].textContent = ancientsData[0]["secondStage"].brownCards;
    stage3[0].textContent = ancientsData[0]["thirdStage"].greenCards;
    stage3[1].textContent = ancientsData[0]["thirdStage"].blueCards;
    stage3[2].textContent = ancientsData[0]["thirdStage"].brownCards;
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
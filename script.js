import ancientsData from "./data/ancients.js";
import brownCards from "./data/mythicCards/brown/index.js";
import blueCards from "./data/mythicCards/blue/index.js";
import greenCards from "./data/mythicCards/green/index.js";

console.log(brownCards);
const chooseAncients = document.querySelector(".choose-ancients"),
    difficultyBtns = document.querySelectorAll(".difficulty-selection-btns"),
    stages = document.querySelector(".stages"),
    stage1 = document.querySelector(".stage-1").querySelectorAll("div"),
    stage2 = document.querySelector(".stage-2").querySelectorAll("div"),
    stage3 = document.querySelector(".stage-3").querySelectorAll("div"),
    backgroundCard = document.querySelector(".background-card"),
    openCard = document.querySelector(".open-card");

let stageOneAllColorCard;
let stageTwoAllColorCard;
let stageThirdAllColorCard;

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

    let tempBlue = randomShoose(blueCardCount, blueCards);
    let tempGreen = randomShoose(greenCardCount, greenCards);
    let tempBrown = randomShoose(brownCardCount, brownCards);
    console.log(tempBlue, tempGreen, tempBrown);

    // рандомные карты всех цветов для одного этапа
    stageOneAllColorCard = shuffle([
        ...randomShoose(ancientsData[0]["firstStage"].blueCards, tempBlue),
        ...randomShoose(ancientsData[0]["firstStage"].greenCards, tempGreen),
        ...randomShoose(ancientsData[0]["firstStage"].brownCards, tempBrown),
    ]);
    stageTwoAllColorCard = shuffle([
        ...randomShoose(ancientsData[0]["secondStage"].blueCards, tempBlue),
        ...randomShoose(ancientsData[0]["secondStage"].greenCards, tempGreen),
        ...randomShoose(ancientsData[0]["secondStage"].brownCards, tempBrown),
    ]);
    stageThirdAllColorCard = shuffle([
        ...randomShoose(ancientsData[0]["thirdStage"].blueCards, tempBlue),
        ...randomShoose(ancientsData[0]["thirdStage"].greenCards, tempGreen),
        ...randomShoose(ancientsData[0]["thirdStage"].brownCards, tempBrown),
    ]);
    console.log(stageTwoAllColorCard, "BEFORE");
    // console.log(shuffle(stageTwoAllColorCard), "BEFORE!!!");
}

function shuffle(list) {
    // console.log(list, "do");
    for (let i = list.length - 1; i >= 0; i--) {
        let tempNum = list[i];
        // console.log(tempNum, "!!!!!", list.length - 1, i);
        let randomIndex = Math.floor(Math.random() * (i + 1));
        // alert(randomIndex);
        list[i] = list[randomIndex];
        list[randomIndex] = tempNum;
        // console.log(list, "v processe");
    }
    console.log(list, "posle");
    // list[0] = 10;
    return list;
}

function randomShoose(num, color) {
    let randomCards = [];
    let tempIndexList = [];
    while (tempIndexList.length < num) {
        let tempIndex = Math.floor(Math.random() * (color.length - 1) + 1);
        // let temtempIndexList = {};
        if (tempIndexList.indexOf(tempIndex) === -1) {
            tempIndexList.push(tempIndex);
            randomCards.push(color[tempIndex]);
        }

        // let card = color.splice(tempIndex, -1);
        // console.log(card, randomCards);
        // if (card != -1) {
        //     randomCards.push(card);
        // console.log(tempIndexList, "list");
    }

    console.log(tempIndexList, "list", color.length);
    return randomCards;
}

difficultyBtns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
        console.log(e.target.textContent, e.classList);
        e.target.classList.add("level-btn_active");
    });
});

let curentCard = document.querySelector(".card");

function showCards() {
    // let img = document.createElement("img");
    // openCard.appendChild(img);
    // console.log(stageOneAllColorCard, "carrrrrrrrrr");
    if (stageOneAllColorCard.length != 0) {
        // alert(stageOneAllColorCard.length);
        let card = stageOneAllColorCard.pop();
        console.log(card["color"], "cardddd");
        setCountColorCard(card, stage1);
        curentCard.src =
            "./assets/MythicCards/" + `${card["color"]}` + "/" + `${card["id"]}.png`;
    } else {
        if (stageTwoAllColorCard.length != 0) {
            // alert(stageTwoAllColorCard.length);
            let card = stageTwoAllColorCard.pop();
            console.log(card, "CARD");
            setCountColorCard(card, stage2);
            // setCountColorCard(card);
            curentCard.src =
                "./assets/MythicCards/" +
                `${card["color"]}` +
                "/" +
                `${card["id"]}.png`;
        } else {
            if (stageThirdAllColorCard.length != 0) {
                alert(stageThirdAllColorCard.length);
                let card = stageThirdAllColorCard.pop();
                setCountColorCard(card, stage3);
                curentCard.src =
                    "./assets/MythicCards/" +
                    `${card["color"]}` +
                    "/" +
                    `${card["id"]}.png`;
            } else {
                alert(all);
            }
        }
    }

    // alert();
}

function setCountColorCard(card, stage) {
    if (card["color"] == "green") {
        stage[0].textContent--;
    } else if (card["color"] == "blue") {
        stage[1].textContent--;
    } else if (card["color"] == "brown") {
        stage[2].textContent--;
    }
}
// setCountColorCard();
backgroundCard.addEventListener("click", showCards);
showAncients();

// Math.floor(Math.random() * (20 - 1 + 1) + 1);
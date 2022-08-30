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

function showCarsdAncients() {
    ancientsData.forEach((card, ind) => {
        let img = document.createElement("img");
        img.className = "ancients-img";
        // if (ind === 0) {
        //     img.classList.add("active");
        // }

        chooseAncients.appendChild(img);
        img.src = card.cardFace;
        img.addEventListener("click", () => {
            console.log(card, "SHOW CARD CHECK", ind, "INDEX", card["firstStage"]);
            showAncients(card);
            let imgAll = document.querySelectorAll(".ancients-img");
            imgAll.forEach((img) => {
                img.classList.remove("active");
            });
            img.classList.add("active");
        });
    });
}
showCarsdAncients();
// let ancientsImg = document.querySelectorAll(".ancients-img");
// ancientsImg.addEventListener("click", (e) => {
//     e.target.classList.add("active");
// });

function showAncients(card) {
    // console.log(ancientsData[0]);
    // let img = document.createElement("img");
    // chooseAncients.appendChild(img);
    // img.src = ancientsData[0].cardFace;
    // img.addEventListener("click", () => {});
    // showCarsdAncients();
    console.log(stage1);

    // const curentAncient = ancientsData[ind];

    // кол-во карт по цветам на каждом уровне
    let greenCardCount =
        card["firstStage"].greenCards +
        card["secondStage"].greenCards +
        card["thirdStage"].greenCards;
    let brownCardCount =
        card["firstStage"].brownCards +
        card["secondStage"].brownCards +
        card["thirdStage"].brownCards;
    let blueCardCount =
        card["firstStage"].blueCards +
        card["secondStage"].blueCards +
        card["thirdStage"].blueCards;
    console.log(greenCardCount, brownCardCount, blueCardCount);
    // отображаем кол - во карт по цветам
    stage1[0].textContent = card["firstStage"].greenCards;
    stage1[1].textContent = card["firstStage"].brownCards;
    stage1[2].textContent = card["firstStage"].blueCards;
    stage2[0].textContent = card["secondStage"].greenCards;
    stage2[1].textContent = card["secondStage"].brownCards;
    stage2[2].textContent = card["secondStage"].blueCards;
    stage3[0].textContent = card["thirdStage"].greenCards;
    stage3[1].textContent = card["thirdStage"].brownCards;
    stage3[2].textContent = card["thirdStage"].blueCards;

    let tempBlue = randomShoose(blueCardCount, blueCards);
    let tempGreen = randomShoose(greenCardCount, greenCards);
    let tempBrown = randomShoose(brownCardCount, brownCards);
    console.log(
        tempBlue,
        tempGreen,
        tempBrown,
        "перед вызовом shuffle",
        card["firstStage"].blueCards,
        tempBlue,
        tempGreen,
        tempBrown
    );
    // alert("перед вызовом shuffle", card["firstStage"].blueCards, tempBlue);
    // рандомные карты всех цветов для одного этапа
    stageOneAllColorCard = shuffle([
        ...randomShoose(card["firstStage"].blueCards, tempBlue),
        ...randomShoose(card["firstStage"].greenCards, tempGreen),
        ...randomShoose(card["firstStage"].brownCards, tempBrown),
    ]);
    stageTwoAllColorCard = shuffle([
        ...randomShoose(card["secondStage"].blueCards, tempBlue),
        ...randomShoose(card["secondStage"].greenCards, tempGreen),
        ...randomShoose(card["secondStage"].brownCards, tempBrown),
    ]);
    stageThirdAllColorCard = shuffle([
        ...randomShoose(card["thirdStage"].blueCards, tempBlue),
        ...randomShoose(card["thirdStage"].greenCards, tempGreen),
        ...randomShoose(card["thirdStage"].brownCards, tempBrown),
    ]);
    console.log(stageTwoAllColorCard, "BEFORE");
    // console.log(shuffle(stageTwoAllColorCard), "BEFORE!!!");
}

function shuffle(list) {
    // console.log(list, "do");
    // alert("shuffle");
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

    // console.log(tempIndexList, "list", color.length);
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
                let card = stageThirdAllColorCard.pop();
                setCountColorCard(card, stage3);
                curentCard.src =
                    "./assets/MythicCards/" +
                    `${card["color"]}` +
                    "/" +
                    `${card["id"]}.png`;
            } else {
                alert("Карты в колоде закончились!");
            }
        }
    }

    // alert();
}

function setCountColorCard(card, stage) {
    if (card["color"] == "green") {
        stage[0].textContent--;
    } else if (card["color"] == "brown") {
        stage[1].textContent--;
    } else if (card["color"] == "blue") {
        stage[2].textContent--;
    }
}
// setCountColorCard();
backgroundCard.addEventListener("click", showCards);
// showAncients();

// Math.floor(Math.random() * (20 - 1 + 1) + 1);
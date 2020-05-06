// Your code goes here

function select (item) {
    return document.querySelector(item);
}

function selects (item) {
    return document.querySelectorAll(item);
}

let selectAll = select ("*");
let container = select (".container");
let header = select ("header");
let navLinks = selects (".nav-link");
let intro = select (".intro");
let content1 = select (".content-section");
let content2 = select (".inverse-content");
let contentDestination = select (".content-destination");
let contentPick = select (".content-pick");
let btns = selects (".btn");
let btn = select (".btn");
let btn2 = btns[1];
let btn3 = btns[2];
let footer = select ("footer");




function invert (event) {
    content1.classList.add("inverse-content");
}
content1.addEventListener("mouseover", invert);



function blackBackground (event) {
    document.firstElementChild.style.backgroundColor = "black";
}
btn.addEventListener("click", blackBackground);



function secondBtn (event) {
    document.firstElementChild.style.backgroundColor = "teal";
}
btn2.addEventListener("click", secondBtn);



function thirdBtn (event) {
    document.firstElementChild.style.backgroundColor = "coral";
}
btn3.addEventListener("click", thirdBtn);




function removeHeader (event) {
    header.style.display = "none";
}
header.addEventListener("dblclick", removeHeader);



function removeIntro (event) {
    intro.style.display = "none";
}
intro.addEventListener("drag", removeIntro);



function greenBackground (event) {
    if (event.key === "Escape") {
        document.firstElementChild.style.backgroundColor = "green";

    }
}
document.addEventListener("keydown", greenBackground);



function displayNone (event) {
    document.firstElementChild.style.display = "none";
}
document.addEventListener("languagechange", displayNone);




function maxWidth (event) {
    container.style.maxWidth = "auto";
}
window.addEventListener("pointermove", maxWidth);




function bigFont (event) {
    selectAll.style.fontSize = "900%";
}
document.addEventListener("copy", bigFont);




function smallFont (event) {
    selectAll.style.fontSize = "62.5%";
}
document.addEventListener("paste", smallFont);



function blueBackground (event) {
    document.firstElementChild.style.backgroundColor = "blue";
}
document.addEventListener("scroll", blueBackground);



function whiteBackground (event) {
    selectAll.style.backgroundColor = "white";
}
document.addEventListener("wheel", whiteBackground);


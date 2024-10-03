console.log("test is working");

let testValue = document.querySelector('#r1#v_lundi');
let weekDay = document.querySelector('#week_day').children // this is a HTMLcollection of header tag
let assignements = document.querySelectorAll('.assignement') // this is a nodeList of header tag
let testArray = Array.from(weekDay);
let aDay = testArray[2].innerHTML;
//
const dailyCharge = {}
const jsonData = {
    "lundi": {},
    "mardi": {},
    "mercredi": {},
    "jeudi": {},
    "vendredi": {}
}

// document.querySelector('.r2 .assignement').value
let classSelector, assignement;
const tempObject = {};
for (let index = 0; index < 2; index++) {
    classSelector = '.r' + (index + 1) + ' .assignement';
    assignement = document.querySelector(classSelector).value;
    console.log(classSelector + " " + assignement);
    if (index === 0) {
        tempObject[assignement] = "test_lundi"
        jsonData.lundi = tempObject;
    }/* 
    if (index === 1) {
        tempObject[assignement] = "test_mardi"
        jsonData.lundi = tempObject
    } */
}
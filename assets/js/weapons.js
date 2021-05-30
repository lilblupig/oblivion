
const _daggersList = [
    "Rusty Iron Dagger",
    "Iron Dagger",
    "Fine Iron Dagger",
    "Steel Dagger",
    "Fine Steel Dagger",
    "Silver Dagger",
    "Dwarven Dagger",
    "Elven Dagger",
    "Glass Dagger",
    "Ebony Dagger",
    "Daedric Dagger"
];

const _shortSwordsList = [
    "Rusty Iron Shortsword",
    "Iron Shortsword ",
    "Fine Iron Shortsword",
    "Steel Shortsword ",
    "Fine Steel Shortsword",
    "Silver Shortsword",
    "Dwarven Shortsword",
    "Elven Shortsword",
    "Glass Shortsword",
    "Ebony Shortsword",
    "Daedric Shortsword"
];

const _longSwordsList = [
    "Rusty Iron Longsword",
    "Iron Longsword ",
    "Fine Iron Longsword",
    "Steel Longsword ",
    "Fine Steel Longsword",
    "Silver Longsword",
    "Dwarven Longsword",
    "Elven Longsword",
    "Glass Longsword",
    "Ebony Longsword",
    "Daedric Longsword"
];

const _otherOneHList = [
    "Akaviri Katana",
    "Ancient Akaviri Katana",
    "Ruined Akaviri Katana",
    "Steel Cutlass",
    "Sharpened Cutlass"
];

window.onload = listLists();

function listLists() {
    fillLists(_daggersList,"daggers-list");
    fillLists(_shortSwordsList,"shortswords-list");
    fillLists(_longSwordsList,"longswords-list");
    fillLists(_otherOneHList,"other-one-handed-list");
}

function fillLists(thingList,destination) {
    for (i = 0; i < thingList.length; i++) {
        let listItem = document.createElement("button");
        listItem.innerHTML = thingList[i];
        listItem.classList.add("btn", "tracker-btn", "things");

        let destinationBucket = document.getElementById(destination);
        destinationBucket.appendChild(listItem);
    }
}
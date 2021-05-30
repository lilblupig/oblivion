
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
    "Steel Shortsword",
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
    "Iron Longsword",
    "Fine Iron Longsword",
    "Steel Longsword",
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

const _claymoresList = [
    "Iron Claymore",
    "Fine Iron Claymore",
    "Steel Claymore",
    "Fine Steel Claymore",
    "Silver Claymore",
    "Dwarven Claymore",
    "Elven Claymore",
    "Glass Claymore",
    "Ebony Claymore",
    "Daedric Claymore"
];

const _otherTwoHList = [
    "Akaviri Dai Katana"
];

const _macesList = [
    "Rusty Iron Mace",
    "Iron Mace",
    "Fine Iron Mace",
    "Steel Mace",
    "Fine Steel Mace",
    "Silver Mace",
    "Dwarven Mace",
    "Elven Mace",
    "Glass Mace",
    "Ebony Mace",
    "Daedric Mace"
];

const _warAxesList = [
    "Rusty Iron War Axe",
    "Iron War Axe",
    "Fine Iron War Axe",
    "Steel War Axe",
    "Fine Steel War Axe",
    "Silver War Axe",
    "Dwarven War Axe",
    "Elven War Axe",
    "Glass War Axe",
    "Ebony War Axe",
    "Daedric War Axe"
];

const _battleAxesList = [
    "Iron Battle Axe",
    "Fine Iron Battle Axe",
    "Steel Battle Axe",
    "Fine Steel Battle Axe",
    "Silver Battle Axe",
    "Dwarven Battle Axe",
    "Elven Battle Axe",
    "Glass Battle Axe",
    "Ebony Battle Axe",
    "Daedric Battle Axe"
];

const _warhammersList = [
    "Iron Warhammer",
    "Fine Iron Warhammer",
    "Steel Warhammer",
    "Fine Steel Warhammer",
    "Silver Warhammer",
    "Dwarven Warhammer",
    "Elven Warhammer",
    "Glass Warhammer",
    "Ebony Warhammer",
    "Daedric Warhammer"
];

const _bowsList = [
    "Rusty Iron Bow",
    "Iron Bow",
    "Fine Iron Bow",
    "Steel Bow",
    "Fine Steel Bow",
    "Silver Bow",
    "Black Bow",
    "Dwarven Bow",
    "Elven Bow",
    "Glass Bow",
    "Ebony Bow",
    "Daedric Bow"
];

const _arrowsList = [
    "Iron Arrow",
    "Steel Arrow",
    "Silver Arrow",
    "Dwarven Arrow",
    "Elven Arrow",
    "Glass Arrow",
    "Ebony Arrow",
    "Daedric Arrow",
];

window.onload = listLists();

function listLists() {
    fillLists(_daggersList,"daggers-list");
    fillLists(_shortSwordsList,"shortswords-list");
    fillLists(_longSwordsList,"longswords-list");
    fillLists(_otherOneHList,"other-one-handed-list");
    fillLists(_claymoresList,"claymores-list");
    fillLists(_otherTwoHList,"other-two-handed-list");
    fillLists(_macesList,"maces-list");
    fillLists(_warAxesList,"war-axes-list");
    fillLists(_battleAxesList,"battle-axes-list");
    fillLists(_warhammersList,"warhammers-list");
    fillLists(_bowsList,"bows-list");
    fillLists(_arrowsList,"arrows-list");
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
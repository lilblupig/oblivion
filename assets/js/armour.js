/* Armour Lists */

const _roughLeatherList = [
    "Rough Leather Helmet",
    "Rough Leather Cuirass",
    "Rough Leather Gauntlets",
    "Rough Leather Boots",
    "Rough Leather Shield"
];

const _furList = [
    "Fur Helmet",
    "Fur Cuirass",
    "Fur Greaves",
    "Fur Gauntlets",
    "Fur Boots",
    "Fur Shield"
];

const _leatherList = [
    "Leather Helmet",
    "Leather Cuirass",
    "Leather Greaves",
    "Leather Gauntlets",
    "Leather Boots",
    "Leather Shield",
    "Leather Bracers"
];

const _chainmailList = [
    "Chainmail Helmet",
    "Chainmail Cuirass",
    "Chainmail Greaves",
    "Chainmail Gauntlets",
    "Chainmail Boots",
    "Light Iron Shield"
];

const _mithrilList = [
    "Mithril Helmet",
    "Mithril Cuirass",
    "Mithril Greaves",
    "Mithril Gauntlets",
    "Mithril Boots",
    "Mithril Shield"
];

const _elvenList = [
    "Elven Helmet",
    "Elven Cuirass",
    "Elven Greaves",
    "Elven Gauntlets",
    "Elven Boots",
    "Elven Shield"
];

const _glassList = [
    "Glass Helmet",
    "Glass Cuirass",
    "Glass Greaves",
    "Glass Gauntlets",
    "Glass Boots",
    "Glass Shield"
];

const _rustyIronList = [
    "Rusty Iron Helmet",
    "Rusty Iron Cuirass",
    "Rusty Iron Greaves",
    "Rusty Iron Gauntlets",
    "Rusty Iron Shield"
];

const _ironList = [
    "Iron Helmet",
    "Iron Cuirass",
    "Iron Greaves",
    "Iron Gauntlets",
    "Iron Boots",
    "Iron Shield"
];

const _steelList = [
    "Steel Helmet",
    "Steel Cuirass",
    "Steel Greaves",
    "Steel Gauntlets",
    "Steel Boots",
    "Steel Shield"
];

const _dwarvenList = [
    "Dwarven Helmet",
    "Dwarven Cuirass",
    "Dwarven Greaves",
    "Dwarven Gauntlets",
    "Dwarven Boots",
    "Dwarven Shield"
];

const _orcishList = [
    "Orcish Helmet",
    "Orcish Cuirass",
    "Orcish Greaves",
    "Orcish Gauntlets",
    "Orcish Boots",
    "Orcish Shield"
];

const _ebonyList = [
    "Ebony Helmet",
    "Ebony Cuirass",
    "Ebony Greaves",
    "Ebony Gauntlets",
    "Ebony Boots",
    "Ebony Shield"
];

const _daedricList = [
    "Daedric Helmet",
    "Daedric Cuirass",
    "Daedric Greaves",
    "Daedric Gauntlets",
    "Daedric Boots",
    "Daedric Shield"
];
    
window.onload = listLists();

function listLists() {
    fillLists(_roughLeatherList,"rough-leather-list");
    fillLists(_furList,"fur-list");
    fillLists(_leatherList,"leather-list");
    fillLists(_chainmailList,"chainmail");
    fillLists(_mithrilList,"mithril");
    fillLists(_elvenList,"elven");
    fillLists(_glassList,"glass");
    fillLists(_rustyIronList,"rusty-iron");
    fillLists(_ironList,"iron");
    fillLists(_steelList,"steel");
    fillLists(_dwarvenList,"dwarven");
    fillLists(_orcishList,"orcish");
    fillLists(_ebonyList,"ebony");
    fillLists(_daedricList,"daedric");
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
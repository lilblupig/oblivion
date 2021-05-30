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
    
window.onload = listLists();

function listLists() {
    fillLists(_roughLeatherList,"rough-leather-list");
    fillLists(_furList,"fur-list");
    fillLists(_leatherList,"leather-list");
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
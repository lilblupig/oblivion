/* Gate Lists */

const _blackwood = {
    "10": "Southwest of where the map labels the Panther River, south of Welke",
    "11": "Northeast of Leyawiin, east of Fieldhouse Cave",
    "12": "Immediately southeast of Arpenia",
    "13": "North of Leyawiin along the Yellow Road, northwest of Blankenmarch",
    "15": "Immediately north of Leyawiin",
    "17": "Southeast of Leyawiin between Darkfathom Cave and Fort Blueblood",
    "18": "Southeast of Leyawiin and southwest of Fort Blueblood, on the coast of Topal Bay",
    "19": "Southeast of Leyawiin, east of Bogwater",
    "20": "Far southeast of Leyawiin, on a little peninsula in Topal Bay",
    "21": "Southeast of Bravil, southwest of the Mouth of the Panther",
    "22": "North of Leyawiin, along the Green Road",
    "23": "South of Morahame, on the peninsula right next to the bridge"
}

const _colovianHighlands = {
    "24": "North of Chorrol and Hrotanda Vale, slightly southeast of Lipsand Tarn",
    "25": "Immediately west of Chorrol",
    "26": "Southwest of Chorrol, west of Wendir",
    "28": "Immediately north of Kvatch",
    "29": "A little northeast of Kvatch",
    "30": "Far northwest of Kvatch, northeast of Trumbe",
    "31": "Southwest of Varondo",
    "32": "Northeast of Varondo, southwest of Fort Ontus",
    "33": "Southwest of Fort Dirich",
    "34": "Northwest of Fort Dirich, southeast of Nonungalo",
    "35": "Northeast of Fort Ontus",
    "36": "East of Fort Rayles",
    "37": "Slightly north of the western end of the Black Road, southwest of Fort Rayles"
}

const _goldCoast = {
    "39": "Slightly northwest of Garlas Agea",
    "40": "Southeast of Anvil, south of Fort Strand",
    "41": "Far north of Anvil, east of Beldaburo",
    "42": "Southeast of Anvil, south of Troll Candle Camp",
    "43": "North of Fort Sutch, west of Niryastare"
}

const _greatForest = {
    "44": "South of Bruma, where the Silver and Orange Roads meet",
    "45": "Far southwest of Bruma along the Red Ring Road, slightly southwest of Piukanda",
    "46": "Far south of Bruma along the Silver Road, west of Sercen",
    "47": "Northwest of Bravil, slightly east of Wenyandawik",
    "48": "Northwest of Bravil, slightly northwest of Wenyandawik",
    "49": "Far northwest of Bravil, southwest of Nenyond Twyll",
    "50": "Immediately west of the White Rose River, northwest of Fort Roebeck",
    "51": "Immediately east of the White Rose River, northeast of Fort Roebeck",
    "52": "Southeast of Fort Wooden Hand, northwest of Ceyatatar",
    "53": "A little northwest of Fort Nikel",
    "56": "Northeast of Fort Chalman, northwest of Harm's Folly",
    "57": "Northeast of Belda, east of Harm's Folly",
    "58": "East of Chorrol, slightly northwest of Fort Ash",
    
}

const _heartlands = {
    "59": "Southeast of the Arcane University on City Isle ",
    "60": "Immediately northeast of Vilverin ",
    "61": "Northwest of Roland Jenseric's Cabin ",
    "62": "East of the Imperial City, southwest of Nagastani ",
    "63": "Southeast of the Imperial City, slightly west of Cracked Wood Cave ",
    "64": "Southeast of the Imperial City, south of Culotte ",
    "66": "Far north of Bravil and a little north of Fort Variela, near the Upper Niben ",
}

const _jerallMountains = {
    "67": "Far North of Chorrol, northeast of Lipsand Tarn ",
    "68": "West of Bruma, south of Rielle, slightly south of Applewatch ",
    "70": "Far east of Bruma and due north of Cheydinhal (a short walk west of Temple of the Ancestor Moths) ",
    "71": "A little southeast of Sedor, slightly west of Gutted Mine ",
    "72": "West of Bruma, northeast of Ninendava Ruins ",

}

const _nibenayBasin = {
    "73": "A little north of Cheydinhal, slightly east of Wind Range Camp ",
    "74": "Southeast of Cheydinhal, near the Reed River ",
    "75": "Southwest of Cheydinhal, near Lake Poppad ",
    "76": "South of Cheydinhal, near the river fork ",
    "77": "South of Wenderbek Cave, almost exactly between Cracked Wood Cave and Crayfish Cave ",
    "78": "East of Fort Cedrian, far south of Cheydinhal ",
    "79": "Further south from the previous gate, between Sage Glen Hollow and Bramblepoint Cave ",
    "80": "Southwest of Hame ",
    "81": "South of Fort Facian ",
    "82": "East of Ondo, slightly north of Lost Boy Cavern ",
    "83": "South of Fort Cuptor, north of Leafrot Cave ",
    "84": "Southeast of Malada, northeast of Abandoned Mine ",
    "85": "North of Fort Sejanus ",
}

const _nibenayValley = {
    "86": "East of Morahame ",
}

const _valusMountains = {
    "87": "Northeast of Cheydinhal, north of Kemen ",
}

const _westWeald = {
    "88": "Northwest of Skingrad, southwest of Bleak Flats Cave ",
    "89": "East of Skingrad and southwest of Fort Vlastarus ",
    "90": "Northeast of Skingrad along the Gold Road ",
    "91": "Southeast of Skingrad, slightly east of Silorn ",
    "92": "West of Skingrad, slightly southwest of Cursed Mine ",
    "94": "Far south of Kvatch near the Strid River ",
    "95": "Far southeast of Skingrad, just southwest of the Priory of the Nine ",
    "96": "Halfway between Skingrad and Bravil, destroying the Isolated House ",
    "97": "East of Nornalhorst ",
    "98": "Along the Gold Road west from Skingrad, slightly southwest of Fat Ramp Camp ",
}

window.onload = listLists();

function listLists() {
    fillLists(_blackwood,"blackwood");
    fillLists(_colovianHighlands,"colovian-highlands");
    fillLists(_goldCoast,"gold-coast");
    fillLists(_greatForest,"great-forest");
    fillLists(_heartlands,"heartlands");
    fillLists(_jerallMountains,"jerall-mountains");
    fillLists(_nibenayBasin,"nibenay-basin");
    fillLists(_nibenayValley,"nibenay-valley");
    fillLists(_valusMountains,"valus-mountains");
    fillLists(_westWeald,"west-weald");
}

function fillLists(thingList,destination) {
    let thingKeys = Object.keys(thingList); // Define length of object by listing objects keys as array
    let thingValues = Object.values(thingList);

    for (i = 0; i < thingKeys.length; i++) {
        let listDescription = document.createElement("p");
        listDescription.innerHTML = `<p><button class="btn tracker-btn">Gate ${thingKeys[i]}</button>${thingValues[i]}</p>`

        let destinationBucket = document.getElementById(destination);
        destinationBucket.appendChild(listDescription);
    }
}
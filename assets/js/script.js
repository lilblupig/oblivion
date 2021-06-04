// Retrieve local storage data for previous selections
window.onload = getStatus();
window.onload = getCommon();

function getStatus() {
    /* Get inner HTML of all elements with the class tracker-btn and make them into an array
        https://stackoverflow.com/questions/58222496/how-can-i-have-an-array-of-the-html-content-of-a-jquery-element */
    let possibilities = $('.tracker-btn').toArray().map(button => button.innerHTML);

    /* Loop through array:
        Find element in HTML containing array value
        Use array value to find any local storage data and add that class
        */ https://stackoverflow.com/questions/9424509/how-do-i-select-a-span-containing-an-exact-text-value-using-jquery?noredirect=1&lq=1
    for (let i = 0; i < possibilities.length; i++) {
        // 
        $("button").filter(function() {
            return $(this).text() === possibilities[i];}).addClass(localStorage.getItem(possibilities[i]));
    }
}

/* Event listener for button clicks */
const buttons = document.querySelectorAll(".tracker-btn"); // Get all elements with the class 'tracker-btn'

buttons.forEach(function(button) {
    button.addEventListener("click",function(event) {

        // Get all classes currently active on clicked item
        let classes = event.currentTarget.classList;
        let status;

        // Apply classes in cycle - unfound, found & explored
        if (classes.contains("reset-btn")) { // Reset local storage and all indicator classes
            localStorage.clear();
            $(".tracker-btn").removeClass("found");
            $(".tracker-btn").removeClass("explored");
        } else if (classes.contains("things")) {
            if (classes.contains("found")) { // Apply indicator classes and set value to be used for local storage key
                $(this).removeClass("found");
                status = "unfound";
            } else {
                $(this).addClass("found");
                status = "found";
            }
        } else if (classes.contains("found")) { // Apply indicator classes and set value to be used for local storage key
            $(this).removeClass("found");
            $(this).addClass("explored");
            status = "explored";
        } else if (classes.contains("explored")) {
            $(this).removeClass("explored");
            status = "unfound";
        } else {
            $(this).addClass("found");
            status = "found";
        }

        let storeKey = $(this).html(); // Set value for local storage key

        if (status === "unfound") { // If status is unfound then remove from local storage (default status)
            localStorage.removeItem(storeKey);
        } else { // Otherwise, set the status to local storage
            localStorage.setItem(storeKey, status);
        }
    })
})

function getCommon() {
    let findHead = document.getElementById("head");
    findHead.innerHTML = 
    `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Oblivion, Elder Scrolls, RPG, Open world, Quest tracker">
    <meta name="description" content="Progress tracker for the Bethesda game Oblivion">
    <link rel="icon" href="assets/images/favicon.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Oblivion Tracker</title>`;

    let findNav = document.getElementById("nav");
    findNav.innerHTML =
    `<div class="container-fluid nav-container">
    <div class="row justify-content-md-center">
      <div class="col-auto g-md-0">
        <a href="index.php" class="nav-link logo px-0 px-md-3">Oblivion Tracker</a>
      </div>
      <div class="col d-md-none text-end">
        <button class="hamburger" type="button" data-bs-toggle="collapse"
            data-bs-target="#pagenavlinks" aria-expanded="false"  aria-controls="pagenavlinks"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon page-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse col-md-auto g-0" id="pagenavlinks">
        <div class="nav flex-column flex-md-row">
          <a href="weapons.html" class="nav-link quick-link">Weapons</a>
          <a href="armour.html" class="nav-link quick-link">Armour</a>
          <a href="" class="nav-link quick-link disabled">Settlements</a>
          <a href="" class="nav-link quick-link disabled">Dungeons</a>
          <a href="gates.html" class="nav-link quick-link">Oblivion Gates</a>
        </div>
      </div>
    </div>
  </div>`;
    
    let findFooter = document.getElementById("footer");
    findFooter.innerHTML = 
    `<div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 row footer-card">
        <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
          <div>
            Our mission - To help you keep track of your exploration of Tamriel.
          </div>
          <div>&nbsp;</div>
          <div>
              Design - Lilblupig - June 2021
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 footer-card">
        All credit for content to:
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="https://bethesda.net/en/dashboard" target="_blank" rel="noopener">Bethesda</a>
          </li>
          <li class="list-inline-item">
            <a href="https://bethesda.net/en/store/product/EL4GSTPCBG01" target="_blank" rel="noopener">Oblivion</a>
          </li>
          <li class="list-inline-item">
            <a href="https://en.uesp.net/wiki/Oblivion:Oblivion" target="_blank" rel="noopener">UESP</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`
};
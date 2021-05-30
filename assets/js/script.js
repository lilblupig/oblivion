// Retrieve local storage data for previous selections
window.onload = getStatus();

function getStatus() {
    /* Get inner HTML of all elements with the class tracker-btn and make them into an array
        https://stackoverflow.com/questions/58222496/how-can-i-have-an-array-of-the-html-content-of-a-jquery-element */
    let possibilities = $('.tracker-btn').toArray().map(button => button.innerHTML);

    /* Loop through array:
        Find element in HTML containing array value
        Use array value to find any local storage data and add that class
        */ 
    for (let i = 0; i < possibilities.length; i++) {
        $(`button:contains(${possibilities[i]})`).addClass(localStorage.getItem(possibilities[i]));
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
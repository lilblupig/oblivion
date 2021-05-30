/* Event listener for button clicks */
const buttons = document.querySelectorAll(".tracker-btn"); // Get all elements with the class 'tracker-btn'

buttons.forEach(function(button) {
    button.addEventListener("click",function(event) {

        // Get all classes currently active on clicked item
        let classes = event.currentTarget.classList;
        let status;

        // Apply classes in cycle - unfound, found & explored
        if (classes.contains("found")) {
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

        let storeKey = $(this).html();

        if (status === "unfound") {
            localStorage.removeItem(storeKey);
        } else {
            localStorage.setItem(storeKey, status);
        }
    })
})
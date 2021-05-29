/* Event listener for button clicks */
const buttons = document.querySelectorAll(".tracker-btn"); // Get all elements with the class 'tracker-btn'

buttons.forEach(function(button) {
    button.addEventListener("click",function(event) {

        // Get all classes currently active on clicked item
        let classes = event.currentTarget.classList;

        if (classes.contains("found")) {
            $(this).removeClass("found");
            $(this).addClass("explored");
        } else if (classes.contains("explored")) {
            $(this).removeClass("explored");
        } else {
            $(this).addClass("found");
        }

    })
})
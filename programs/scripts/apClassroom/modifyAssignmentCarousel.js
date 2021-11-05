console.log("AP Classroom Assignments Modify: Page loaded and script loaded, waiting for element.");
let check = true;
modifyCarousel = setInterval(()=>{
    // Assignment carousel element is the first element with class "carousel-parent-container".
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        if (check == true){
            // If we are checking and the element exists, enable the scroll bar and stop checking.
            document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
            console.log("AP Classroom Assignments Modify: Carousel found! Adding scroll bar.");
            check = false;
        }
    } else {
        // Only log to the console the first time the element disappears.
        if (check == false){
            console.log("AP Classroom Assignments Modify: Carousel disappeared! Waiting for element.");
        }
        // If the element does not exist we should check for it.
        check = true;
    }
}, 500);

console.log("[AP Classroom Assignments Modify (V2.1)]: Page loaded and script loaded, waiting for element.");
let check = true;

modifyCarousel = setInterval(()=>{
    // Assignment carousel element is the first element with class "carousel-parent-container".
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        if (check == true){
            // If we are checking and the element exists, enable the scroll bar, 
            // remove the buttons, resize the carousel and stop checking.
            console.log("[AP Classroom Assignments Modify (V2.1)]: Carousel found! Adding scroll bar and removing buttons.");
            document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";

            // The buttons are the first elements with classes "slider-decorator-0" and "slider-decorator-1".
            document.getElementsByClassName("slider-decorator-0")[0].outerHTML = "";
            document.getElementsByClassName("slider-decorator-1")[0].outerHTML = "";

            // Sets the top margin to account for the missing space from the buttons. 
            // It is the first element with classes "relative carousel-container".
            document.getElementsByClassName("relative carousel-container")[0].style.marginTop = "25px";

            // Stop checking when we found the element to prevent unnecessary modification.
            check = false;
        }
    } else {
        // Only log to the console the first time the element disappears.
        if (check == false){
            console.log("[AP Classroom Assignments Modify (V2.1)]: Carousel disappeared! Waiting for element.");
        }

        // If the element does not exist we should check for it.
        check = true;
    }
}, 250);

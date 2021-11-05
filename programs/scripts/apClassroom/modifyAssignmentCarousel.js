console.log("AP Classroom Modify Script: Page loaded, waiting for element.");
modifyCarousel = setInterval(() => {
    // Assignment carousel element is the first element with class "carousel-parent-container".
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
        console.log("AP Classroom Modify Script: Injection complete.");
        clearInterval(modifyCarousel);
    } 
}, 500);
// This version refreshes 4 times less frequently, meaning it should be better on slower connections/computers. 
// It is also minified, so check the original for better spacing and comments.
console.log("[AP Classroom Assignments Modify (V2.1)]: Page loaded and script loaded, waiting for element.");
let check = true;
modifyCarousel = setInterval(()=>{
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        if (check == true){
            console.log("[AP Classroom Assignments Modify (V2.1)]: Carousel found! Adding scroll bar and removing buttons.");
            document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
            document.getElementsByClassName("slider-decorator-0")[0].outerHTML = "";
            document.getElementsByClassName("slider-decorator-1")[0].outerHTML = "";
            document.getElementsByClassName("relative carousel-container")[0].style.marginTop = "25px";
            check = false;
        }
    } else {
        if (check == false) console.log("[AP Classroom Assignments Modify (V2.1)]: Carousel disappeared! Waiting for element.");
        check = true;
    }
}, 1000);

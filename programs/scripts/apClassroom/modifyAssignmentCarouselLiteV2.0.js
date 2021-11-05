// This version refreshes 4 times less frequently, meaning it should be better on slower connections/computers. 
// It is also minified, so check the original for better spacing and comments.
console.log("[AP Classroom Assignments Modify (V2.0 LITE)]: Page loaded and script loaded, waiting for element.");
let check = true;
modifyCarousel = setInterval(()=>{
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        if (check == true){
            console.log("[AP Classroom Assignments Modify (V2.0 LITE)]: Carousel found! Adding scroll bar and removing buttons.");
            document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
            check = false;
        }
    } else {
        if (check == false) console.log("[AP Classroom Assignments Modify (V2.0 LITE)]: Carousel disappeared! Waiting for element.");
        check = true;
    }
}, 1000);

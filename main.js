let getNamePtag = document.getElementById("yourName");
let innerText = getNamePtag.innerText;
let nameToShorten = "Zachery Wilson"

// splits name at space converts to array
nameToShorten = nameToShorten.split(" ");
/*
function slices 1 letter off first name, updates DOM, 
checks length: repeats until first name = "Zac"
*/

function nameSlicer() {
        setTimeout(() => {
                nameToShorten[0] = nameToShorten[0].slice(0, nameToShorten[0].length - 1);
                getNamePtag.innerText = nameToShorten[0] + " " + nameToShorten[1];
                console.log(nameToShorten[0]);
                if (nameToShorten[0].length > 3) {
                        nameSlicer(nameToShorten[0]);

                }
        }, 800);
}

nameSlicer();

//when user scrolls menu-bar will stay at top of screen "Sticky Navigation Bar"

window.onscroll = function () { stickyMenuBar() };

var menuBar = document.getElementById("menu-bar");
var sticky = menuBar.offsetTop;
function stickyMenuBar() {
        if (window.pageYOffset >= sticky) {
                menuBar.classList.add("sticky");
        } else {
                menuBar.classList.remove("sticky");
        }
}

 //setInterval(nameSlicer(nameToShorten[0]), 6000) ;



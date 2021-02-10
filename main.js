let getNamePtag = document.getElementById("yourName");
let innerText = getNamePtag.innerText;
let nameToShorten = "Zachery Wilson"

/*
function slices 1 letter off first name, updates DOM, 
checks length: repeats until first name = "Zac"
*/
function nameSlicer(name) {
        setTimeout(() => {
                let nameArr = name.split(" ");
                getNamePtag.innerText = nameArr[0] + " " + nameArr[1];
                nameArr[0] = nameArr[0].slice(0, nameArr[0].length - 1);
                console.log(nameArr[0]);
                if (nameArr[0].length > 2) {
                        nameSlicer(nameArr[0] + " " + nameArr[1]);
                } else {
                        setTimeout(() => {
                                nameSlicer(nameToShorten);
                        }, 1000);
                }
        }, 700);
}

nameSlicer(nameToShorten);

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



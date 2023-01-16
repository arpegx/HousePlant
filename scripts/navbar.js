/* Adding a sticky Navbar */

window.onscroll = function() {stickyNavbar()};

var nav = document.getElementsByClassName("navbar");
var sticky = nav.offsetTop;

function stickyNavbar(){
    if (window.pageYOffset >= sticky){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
} 
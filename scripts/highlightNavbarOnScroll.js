// Catch Scroll Movements
window.onscroll = function() {highlightNavbarOnScroll()};

// Adding shadow to the Navbar
function highlightNavbarOnScroll(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop  > 150  ){
        document.getElementById("shadowScroll").style.boxShadow = "0px 5px 10px 0px lightslategray";
    }
    else {
        document.getElementById("shadowScroll").style.boxShadow = "0px 0px 0px 0px lightslategray";
    }
}
let myBtn = document.getElementById("btt");

function scrollFunction() {
    if (document.body.scorllTop > 50 || document.documentElement.scrollTop > 50) {
        myBtn.style.display = "block"
    } else {
        myBtn.style.display = "none"
    }
}
window.onscroll = function() {
    scrollFunction();
}
function backtotop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}
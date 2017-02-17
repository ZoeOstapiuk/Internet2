window.onload = scroll;

var pos = 200;
function scroll() {
    var elem = document.getElementById("thetext");
    if (!elem) {
        return;
    }
    pos -=1;
    if (pos < 0 - elem.offsetHeight + 160) {
        return;
    }
    elem.style.top = pos;  
    window.setTimeout("scroll();", 30);
}
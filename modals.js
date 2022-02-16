/* global document */
var img = document.getElementsByClassName("img"),
    div = document.getElementById("modal"),
    modalImg = document.getElementById('modal-img'),
    caption = document.getElementById("caption"),
    close = document.getElementById("close");
var i;
for (i = 0; i < img.length; i = i + 1) {
    img[i].onclick = function () {
        "use strict";
        div.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    };
}

close.onclick = function () {
    "use strict";
    div.style.display = "none";
};
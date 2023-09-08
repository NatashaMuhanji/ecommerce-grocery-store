
//-----------navigation bar---------------------//
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

//show navigation bar
if (bar) {
    bar.addEventListener("click", function () {
        nav.classList.add("active");
    });
}

//close navigation bar
if (close) {
    close.addEventListener("click", function () {
        nav.classList.remove("active");
    });
}

//-----------product.html---------------------//
//section product details
let mainImage = document.querySelector("#mainImage");
let smallImage =document.querySelectorAll(".smallImage");

//changes image on click
smallImage[0].onclick = function () {
    mainImage.src=smallImage[0].src;
}
smallImage[1].onclick = function () {
    mainImage.src=smallImage[1].src;
}
smallImage[2].onclick = function () {
    mainImage.src=smallImage[2].src;
}
smallImage[3].onclick = function () {
    mainImage.src=smallImage[3].src;
}
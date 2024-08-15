let scroll = document.querySelector(".gallery");
let backbtn = document.getElementById("back");
let nextbtn = document.getElementById("next");

scroll.addEventListener("wheel", (evt) => {
    scroll.style.scrollBehavior = "auto";
    evt.preventDefault();
    scroll.scrollLeft += evt.deltaY;
});

backbtn.addEventListener("click", () => {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft -= 900;
});

nextbtn.addEventListener("click", () => {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft += 900;
});

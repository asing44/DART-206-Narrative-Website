var _titleAnimationData = {
    container: document.getElementById("-titleAnimation"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "./JSON Files/titleAnimation.json",
};

var _introAnimationData = bodymovin.loadAnimation({
    container: document.getElementById("-introAnimation"),
    renderer: "svg",
    autoplay: true,
    loop: false,
    path: "./JSON FILES/introAnimation.json",
});

var _paginationAnimation = bodymovin.loadAnimation({
    container: document.getElementById("-paginationAnimation"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "./JSON FILES/paginationAnimation.json",
});

var _titleAnimation = bodymovin.loadAnimation(_titleAnimationData);

window.onload = (event) => {
    window.scrollTo(0, 0);
}

_introAnimationData.addEventListener("complete", () => {

    document.body.classList.remove("_open");

    setInterval(() => {
        _titleAnimation.play();
    }, 500);
});

function mapNumbers(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const _paginationFrame1 = document.getElementsByClassName("_paginationFrame1")[0];
const _paginationFrame2 = document.getElementsByClassName("_paginationFrame2")[0];

window.onscroll = function() {
    var _scrollPosition = document.documentElement.scrollTop;
    var _windowHeight = window.innerHeight;

    _paginationAnimation.goToAndStop(mapNumbers(_scrollPosition, 0, _windowHeight, 0, 330), true)
};

// _paginationAnimation.addEventListener("enterFrame", (e) => {
//     if (e.frame == 59) {
//         _paginationFrame1.style.stroke = "#29363B";
//         _paginationFrame2.styke.stroke = "#29363B";
//     }

// })
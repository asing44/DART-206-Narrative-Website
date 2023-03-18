

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

var questionAnimation = bodymovin.loadAnimation({
    container: document.getElementById("-questionIllustration"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "./JSON FILES/theQuestionIllustration.json",
});

// <--/-->

// <--Check if user it is the user's first time on the site-->

if (firstImpression()) {

    document.getElementsByClassName("_intro")[0].classList.remove("_hideIntro");

    _introAnimationData.addEventListener("complete", () => {

        setInterval(() => {
            _titleAnimation.play();
            _paginationAnimation.play();
        }, 500);
    });

} else {
    _titleAnimation.play();
}

// <--/-->

// <--Animate based on view code-->

function mapNumbers(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const _paginationFrame1 = document.getElementsByClassName("_paginationFrame1")[0];
const _paginationFrame2 = document.getElementsByClassName("_paginationFrame2")[0];
const _pageHeight = document.body.scrollHeight;
const _sectionIncrements = (_pageHeight / 6) / 2;
const _sectionStarts = [_sectionIncrements, _sectionIncrements * 2, _sectionIncrements * 3, _sectionIncrements * 4, _sectionIncrements * 5];

window.onscroll = function() {
    var _scrollPosition = document.documentElement.scrollTop;

    // console.log("Current position: " + _scrollPosition, "Document height: " + _pageHeight);

    _paginationAnimation.goToAndStop(mapNumbers(_scrollPosition, 0, _pageHeight, 50, 330), true)
    console.log(_paginationAnimation.currentFrame);

    if ((_scrollPosition > _sectionStarts[0]) && (_scrollPosition < _sectionStarts[1])) {
        questionAnimation.setDirection(1);
        questionAnimation.play();
    } else if (_scrollPosition > _sectionStarts[1]) {
        questionAnimation.setDirection(-1);
        questionAnimation.play();
    }
};

// <--Pagination color change-->


//71 87
// <--/-->
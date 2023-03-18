

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

var questionLines = bodymovin.loadAnimation({
    container: document.getElementById("-questionLines"),
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "./JSON FILES/questionLines.json",
});

var decisionAnimation = bodymovin.loadAnimation({
    container: document.getElementById("-decisionIllustration"),
    render: "svg",
    autoplay: true,
    loop: false,
    path: "./JSON FILES/theDecisionIllustration.json",
});

var decisionLines = bodymovin.loadAnimation({
    container: document.getElementById("-decisionLines"),
    render: "svg",
    autoplay: true,
    loop: true,
    path: "./JSON FILES/decisionLines.json",
})

var moveLines = bodymovin.loadAnimation({
    container: document.getElementById("-moveLines"),
    render: "svg",
    autoplay: true,
    loop: true,
    path: "./JSON FILES/moveLines.json",
})

var moveAnimation = bodymovin.loadAnimation({
    container: document.getElementById("-moveIllustration"),
    render: "svg",
    autoplay: true,
    loop: false,
    path: "./JSON FILES/theMoveIllustration.json",
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

const _pageHeight = document.body.scrollHeight;
const _sectionHeights = document.getElementsByClassName("_hero")[0].offsetHeight;
const _sectionStarts = [_sectionHeights, _sectionHeights * 2, _sectionHeights * 3, _sectionHeights * 4, _sectionHeights * 5];

window.onscroll = function() {
    var _scrollPosition = document.documentElement.scrollTop;

    // console.log("Current position: " + _scrollPosition, "Document height: " + _pageHeight);

    _paginationAnimation.goToAndStop(mapNumbers(_scrollPosition, 0, _pageHeight, 50, 330), true)
    
    // console.log(_paginationAnimation.currentFrame);

    if ((_scrollPosition > _sectionStarts[0]) && (_scrollPosition < _sectionStarts[1])) {
        questionAnimation.setSpeed(1);
        questionAnimation.setDirection(1);
        questionAnimation.play();
    } else if (_scrollPosition > _sectionStarts[1]) {
        questionAnimation.setSpeed(2);
        questionAnimation.setDirection(-1);
        questionAnimation.play();
    }

    if ((_scrollPosition > _sectionStarts[1]) && (_scrollPosition < _sectionStarts[2])) {
        console.log("START DECISION")
        decisionAnimation.setSpeed(1);
        decisionAnimation.setDirection(1);
        decisionAnimation.play();
    } else if ((_scrollPosition > _sectionStarts[2]) || (_scrollPosition < _sectionStarts[1])) {
        decisionAnimation.setSpeed(2);
        decisionAnimation.setDirection(-1);
        decisionAnimation.play();
    }

    if ((_scrollPosition > _sectionStarts[2]) && (_scrollPosition < _sectionStarts[3])) {
        console.log("START DECISION")
        moveAnimation.setSpeed(1);
        moveAnimation.setDirection(1);
        moveAnimation.play();
    } else if ((_scrollPosition > _sectionStarts[3]) || (_scrollPosition < _sectionStarts[2])) {
        moveAnimation.setSpeed(2);
        moveAnimation.setDirection(-1);
        moveAnimation.play();
    }

};

// <--Pagination color change-->


//71 87
// <--/-->
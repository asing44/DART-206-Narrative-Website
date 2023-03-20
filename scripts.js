var _titleAnimationData = {
    container: document.getElementById("-titleAnimation"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "JSON Files/titleAnimation.json",
};

var heroLines = lottie.loadAnimation({
    container: document.getElementById("-heroLines"),
    renderer: "svg",
    autoplay: false,
    loop: true,
    path: "JSON FILES/heroLines.json",
});

var _introAnimationData = lottie.loadAnimation({
    container: document.getElementById("-introAnimation"),
    renderer: "svg",
    autoplay: true,
    loop: false,
    path: "JSON FILES/introAnimation.json",
});

var _paginationAnimation = lottie.loadAnimation({
    container: document.getElementById("-paginationAnimation"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "JSON FILES/paginationAnimation.json",
});

var _titleAnimation = lottie.loadAnimation(_titleAnimationData);

var questionAnimation = lottie.loadAnimation({
    container: document.getElementById("-questionIllustration"),
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "JSON FILES/theQuestionIllustration.json",
});

var questionLines = lottie.loadAnimation({
    container: document.getElementById("-questionLines"),
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "JSON FILES/questionLines.json",
});

var decisionAnimation = lottie.loadAnimation({
    container: document.getElementById("-decisionIllustration"),
    render: "svg",
    autoplay: false,
    loop: false,
    path: "JSON FILES/theDecisionIllustration.json",
});

var decisionLines = lottie.loadAnimation({
    container: document.getElementById("-decisionLines"),
    render: "svg",
    autoplay: true,
    loop: true,
    path: "JSON FILES/decisionLines.json",
})

var moveLines = lottie.loadAnimation({
    container: document.getElementById("-moveLines"),
    render: "svg",
    autoplay: true,
    loop: true,
    path: "JSON FILES/moveLines.json",
})

var moveAnimation = lottie.loadAnimation({
    container: document.getElementById("-moveIllustration"),
    render: "svg",
    autoplay: false,
    loop: false,
    path: "JSON FILES/theMoveIllustration.json",
});

var revealLines = lottie.loadAnimation({
    container: document.getElementById("-revealLines"),
    render: "svg",
    autoplay: true,
    loop: true,
    path: "JSON FILES/revealLines.json",
})

var revealAnimation = lottie.loadAnimation({
    container: document.getElementById("-revealIllustration"),
    render: "svg",
    autoplay: false,
    loop: false,
    path: "JSON FILES/theRevealIllustration.json",
});

var homeLines = lottie.loadAnimation({
    container: document.getElementById("-homeLines"),
    render: "svg",
    autoplay: true,
    loop: true,
    path: "JSON FILES/homeLines.json",
})

var homeAnimation = lottie.loadAnimation({
    container: document.getElementById("-homeIllustration"),
    render: "svg",
    autoplay: false,
    loop: false,
    path: "JSON FILES/theHomeIllustration.json",
});

// <--/-->

// <--Check if user it is the user's first time on the site-->

const _enableFirstImpression = false;

if ((firstImpression()) || !_enableFirstImpression) {

    document.getElementsByClassName("_intro")[0].classList.remove("_hideIntro");

    _introAnimationData.addEventListener("complete", () => {

        setInterval(() => {
            _titleAnimation.play();
            
            _paginationAnimation.goToAndStop(51, true);
            setInterval(() => {
                heroLines.play();
            }, 4000);
        }, 500);
    });

} else {
    _titleAnimation.play();
    setInterval(() => {
        heroLines.play();
    }, 4000);
}

// <--/-->

// <--Animate based on view code-->

function mapNumbers(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const _pageHeight = document.body.scrollHeight;
const _sectionHeights = document.getElementsByClassName("_section _question")[0].offsetHeight;
const _sectionStarts = [_sectionHeights, _sectionHeights * 2, _sectionHeights * 3, _sectionHeights * 4, _sectionHeights * 5];

window.onscroll = function() {
    var _scrollPosition = document.documentElement.scrollTop;

    // console.log("Current position: " + _scrollPosition, "Document height: " + _pageHeight);

    _paginationAnimation.goToAndStop(mapNumbers(_scrollPosition, 0, _pageHeight, 50, 320), true)
    
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
        decisionAnimation.setSpeed(1);
        decisionAnimation.setDirection(1);
        decisionAnimation.play();
    } else if ((_scrollPosition > _sectionStarts[2]) || (_scrollPosition < _sectionStarts[1])) {
        decisionAnimation.setSpeed(2);
        decisionAnimation.setDirection(-1);
        decisionAnimation.play();
    }

    if ((_scrollPosition > _sectionStarts[2]) && (_scrollPosition < _sectionStarts[3])) {
        moveAnimation.setSpeed(1);
        moveAnimation.setDirection(1);
        moveAnimation.play();
    } else if ((_scrollPosition > _sectionStarts[3]) || (_scrollPosition < _sectionStarts[2])) {
        moveAnimation.setSpeed(2);
        moveAnimation.setDirection(-1);
        moveAnimation.play();
    }

    if ((_scrollPosition > _sectionStarts[3]) && (_scrollPosition < _sectionStarts[4])) {
        revealAnimation.setSpeed(1);
        revealAnimation.setDirection(1);
        revealAnimation.play();
    } else if ((_scrollPosition > _sectionStarts[4]) || (_scrollPosition < _sectionStarts[3])) {
        revealAnimation.setSpeed(2);
        revealAnimation.setDirection(-1);
        revealAnimation.play();
    }

    if (_scrollPosition > _sectionStarts[4]) {
        homeAnimation.setSpeed(1);
        homeAnimation.setDirection(1);
        homeAnimation.play();
    } else if (_scrollPosition < _sectionStarts[4]) {
        homeAnimation.setSpeed(2);
        homeAnimation.setDirection(-1);
        homeAnimation.play();
    }

};

console.log("test")
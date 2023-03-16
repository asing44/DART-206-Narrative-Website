

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

_introAnimationData.addEventListener("complete", () => {

    setInterval(() => {
        _titleAnimation.play();
        _paginationAnimation.play();
    }, 500);
});

window.onscroll = function() {
    var _scrollPosition = document.documentElement.scrollTop;
    var _windowHeight = window.innerHeight;

    var _paginationAnimationDuration = _paginationAnimation.getDuration(true);
    var _startFrame = Math.round((_scrollPosition / _windowHeight) * _paginationAnimationDuration);
    var _endFrame = Math.round(((_scrollPosition + _windowHeight) / _windowHeight) * _paginationAnimationDuration);

    _paginationAnimation.playSegments([_startFrame, _endFrame], true);
};

// function _animatePagination() {
//     var _scrollPosition = window.pageYOffset;
//     _paginationAnimation.goToAndStop(_scrollPosition, true);
// }

setInterval(function() {
    var currentFrame = _paginationAnimation.currentFrame;
    console.log("Current frame: " + currentFrame)
}, 500);
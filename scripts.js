

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

var _titleAnimation = bodymovin.loadAnimation(_titleAnimationData);

_introAnimationData.addEventListener("complete", () => {
    setInterval(() => {
        _titleAnimation.play();
    }, 500);
});
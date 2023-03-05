// 视频慢放
const video = document.querySelector("video");
video.playbackRate = 0.75;

// 导航栏
exports.barControl = function () {
    window.addEventListener('scroll', function () {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("change-bar", window.scrollY > 0);

        let list = document.querySelector('.navbar__list');
        list.classList.toggle("change-text", window.scrollY > 0);

        let box = document.querySelector('.navbar__logo-box');
        box.classList.toggle("change-logo", window.scrollY > 0);

        let icon = document.querySelector('.navigation__button');
        icon.classList.toggle("change-icon", window.scrollY > 0);
        let background = document.querySelector('.navigation__background');
        background.classList.toggle("change-icon", window.scrollY > 0);
    })
}
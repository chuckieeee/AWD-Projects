let stars = document.getElementById('stars');
let background = document.getElementById('background');
let text = document.getElementById('text');
let mountains = document.getElementById('mountains');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    background.style.top = value * 0.5 + 'px';
    mountains.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
})
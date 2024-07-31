document.addEventListener('DOMContentLoaded', () => {
    const estrofes = document.querySelectorAll('.estrofe');
    const ground = document.querySelector('.ground');
    const heads = document.querySelectorAll('.head');
    const heart = document.querySelector('.heart');
    const minihearts = document.querySelector('.minihearts');
    const sky = document.querySelector('.sky');
    const stars = document.querySelectorAll('.star');
    const us = document.querySelector('.us');


    // Add animation classes
    ground.classList.add('animate');
    heart.classList.add('animate');
    minihearts.classList.add('animate');
    sky.classList.add('animate');
    us.classList.add('animate');

    heads.forEach(head => {
        head.classList.add('animate');
    });

    estrofes.forEach(estrofe => {
        estrofe.classList.add('animate');
    });

    stars.forEach(star => {
        star.classList.add('animate');
    });

    const music = document.getElementById('background-music');
    music.play();


});

"use strict";

let intro = document.querySelector(".intro");
let landingKeyboard = document.querySelector(".landingKeyboard");
let key = document.querySelectorAll(".key");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        key.forEach((key, i) => {
            setTimeout(() =>{
                key.classList.add('active');
            }, (i + 1) * 300)
        });

        setTimeout(() => {
            key.forEach((key, i) => {
                setTimeout(() => {
                    key.classList.remove('active');
                    key.classList.add('fade');
                }, (i + 1) * 50)
            })
        }, 7100);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 7400);
    })
});
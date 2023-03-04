"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  
  var image1 = $("#image1");
  var image2 = $("#image2");
  var image3 = $("#image3");
  var image4 = $("#image4");
  var image5 = $("#image5");
  var image6 = $("#image6");
  var image7 = $("#image7");
  var image8 = $("#image8");

  var links = $("#image_list").querySelectorAll("a");

  for (let link of links) {
    const image = new Image();
    image.src = link.href;

    image1.addEventListener("mouseover", () => {
      image1.src = "image/cod_movement1.png";
    });
    image1.addEventListener("mouseout", () => {
      image1.src = "image/cod_movement2.png";
    });
    image2.addEventListener("mouseover", () => {
      image2.src = "image/cod_shots2.png";
    });
    image2.addEventListener("mouseout", () => {
      image2.src = "image/cod_shots1.png";
    });
    image3.addEventListener("mouseover", () => {
      image3.src = "image/fortnite2.png";
    });
    image3.addEventListener("mouseout", () => {
      image3.src = "image/fortnite1.png";
    });
    image4.addEventListener("mouseover", () => {
      image4.src = "image/cod_launcher2.png";
    });
    image4.addEventListener("mouseout", () => {
      image4.src = "image/cod_launcher1.png";
    });
    image5.addEventListener("mouseover", () => {
      image5.src = "image/cod_stuck2.png";
    });
    image5.addEventListener("mouseout", () => {
      image5.src = "image/cod_stuck1.png";
    });
    image6.addEventListener("mouseover", () => {
      image6.src = "image/brood_mother_grounded2.png";
    });
    image6.addEventListener("mouseout", () => {
      image6.src = "image/brood_mother_grounded1.png";
    });
    image7.addEventListener("mouseover", () => {
      image7.src = "image/cod_no_scope2.png";
    });
    image7.addEventListener("mouseout", () => {
      image7.src = "image/cod_no_scope1.png";
    });
    image8.addEventListener("mouseover", () => {
      image8.src = "image/cod_warzone_win2.png";
    });
    image8.addEventListener("mouseout", () => {
      image8.src = "image/cod_warzone_win1.png";
    });
  }
});
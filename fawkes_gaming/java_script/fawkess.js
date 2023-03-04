"use strict";

$(document).ready(() => {
  const slider = $("#image_list");

  $("#right_button").click(() => {
    const leftProperty = parseInt(slider.css("left"));

    let newLeftProperty = 0;
    if (leftProperty - 100 > -900) {
      newLeftProperty = leftProperty - 212;
    }

    slider.animate({ left: newLeftProperty }, 1000);
  });

  $("#left_button").click(() => {
    const leftProperty = parseInt(slider.css("left"));

    let newLeftProperty = 0;
    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 215;
    } else {
      newLeftProperty = -850;
    }

    slider.animate({ left: newLeftProperty }, 1000);
  });
});
"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#newsletter_list").addEventListener("click", () => {
    const email = $("#email_address");
    const phone = $("#phone");
    const name = $("#name");
    let isValid = true;

    if (email.value == "") {
      email.nextElementSibling.textContent = "Email is required.";
      isValid = false;
    } else {
      email.nextElementSibling.textContent = "";
    }

    if (phone.value == "") {
      phone.nextElementSibling.textContent = "Phone is required.";
      isValid = false;
    } else {
      phone.nextElementSibling.textContent = "";
    }

    if (name.value == "") {
      name.nextElementSibling.textContent = "Name is required.";
      isValid = false;
    } else {
      name.nextElementSibling.textContent = "";
    }

    if (isValid) {
      $("#newsletter_form").submit();
    }
  });

  $("#reset_form").addEventListener("click", () => {
    $("#email_address").value = "";
    $("#phone").value = "";
    $("#name").value = "";

    $("#email_address").focus();
  });

  $("#email_address").focus();
});

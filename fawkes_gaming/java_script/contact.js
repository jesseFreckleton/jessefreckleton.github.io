"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#send").addEventListener("click", () => {
    const email = $("#email_address");
    const phone = $("#phone");
    const message = $("#message");
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

    if (message.value == "") {
      message.nextElementSibling.textContent = "Message is required.";
      isValid = false;
    } else {
      message.nextElementSibling.textContent = "";
    }

    if (isValid) {
      $("#contact_form").submit();
    }
  });

  $("#reset_form").addEventListener("click", () => {
    $("#email_address").value = "";
    $("#phone").value = "";
    $("#country").value = "";
    $("#message").value = "";

    $("#email_address").focus();
  });

  $("#email_address").focus();
});

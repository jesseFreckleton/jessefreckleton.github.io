"use strict";

$("document").ready(() => {
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    $("#contact_form").submit( evt => {
    let isValid = true;

    const firstname = $("#firstname").val().trim();
    if (firstname == "") {
      $("#firstname").next().text("This field is required.");
      isValid = false;
    } else {
      $("#firstname").next().text("");
    }
    $("#firstname").val(firstname);

    const lastname = $("#lastname").val().trim();
    if (lastname == "") {
      $("#lastname").next().text("This field is required.");
      isValid = false;
    } else {
      $("#lastname").next().text("");
    }
    $("#lastname").val(lastname);

    const email = $("#email").val().trim();
    if (email == "") { 
      $("#email").next().text("This field is required.");
      isValid = false;
    } else if ( !emailPattern.test(email) ) {
      $("#email").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email").next().text("");
    }
    $("#email").val(email);

    const phone = $("#phone").val().trim();
    if (phone == "") { 
      $("#phone").next().text("This field is required.");
      isValid = false; 
    } else if ( !phonePattern.test(phone) ) {
      $("#phone").next().text("Must be a valid phone number.");
      isValid = false;
    } else {
      $("#phone").next().text("");
    }
    $("#phone").val(phone);

    const comment = $("#comment").val().trim();
    if (comment == "") { 
      $("#comment").next().text("This field is required.");
      isValid = false;
    } else {
      $("#comment").next().text("");
    }
    $("#comment").val(comment);

    if (!isValid) {
        evt.preventDefault();
      }
    });
});
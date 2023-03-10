"use strict";

$(document).ready( () => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  const phonePattern = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  $("#tabs").tabs({
    active: 0
    });

    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    var today = new Date();
    today.setDate(today.getDate() + 1);
    $(".currentDate").html(dayNames[today.getDay()] + " - " + monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes());

  // Handle Submit
  $("#newsletter_form").submit( evt => {
    let isValid = true;
    
    // validate the name entry
    const name = $("#name").val().trim();
    if (name == "") {
      $("#name").next().text("This field is required.");
      $("#detailsTab span").text("!");
      isValid = false;
    } else {
      $("#name").next().text("");
    }
    $("#name").val(name);

    // validate the email entry with a regular expression
    const email = $("#email").val().trim();
    if (email == "") { 
      $("#email").next().text("This field is required.");
      $("#detailsTab span").text("!");
      isValid = false;
    } else if ( !emailPattern.test(email) ) {
      $("#email").next().text("Must be a valid email address.");
      $("#detailsTab span").text("!");
      isValid = false;
    } else {
      $("#email").next().text("");
    }
    $("#email").val(email);

    // validate the phone number
    const phone = $("#phone").val().trim();
    if (phone == "") { 
      $("#phone").next().text("This field is required.");
      $("#detailsTab span").text("!");
      isValid = false; 
    } else if ( !phonePattern.test(phone) ) {
      $("#phone").next().text("Must be a valid email address.");
      $("#detailsTab span").text("!");
      isValid = false;
    } else {
      $("#phone").next().text("");
    }
    $("#phone").val(phone);
    
    // prevent the submission of the form if any entries are invalid 
    if (!isValid) {
      evt.preventDefault();
    }
  }); // End Submit

  // Handle Clear
  $("#clear").click(() => {
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#message").val("");
  });
  // End Clear

  $("#name").focus();
});

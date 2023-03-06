"use strict";

$(document).ready( () => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  $("#tabs").tabs({
    active: 0
  });

  $("#contact_form").submit( evt => {
    let isValid = true;
    
    // validate the email entry with a regular expression
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

    // validate the phone number
    const phone = $("#phone").val().trim();
    if (phone == "") { 
      $("#phone").next().text("This field is required.");
      isValid = false; 
    } else {
      $("#phone").next().text("");
    }
    $("#phone").val(phone);	
    
    // validate the name entry
    const name = $("#name").val().trim();
    if (name == "") {
      $("#name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#name").next().text("");
    }
    $("#name").val(name);

    // validate the message entry
    const message = $("#message").val().trim();
    if (phone == "") { 
      $("#message").next().text("This field is required.");
      isValid = false; 
    } else {
      $("#message").next().text("");
    }
    $("#message").val(phone);	
    
    // prevent the submission of the form if any entries are invalid 
    if (!isValid) {
      evt.preventDefault();				
    }
  } // end function
  );
  $("#name").focus();
});

(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;
    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    if (check == false) {
      return check;
    } else {
      sendMail(
        $(input[1]).val(),
        $(input[0]).val(),
        $(input[2]).val(),
        $(input[3]).val()
      );
      return check;
    }
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }

  //==================================================================

  function sendMail(email, name, phone, body) {
    var message =
      "Name :" +
      name +
      "\n   Phone :" +
      phone +
      "\n   Email :" +
      email +
      "\n   Message :" +
      body;
    var link =
      "mailto:" +
      "huimangtech@gmail.com" +
      "?subject=FeedBack" +
      "&body=" +
      message;
    window.open(link);
  }
})(jQuery);

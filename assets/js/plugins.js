/* global $*/

$(document).ready(function () {
  "use strict";

  // Trigger Nice Scroll Plugin
  $("html body").niceScroll({
    cursorcolor: "#3498db",
    cursorborder: "none",
    cursorborderradius: 0
  });

  // Centring The Sign Form In The Middle Of The Page
  var $signForm = $(".sign-form form");
  var $form = $(".sign-form");

  $signForm.each(function () {
    $(this).css({marginTop: ($form.height() - $(this).height()) / 2});
  });

  // Show The Sign Form When Click On Li
  $(".menu ul li:last").on('click', function () {
    $form.css("display", "block");
    $signForm.addClass("animated bounceIn");
  });

  // Close The Sign Form When Click On Close Icon
  $(".fa-close").on("click", function () {$form.fadeOut();});

  // Show Password When Click On eye Icon
  var $eye = $(".fa-eye-slash");
  var $this = $eye.next("input");

  $eye.css("cursor", "pointer");

  $eye.on("click", function () {
    $eye.toggleClass("fa-eye");
    $eye.toggleClass("fa-eye-slash");

    ($eye.hasClass("fa-eye")) ? $this.attr("type", "text") : $this.attr("type", "password");

  });

});

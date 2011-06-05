// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
  $(".alert").click(function() {
    alert(this.getAttribute("data-confirm"));
    return false;
  })
})


jQuery.fn.submitLinkWithAjax = function() {
  this.live("click", function() {
    $.post(this.href, "_method=delete", null, "script");
    return false;
  });
  return this;
};

$(document).ready(function() {
  $("a.delete_post").submitLinkWithAjax();
});


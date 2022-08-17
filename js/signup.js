$(document).ready(function () {
  // 약관동의
  $(".btn-signup").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".wrap").removeClass("agree-active");
      $(".agree").removeClass("agree-active");
    } else {
      $("btn-signup").text("가입하기");
      $(this).addClass("active");
      $(".wrap").addClass("agree-active");
      $(".agree").addClass("agree-active");
    }
  });

  $(".agree #check-all").on("click", function () {
    $(this)
      .parents(".agree")
      .find("input:checkbox")
      .prop("checked", $(this).is(":checked"));
  });
  $(".agree .normal").on("click", function () {
    let is_checked = true;

    $(".normal").each(function () {
      is_checked = is_checked && $(this).is(":checked");
    });
    $("#check-all").prop("checked", is_checked);
  });
});

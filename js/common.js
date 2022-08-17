$(document).ready(function () {
  var section01Slide = new Swiper(".lineup__slide", {
    speed: 500,
    slidesPerView: "auto",
    simulateTouch: true,
    preloadImages: false,
  });

  //pageTop
  $(window).scroll(function () {
    if ($(this).scrollTop() < 100) {
      $("#pageTop").fadeOut();
      $("#link").fadeOut();
    } else {
      $("#pageTop").fadeIn();
      $("#link").fadeIn();
    }
  });
  $("#pageTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // btn-menu
  $(".btn-menu").on("click", function () {
    $(this).toggleClass("active");
    $(".wrap").toggleClass("active");
  });

  // tab-menu
  $(".tab-menu > li").on("click", function () {
    $(".tab-menu > li").removeClass("active");
    $(".tab-content > li").removeClass("active");

    $(this).addClass("active");
    $(".tab-content > li").eq($(this).index()).addClass("active");
  });

  // accountPage -> select test
  $(".content__select").on("click", function () {
    $(".disabled").css("display", "none");
  });

  // modal
  $(".btn-modal").on("click", function () {
    $(".modal").addClass("active");
  });
  $(".modal .btn-close").on("click", function () {
    $(".modal").removeClass("active");
  });

  /* bell(upcoming - modal)
  
  $(".btn-bell .icon").on("click", function () {
    $(this).toggleClass("on");
    $(".upcoming-modal").toggleClass("alarm");

    if ($(".upcoming-modal").hasClass("alarm")) {
      $(".upcoming-modal .modal__text").text(
        "프리오더 오픈 알림을 신청했습니다."
      );
    } else {
      $(".upcoming-modal .modal__text").text(
        "프리오더 오픈 알림을 취소하였습니다."
      );
    }
  });
  */

  $(".content__select").on("click", function () {
    $(this).addClass("on");
    $("option.disabled").prop("disabled", true);
  });

  /* artist */
  // 작가 더보기 : explain-hide
  $(
    ".artistCont .btn-more, .myArtCont .btn-more, .orderCompleted .btn-more"
  ).on("click", function () {
    if ($(".artistIntro").hasClass("active")) {
      $(".artistIntro").removeClass("active");
      $(this).text("작가 더 알아보기");
    } else {
      $(".artistIntro").addClass("active");
      $(this).text("닫기");
    }

    // $('.artistIntro').addClass('active');
  });

  // artistPage/myartistPage -> Artist’s Portfolio 2-슬라이드
  var section01Slide = new Swiper(".content__portfolio", {
    speed: 500,
    slidesPerView: "auto",
    simulateTouch: true,
    preloadImages: false,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });
});

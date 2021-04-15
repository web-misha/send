function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(".form_button_fade").click(function () {
  $(".form_body").fadeIn();
  $("html").addClass("lock");
});
$(".form_button_fade_nav").click(function () {
  $(".form_body").fadeIn();
  $(".header_burger,.header_nav").removeClass("active");
});
$(".form_close").click(function () {
  $(".form_body").fadeOut();
  $("html").removeClass("lock");
});
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.header_nav").toggleClass("active");
    $("html").toggleClass("lock");
  });
});
$(function () {
  // при нажатии на кнопку scrollup
  $(".scrollup").click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});

var cc = 1;
$(window).scroll(function () {
  var target = $(".main_numbers");
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();

    if ((cc < 2) & (winScrollTop > scrollToElem)) {
      var count = 0,
        block = $(".numbers_title_count"),
        interval = setInterval(function () {
          count++;

          block.text(count);

          if (count === 15) {
            clearInterval(interval);
          }
        }, 400);

      block.text(count);
      cc = cc + 2;
    }
  });
});

/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/************    burger      *************/
$('.burger').click(function () {
  $('.burger').toggleClass('active');
  $('.menu-link').toggleClass('show');
  $('body').toggleClass('no-scroll');
});

$('.menu-link a').click(function () {
  $('.menu-link').removeClass('show');
  $('.burger').removeClass('active');
  $('body').removeClass('no-scroll');
});

/************    header slick      **************/
$('.header-slider').slick({
  prevArrow: $('.header-arrow-left'),
  nextArrow: $('.header-arrow-right'),
  dots: false,
  autoplay: true,
  responsive: [{
    breakpoint: 1066,
    settings: {
      arrows: false
    }
  }]
});

/*---------------- фильтр projects   ---------------*/
$(function () {
  $('.projects-nav a').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.card.' + get_id);
    $('.card').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.card').show(500);
  });
});

/*-------------  projects (project-active)   -------------*/
var header = document.getElementById("active-nav");
var btns = header.getElementsByClassName("project-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("project-active");
    current[0].className = current[0].className.replace(" project-active", "");
    this.className += " project-active";
  });
}
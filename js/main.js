/************    burger      *************/
$('.burger').click(function () {
  $('.burger').toggleClass('active');
  $('.menu-link').toggleClass('show');
});

$('.menu-link a').click(function () {
  $('.menu-link').removeClass('show');
  $('.burger').removeClass('active');
});
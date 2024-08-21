// $(".corse-menu").click(function(){
//     $(".corse-menu").slideToggle();
//   });

$("#toggle").on("click", function () {

   $(".toggle-list").slideToggle();

  });


$(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 80) {
            pagetop.fadeIn(300);
       } else {
            pagetop.fadeOut(300);
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
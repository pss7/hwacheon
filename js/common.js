$(function () {

  //드롭다운
  $('.toggleBtn').click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    if ($(this).parent().hasClass('active')) {
      $(this).attr('aria-expanded', 'true');
    } else {
      $(this).attr('aria-expanded', 'false');
    }
  });
  $('.selectCloseBtn').click(function () {
    $(this).parents('.toggleBtnBox').removeClass('active');
    $(this).parents('.toggleBtnBox').find('.toggleBtn').attr('aria-expanded', 'false').focus();
  });


});
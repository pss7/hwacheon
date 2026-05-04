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

  //탭
  $('.tabContentBox').hide();
  $('.tabContentBox').first().show();
  $('.tabList li').click(function () {
    $('.tabList li').children().removeClass('active').attr('aria-selected', 'false');
    $(this).children().addClass('active').attr('aria-selected', 'true');

    $('.tabContentBox').hide();
    $('.tabContentBox').eq($(this).index()).show();
  });


});
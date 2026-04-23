$(function () {

  let hideTimer = null;
  let scale = 1;
  let minScale = 0.8;
  let maxScale = 1.5;
  let step = 0.1;

  /* 헤더 - 메뉴 */
  $('#headerWrap .depth01 > li').bind('mouseenter focusin', function () {
    if (!$(this).children('.subMenuBox').length) return;

    clearTimeout(hideTimer);

    $('#headerWrap .depth01 > li').removeClass('active');
    $('#headerWrap .subMenuBox').removeClass('active');

    $(this).addClass('active');
    $(this).children('.subMenuBox').addClass('active');

    $('#headerWrap .subMenuMotionBg').stop(true, true).animate({
      height: $(this).children('.subMenuBox').outerHeight(),
      opacity: 1
    }, 250);
  });

  $('#headerWrap .menuBox').mouseleave(function () {
    hideTimer = setTimeout(function () {
      $('#headerWrap .depth01 > li').removeClass('active');
      $('#headerWrap .subMenuBox').removeClass('active');

      $('#headerWrap .subMenuMotionBg').stop(true, true).animate({
        height: 0,
        opacity: 0
      }, 200);
    }, 100);
  });

  $('#headerWrap .menuBox').focusout(function () {
    hideTimer = setTimeout(function () {
      if (!$('#headerWrap .menuBox').find(':focus').length) {
        $('#headerWrap .depth01 > li').removeClass('active');
        $('#headerWrap .subMenuBox').removeClass('active');

        $('#headerWrap .subMenuMotionBg').stop(true, true).animate({
          height: 0,
          opacity: 0
        }, 200);
      }
    }, 10);
  });

  /* 헤더 - 모바일메뉴 */
  $('#headerWrap .mobileCloseBtn').hide();

  $('#headerWrap .mobileOpenBtn').click(function () {
    $(this).hide().attr('aria-expanded', 'true');
    $('#headerWrap .mobileCloseBtn').fadeIn();
    $('#mobileMenuBox').addClass('on');
    $('.mobilebg').addClass('active');
    $('body').addClass('mobileNonScroll');
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $(this).hide();
    $('#headerWrap .mobileOpenBtn').fadeIn().attr('aria-expanded', 'false').focus();
    $('#mobileMenuBox').removeClass('on');
    $('.mobilebg').removeClass('active');
    $('body').removeClass('mobileNonScroll');
  });

  $('#mobileMenuBox .mobileDepth01 > li').first().find('h2 > a').addClass('active');
  $('#mobileMenuBox .box').hide();
  $('#mobileMenuBox .box').first().show();
  $('#mobileMenuBox .mobileDepth03').hide();
  $('#mobileMenuBox .mobileDepth02 li:has(ul)').children('h3').addClass('depth03');

  $('#mobileMenuBox .mobileDepth01 > li').click(function () {
    $('#mobileMenuBox .mobileDepth01 > li > h2 > a').removeClass('active');
    $(this).find('h2 > a').addClass('active');

    $('#mobileMenuBox .box').hide();
    $('#mobileMenuBox .box').eq($(this).index()).show();
  });

  $('#mobileMenuBox .mobileDepth02 li h3 a').click(function () {
    if (!$(this).parents('li').children('.mobileDepth03').length) return true;

    if ($(this).parents('li').children('h3').hasClass('active')) {
      $(this).parents('li').children('.mobileDepth03').slideUp();
      $(this).parents('li').children('h3').removeClass('active');
    } else {
      $('#mobileMenuBox .mobileDepth02 li').children('.mobileDepth03').slideUp();
      $('#mobileMenuBox .mobileDepth02 li h3').removeClass('active');

      $(this).parents('li').children('.mobileDepth03').slideDown();
      $(this).parents('li').children('h3').addClass('active');
    }

    return false;
  });

  /* 헤더 - 모달 */
  // $('#headerWrap .modalBtn').click(function () {
  //   $(this).addClass('active');
  //   $(this).next('.modalBox').addClass('active');
  // });

  // $('#headerWrap .closeBtn').click(function () {
  //   $(this).parents('.modalBox').removeClass('active');
  //   $('#headerWrap .modalBtn').removeClass('active');
  //   $(this).parents('.modalBox').prev('.modalBtn').focus();
  // });

  /* 헤더 - 화면 축소, 확대, 초기화 */
  $('.zoomIn').click(function () {
    if (scale < maxScale) {
      scale = Math.min(scale + step, maxScale);

      $('#wrap.main').css({
        transform: 'scale(' + scale + ')',
        transformOrigin: 'top center'
      });

      $('.zoomTooltip').text(Math.round(scale * 100) + '%');
    }
  });

  $('.zoomOut').click(function () {
    if (scale > minScale) {
      scale = Math.max(scale - step, minScale);

      $('#wrap.main').css({
        transform: 'scale(' + scale + ')',
        transformOrigin: 'top center'
      });

      $('.zoomTooltip').text(Math.round(scale * 100) + '%');
    }
  });

  $('.zoomReset').click(function () {
    scale = 1;

    $('#wrap.main').css({
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top center'
    });

    $('.zoomTooltip').text(Math.round(scale * 100) + '%');
  });

  $('.zoomBtn').bind('mouseenter focus', function () {
    $('.zoomTooltip').text(Math.round(scale * 100) + '%').addClass('show');
  });

  $('.zoomBtn').bind('mouseleave blur', function () {
    $('.zoomTooltip').removeClass('show');
  });

  $('#wrap.main').css({
    transform: 'scale(' + scale + ')',
    transformOrigin: 'top center'
  });

  $('.zoomTooltip').text(Math.round(scale * 100) + '%');

  /* 푸터 */
  $('#footerWrap .selectBtn').click(function () {
    if ($(this).parents('.box').hasClass('active')) {
      $(this).removeClass('active').attr('aria-expanded', 'false');
      $(this).parents('.box').removeClass('active');
    } else {
      $('#footerWrap .selectBtn').removeClass('active').attr('aria-expanded', 'false');
      $('#footerWrap .selectBox .box').removeClass('active');

      $(this).addClass('active').attr('aria-expanded', 'true');
      $(this).parents('.box').addClass('active');
    }
  });

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
    $(this).parent().parent().removeClass('active');
    $(this).parent().siblings('.toggleBtn').attr('aria-expanded', 'false').focus();
  });

});
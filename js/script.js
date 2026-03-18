$(function () {

  //헤더 - 모바일메뉴
  $('#headerWrap .mobileOpenBtn').click(function () {
    $(this).hide();
    $('#headerWrap .mobileCloseBtn').fadeIn();
    $('#mobileMenuBox').addClass('active');
    $('.mobilebg').addClass('active');
    $('body').addClass('mobileNonScroll');
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $(this).hide();
    $('#headerWrap .mobileOpenBtn').fadeIn();
    $('#mobileMenuBox').removeClass('active');
    $('.mobilebg').removeClass('active');
    $('body').removeClass('mobileNonScroll');
  });

  $('#mobileMenuBox .mobileDepth01 > li').first().find('h2 > a').addClass('active');
  $('#mobileMenuBox .box').hide();
  $('#mobileMenuBox .box').first().show();
  $('#mobileMenuBox .mobileDepth01 li').click(function () {
    $('#mobileMenuBox .mobileDepth01 > li > h2 > a').removeClass('active');
    $(this).find('a').addClass('active');

    let idx = $(this).index();

    $('#mobileMenuBox .box').hide();
    $('#mobileMenuBox .box').eq(idx).show();
  });

  $('#mobileMenuBox .mobileDepth02 li h3 a').click(function () {
    if ($(this).parent().parent().find('.mobileDepth03').length) {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().parent().find('.mobileDepth03').slideUp();
        $(this).parent().removeClass('active');
      } else {
        $('#mobileMenuBox .mobileDepth02 li').find('.mobileDepth03').slideUp();
        $(this).parent().parent().find('.mobileDepth03').slideDown();
        $('#mobileMenuBox .mobileDepth02 li h3').removeClass('active');
        $(this).parent().addClass('active');
      }
      return false;
    }
  });
  $('#mobileMenuBox .mobileDepth02 li:has(ul)').children('h3').addClass('depth03');

  //헤더 - 모달
  $('#headerWrap .modalBtn').click(function () {
    $(this).addClass('active');
  });
  $('#headerWrap .closeBtn').click(function () {
    $('#headerWrap .modalBtn').removeClass('active');
  });

  //헤더 - 화면 축소, 확대, 초기화
  let $zoomWrap = $('#wrap.main');
  let $tooltip = $('.zoomTooltip');

  let scale = 1;
  let minScale = 0.8;
  let maxScale = 1.5;
  let step = 0.1;

  function updateZoom() {
    $zoomWrap.css({
      'transform': 'scale(' + scale + ')',
      'transform-origin': 'top center'
    });

    $tooltip.text(Math.round(scale * 100) + '%');
  }

  function showTooltip() {
    $tooltip.text(Math.round(scale * 100) + '%').addClass('show');
  }

  function hideTooltip() {
    $tooltip.removeClass('show');
  }

  $('.zoomIn').on('click', function () {
    if (scale < maxScale) {
      scale = Math.min(scale + step, maxScale);
      updateZoom();
    }
  });

  $('.zoomOut').on('click', function () {
    if (scale > minScale) {
      scale = Math.max(scale - step, minScale);
      updateZoom();
    }
  });

  $('.zoomReset').on('click', function () {
    scale = 1;
    updateZoom();
  });

  $('.zoomBtn').on('mouseenter focus', function () {
    showTooltip();
  });

  $('.zoomBtn').on('mouseleave blur', function () {
    hideTooltip();
  });

  updateZoom();

  //푸터
  $('#footerWrap .selectBtn').click(function () {
    if ($(this).hasClass('active')) {
      $('#footerWrap .selectBtn').removeClass('active');
    } else {
      $('#footerWrap .selectBtn').removeClass('active');
      $(this).addClass('active');
    }
  });

});

$(function () {

  //헤더 - 모바일메뉴
  $('#headerWrap .mobileOpenBtn').click(function () {
    $(this).hide().attr('aria-expanded', 'true');
    $('#headerWrap .mobileCloseBtn').fadeIn().attr('aria-expanded', 'true');
    $('#mobileMenuBox').addClass('active').attr('aria-hidden', 'false');
    $('.mobilebg').addClass('active');
    $('body').addClass('mobileNonScroll');
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $(this).hide().attr('aria-expanded', 'false');
    $('#headerWrap .mobileOpenBtn').fadeIn().attr('aria-expanded', 'false').focus();
    $('#mobileMenuBox').removeClass('active').attr('aria-hidden', 'true');
    $('.mobilebg').removeClass('active');
    $('body').removeClass('mobileNonScroll');
  });

  $('#mobileMenuBox .mobileDepth01 > li').first().find('h2 > a').addClass('active');
  $('#mobileMenuBox .box').hide();
  $('#mobileMenuBox .box').first().show();

  $('#mobileMenuBox .mobileDepth01 li').click(function () {
    let idx = $(this).index();

    $('#mobileMenuBox .mobileDepth01 > li > h2 > a').removeClass('active');
    $(this).find('a').addClass('active');

    $('#mobileMenuBox .box').hide();
    $('#mobileMenuBox .box').eq(idx).show();
  });

  $('#mobileMenuBox .mobileDepth02 li h3 a').click(function () {
    const $li = $(this).closest('li');
    const $depth3 = $li.find('.mobileDepth03').first();

    if ($depth3.length) {
      if ($li.find('h3').hasClass('active')) {
        $depth3.slideUp();
        $li.find('h3').removeClass('active');
        $(this).attr('aria-expanded', 'false');
      } else {
        $('#mobileMenuBox .mobileDepth02 li').find('.mobileDepth03').slideUp();
        $('#mobileMenuBox .mobileDepth02 li h3').removeClass('active');
        $('#mobileMenuBox .mobileDepth02 li h3 a').attr('aria-expanded', 'false');

        $depth3.slideDown();
        $li.find('h3').addClass('active');
        $(this).attr('aria-expanded', 'true');
      }
      return false;
    }
  });

  $('#mobileMenuBox .mobileDepth02 li:has(ul)').children('h3').addClass('depth03');
  $('#mobileMenuBox .mobileDepth02 li:has(ul)').children('h3').find('a').attr('aria-expanded', 'false');

  //헤더 - 모달
  $('#headerWrap .modalBtn').click(function () {
    const target = $(this).attr('aria-controls');

    $(this).addClass('active').attr('aria-expanded', 'true');
    $('#' + target).attr('aria-hidden', 'false');
  });

  $('#headerWrap .closeBtn').click(function () {
    const $modal = $(this).closest('.modalBox');
    const modalId = $modal.attr('id');

    $modal.attr('aria-hidden', 'true');
    $('#headerWrap .modalBtn[aria-controls="' + modalId + '"]')
      .removeClass('active')
      .attr('aria-expanded', 'false')
      .focus();
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

  $('.zoomBtn').on('mouseenter focus', showTooltip);
  $('.zoomBtn').on('mouseleave blur', hideTooltip);

  updateZoom();

  //푸터
  $('#footerWrap .selectBtn').click(function () {
    const isActive = $(this).hasClass('active');

    $('#footerWrap .selectBtn')
      .removeClass('active')
      .attr('aria-expanded', 'false');

    $('#footerWrap .selectList').attr('aria-hidden', 'true');

    if (!isActive) {
      $(this)
        .addClass('active')
        .attr('aria-expanded', 'true');

      $('#' + $(this).attr('aria-controls')).attr('aria-hidden', 'false');
    }
  });

});
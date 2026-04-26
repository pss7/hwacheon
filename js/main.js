$(function () {

  //메인 슬라이드 영역
  $('#visualWrap .slickBox .slick').on('beforeChange', function () {
    $('#visualWrap .visualBox').removeClass('active');
  });

  $('#visualWrap .slickBox .slick').on('init afterChange', function () {
    $('#visualWrap .visualBox').addClass('active');
  });

  $('#visualWrap .slickBox .slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    speed: 1500,
    fade: true,
  });

  //의사일정영역
  const $list = $('.scheduleListBox');
  const $items = $list.find('li');

  $items.each(function (index) {
    this.style.setProperty('--index', index);
  });

  $('.btnArrowBox .arrowBtn').on('click', function () {
    $list.removeClass('motion');
    void $list[0].offsetWidth; // 재실행
    $list.addClass('motion');
  });

  //화천군의회 영역
  function scrollActive() {
    let scrollPos = $(window).scrollTop();
    let windowH = $(window).height();
    let triggerPoint = scrollPos + (windowH / 2);

    $('.scrollElement').each(function () {
      let $this = $(this);
      let elementTop = $this.offset().top;
      let elementH = $this.outerHeight();

      if (triggerPoint > elementTop + (elementH * 0.1)) {
        $this.addClass('active');
      }
    });
  }

  $(window).on('load scroll resize', scrollActive);

  //화천군의회 소개 영역 - 슬라이드
  $('#introduceWrap .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#introduceWrap .control .prevArrowBtn'),
    nextArrow: $('#introduceWrap .control .nextArrowBtn'),
    autoplaySpeed: 3000,
    speed: 700,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('#introduceWrap .btnBox .memberBtn').on('click', function () {
    const idx = $(this).index();
    $('#introduceWrap .slider-for').slick('slickGoTo', idx);
  });

  $('#introduceWrap .slider-for').on('afterChange', function (event, slick, currentSlide) {
    $('#introduceWrap .btnBox .memberBtn').removeClass('active');
    $('#introduceWrap .btnBox .memberBtn').eq(currentSlide).addClass('active');
  });

  $('#introduceWrap .btnBox .memberBtn').first().addClass('active');

  //화천군의회 소개 영역 - 탭
  $('#introduceWrap .noticeContentBox').hide().attr('aria-hidden', 'true');
  $('#introduceWrap .noticeContentBox').first().show().attr('aria-hidden', 'false');

  $('#introduceWrap .tabBtn').click(function () {
    let idx = $(this).index();

    $('#introduceWrap .tabBtn')
      .removeClass('active')
      .attr('aria-selected', 'false');

    $(this)
      .addClass('active')
      .attr('aria-selected', 'true');

    $('#introduceWrap .noticeContentBox')
      .hide()
      .attr('aria-hidden', 'true');

    $('#introduceWrap .noticeContentBox')
      .eq(idx)
      .fadeIn(600)
      .attr('aria-hidden', 'false');
  });

  //스크롤 그라데이션 
  $('.councilActivityListWrap').each(function () {
    const $wrap = $(this);
    const $list = $wrap.find('.councilActivityList');

    $list.scroll(function () {
      const scrollTop = $(this).scrollTop();
      const listHeight = $(this).innerHeight();
      const scrollHeight = this.scrollHeight;

      const hasScroll = scrollHeight > listHeight + 1;
      const isScrollEnd = scrollTop + listHeight >= scrollHeight - 5;

      $wrap.toggleClass('hasScroll', hasScroll);
      $wrap.toggleClass('scrollEnd', hasScroll && isScrollEnd);
    });

    $list.scroll();
  });

});
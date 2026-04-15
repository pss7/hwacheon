$(function () {

  //상단 비주얼
  $(window).load(function () {
    $('#subVisualWrap').addClass('active');
  });

  const $rolling = $('#subVisualWrap .titleBox h3 .rollingText');
  const itemHeight = 40;
  const interval = 2000;

  setInterval(function () {
    $rolling.animate(
      { marginTop: -itemHeight + 'px' },
      500,
      function () {
        $rolling.append($rolling.find('span').first());
        $rolling.css('margin-top', 0);
      }
    );
  }, interval);

  //서브메뉴
  $('#contentWrap .contentTopBox .subMenuBtn').click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(this).parents('.subMenuBox').hasClass('active')) {
      $(this).attr('aria-expanded', 'false');
      $(this).parents('.subMenuBox').removeClass('active');
    } else {
      $(this).attr('aria-expanded', 'true');
      $(this).parents('.subMenuBox').addClass('active');
    }
  });

  //링크 복사 
  $('#contentWrap .utilBox .shareBtn').click(function (e) {
    e.preventDefault();

    const url = location.href;

    navigator.clipboard.writeText(url)
      .then(function () {
        alert('링크가 복사되었습니다.');
      })
      .catch(function () {
        alert('복사에 실패했습니다.');
      });
  });

  //프린트
  $('#contentWrap .utilBox .printerBtn').click(function (e) {
    e.preventDefault();
    window.print();
  });

  //연혁
  $(window).scroll(function () {
    if ($('#contentWrap .historyBox .historyClockBox').length > 0 &&
      $('#contentWrap .historyBox .historyClockBox')[0].getBoundingClientRect().top <= 30) {
      $('#contentWrap .historyBox .historyClockBox').addClass('sticky');
    } else {
      $('#contentWrap .historyBox .historyClockBox').removeClass('sticky');
    }
  });

  //만화로 보는 화천 군의회
  $('.comicsBox .comicsContentBox .comicsList').scroll(function () {
    $(this).parents('.comicsContentBox').toggleClass(
      'isEnd',
      this.scrollTop + this.clientHeight >= this.scrollHeight - 1
    );
  }).trigger('scroll');

  //현역의원
  $('.currentMemberBox .tabContentBox').hide();
  $('.currentMemberBox .tabContentBox').first().show();

  $('.currentMemberBox .tabList li .tabBtn').attr('aria-selected', 'false');
  $('.currentMemberBox .tabList li').first().children('.tabBtn').attr('aria-selected', 'true');

  $('.currentMemberBox .currentMemberTabContent').hide();
  $('.currentMemberBox .tabContentBox').eq(1).find('.currentMemberTabContent').first().show();
  $('.currentMemberBox .tabContentBox').eq(2).find('.currentMemberTabContent').first().show();

  $('.currentMemberBox .currentMemberTab').each(function () {
    $(this).find('.tabBtn').attr('aria-selected', 'false');
    $(this).find('li').first().children('.tabBtn').attr('aria-selected', 'true');
  });

  // 상단 탭
  $('.currentMemberBox .tabList li').click(function () {
    $('.currentMemberBox .tabList li').children().removeClass('active').attr('aria-selected', 'false');
    $(this).children().addClass('active').attr('aria-selected', 'true');

    $('.currentMemberBox .tabContentBox').hide();
    $('.currentMemberBox .tabContentBox').eq($(this).index()).show();
  });

  // 내부 탭
  $('.currentMemberBox .currentMemberTab li').click(function () {
    $(this).parent().children().children().removeClass('active').attr('aria-selected', 'false');
    $(this).children().addClass('active').attr('aria-selected', 'true');

    $(this).parent().next().children('.currentMemberTabContent').hide();
    $(this).parent().next().children('.currentMemberTabContent').eq($(this).index()).show();
  });

  //역대의원
  $('.formerMemberBox .formerMemberLayoutBox').hide();
  $('.formerMemberBox .formerMemberLayoutBox').first().show();

  $('.formerMemberBox .tabList li .tabBtn').attr('aria-selected', 'false');
  $('.formerMemberBox .tabList li').first().children('.tabBtn').attr('aria-selected', 'true');

  $('.formerMemberBox .tabList li').click(function () {
    $('.formerMemberBox .tabList li').removeClass('active');
    $(this).addClass('active');

    $('.formerMemberBox .tabList li').children('.tabBtn').removeClass('active').attr('aria-selected', 'false');
    $(this).children('.tabBtn').addClass('active').attr('aria-selected', 'true');

    $('.formerMemberBox .formerMemberLayoutBox').hide();
    $('.formerMemberBox .formerMemberLayoutBox').eq($(this).index()).show();
  });

  //드롭다운
  $('.toggleBtn').click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass('active');
  });

  $('.selectCloseBtn').click(function () {
    $(this).parent().parent().removeClass('active');
  });



});
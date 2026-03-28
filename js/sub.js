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

});
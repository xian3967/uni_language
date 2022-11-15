(function($) {
  const months = [
      { 'id': 1, 'name': '1月' },
      { 'id': 2, 'name': '2月' },
      { 'id': 3, 'name': '3月' },
      { 'id': 4, 'name': '4月' },
      { 'id': 5, 'name': '5月' },
      { 'id': 6, 'name': '6月' },
      { 'id': 7, 'name': '7月' },
      { 'id': 8, 'name': '8月' },
      { 'id': 9, 'name': '9月' },
      { 'id': 10, 'name': '10月' },
      { 'id': 11, 'name': '11月' },
      { 'id': 12, 'name': '12月' },
  ];
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth() + 1;


  function letsCheck(year, month) {
      var daysInMonth = new Date(year, month, 0).getDate();
      var firstDay = new Date(year, month, 01).getUTCDay();
      var array = {
          daysInMonth: daysInMonth,
          firstDay: firstDay
      };
      return array;
  }


  function makeCalendar(year, month) {
      var getChek = letsCheck(year, month);
      getChek.firstDay === 0 ? getChek.firstDay = 7 : getChek.firstDay;
      $('#calendarList').empty();
      $('#modalYearMonth').empty();
      for (let i = 1; i <= getChek.daysInMonth; i++) {
          if (i === 1) {
              var div = '<li id="' + i + '" style="grid-column-start: ' + getChek.firstDay + ';" onClick="calendarClickEvent(this);">1</li>';
          } else {
              var div = '<li id="' + i + '" onClick="calendarClickEvent(this);">' + i + '</li>'
          }
          $('#calendarList').append(div);
      }
      monthName = months.find(x => x.id === month).name;
      $('#yearMonth').text(year + '年 ' + monthName);
      $('#modalYearMonth').text(year + '年 ' + monthName);
  }


  function nextMonth() {
      currentMonth = currentMonth + 1;
      if (currentMonth > 12) {
          currentYear = currentYear + 1;
          currentMonth = 1;
      }
      $('#calendarList').empty();
      $('#modalYearMonth').empty();
      $('#yearMonth').text(currentYear + '年 ' + currentMonth);
      $('#modalYearMonth').text(currentYear + '年 ' + currentMonth);
      makeCalendar(currentYear, currentMonth);
  }


  function prevMonth() {
      currentMonth = currentMonth - 1;
      if (currentMonth < 1) {
          currentYear = currentYear - 1;
          currentMonth = 12;
      }
      $('#calendarList').empty();
      $('#modalYearMonth').empty();
      $('#yearMonth').text(currentYear + '年 ' + currentMonth);
      $('#modalYearMonth').text(currentYear + '年 ' + currentMonth);
      makeCalendar(currentYear, currentMonth);
  }
  $(function() {
    makeCalendar(currentYear, currentMonth);
  });
  $('#js-calendarBtnPrev').on('click', function() {
    prevMonth();
  });
  $('#js-calendarBtnNext').on('click', function() {
    nextMonth();
  });
  $('.js-calendar__time').on('click', function() {
    if ($('.js-calendar__time').is(':checked')) {
      $('.c-calendar__modal__submit').removeClass('disabled');
    } else {
      $('.c-calendar__modal__submit').addClass('disabled');
    }
  });


  $('.js-select').on('click', function() {
    $('.js-calendar__time').each(function() {
      if ($(this).is(':checked')) {
        let date = $('#modalYearMonth').text();
        let time = $(this).val();
        let plan = $('.js-calendar__plan:checked').val();
        let lessonList = [
          '<li class="p-mypage-lesson__schedule__result__list__item">',
          '<div class="p-mypage-lesson__schedule__result__list__item__close" onClick="calendarRemoveEvent(this);"></div>',
          '<h4 class="p-mypage-lesson__schedule__result__list__item__title"><span>レッスンチケット</span></h3>',
          '<p class="p-mypage-lesson__schedule__result__text schedule-result-plan">' + plan + '</p>',
          '<div class="p-mypage-lesson__schedule__result__list__item__ticket"></div>',
          '<p class="p-mypage-lesson__schedule__result__text-date schedule-result-date">' + date + '</p>',
          '<p class="p-mypage-lesson__schedule__result__text-time schedule-result-time">' + time + '</p>',
          '</li>'
        ].join("");
        $('.p-mypage-lesson__schedule__result__list').append(lessonList);
      }
    });
    $('.c-calendar__modal').fadeOut();
  });

  $('.js-modal-close').on('click', function() {
    $('.c-calendar__modal').fadeOut();
  });
})(jQuery);

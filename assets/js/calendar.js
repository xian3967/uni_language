(function($) {
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
          '<input type="hidden" name="cal_plan[]" value="' + plan + '">',
          '<input type="hidden" name="cal_date[]" value="' + date + '">',
          '<input type="hidden" name="cal_time[]" value="' + time + '">',
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

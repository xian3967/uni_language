//main page slide
$(document).ready(function() {
  $('.p-main__main-slider').owlCarousel({
    loop: true,
    nav: false,
    center: true,
    responsiveClass: true,
    autoplay: true,
    arrow: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
        margin: 10,
        merge: true,
      },
      767: {
        items: 1
      }
    }
  })
})
//

//popup slide
$(function() {
  $(document).ready(function() {
    popupSlick();
    $('.c-popup').css('opacity','1');
    slickCardMatchHeight('c-popup__slider', 'c-popup__slider__item');
  });
  $(window).resize(function() {
    setTimeout(function() {
      slickCardMatchHeight('c-popup__slider', 'c-popup__slider__item');
    }, 100);
  });

  function popupSlick() {
    if ($('.c-popup__slider').length) {
      $('.c-popup__slider').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        loop: true,
        swipe: true,
        speed: 500,
        touchMove: true,
        prevArrow: '<a href="" class="prevbtn"></a>',
        nextArrow: '<a href="" class="nextbtn"></a>',
      });
      $('.c-popup').fadeIn();
    }
  };
  function slickCardMatchHeight(parent, target) {
    $('.' + target).css('height', 'auto');
    $('.' + parent).each(function() {
      let highestBox = 0;
      $('.' + target, this).each(function() {
        if ($(this).height() > highestBox)
          highestBox = $(this).height();
      });
      $('.' + target, this).height(highestBox);
    });
  };
});
//

$(function() {
  // ハンバーグメニュー用
  $('.js-hambugermenu__button').click(function() {
    if ($('.l-header__logo-wrap__sp-nav-btn').hasClass('is-openMenu')) {
      $('.l-header__nav-sp').animate({
        right: '-300px'
      }, 400);
      $('.l-header__nav-sp__bg').hide();
    } else {
      $('.l-header__nav-sp').animate({
        right: '0'
      }, 400);
      $('.l-header__nav-sp__bg').show();
    }
    $('.l-header__logo-wrap__sp-nav-btn').toggleClass('is-openMenu');
    $('body, html').toggleClass('isFixed');
  });
  $('.l-header__nav-sp__bg').click(function() {
    $('.js-hambugermenu__button').click();
  });
});


//aside accordion
(function($) {
  $('.js-aside-accordion').on('click', function() {
    $('.js-aside-accordion').not(this).removeClass('is-open');
    $('.js-aside-accordion').not(this).parent('.l-aside__nav__link-wrap').next().slideUp();
    $(this).parent('.l-aside__nav__link-wrap').next().slideToggle();
    $(this).toggleClass('is-open');
  });
})(jQuery);
//

//include
//$('#aside').load('/include/aside.html');
//

//アセレクト生年月日用
$(function() {
  var now = new Date();
  var year = now.getFullYear();
  var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
  var day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
  for (var i = 1900; i <= year; i++) {
    $('#js-select__year').append('<option value="' + i + '">' + i + '年</option>');
  }
  for (var i = 1; i <= 12; i++) {
    var mm = i > 9 ? i : "0" + i;
    $('#js-select__month').append('<option value="' + mm + '">' + mm + '月</option>');
  }
  for (var i = 1; i <= 31; i++) {
    var dd = i > 9 ? i : "0" + i;
    $('#js-select__day').append('<option value="' + dd + '">' + dd + '日</option>');
  }

  $('#js-select__year,#js-select__month').change(function() {
    selected_year = $('#js-select__year').val();
    selected_month = $('#js-select__month').val();

    if (selected_year == year && selected_month == month) {
      var last_date = date;
    } else {
      if (selected_month == 2) {
        if ((Math.floor(selected_year % 4 == 0)) && (Math.floor(selected_year % 100 != 0)) || (Math.floor(selected_year % 400 == 0))) {
          last_date = 29;
        } else {
          last_date = 28;
        }
      } else if (selected_month == 4 || selected_month == 6 || selected_month == 9 || selected_month == 11) {
        last_date = 30;
      } else {
        last_date = 31;
      }
    }

    $('#js-select__day').children('option').remove();
    for (var i = 1; i <= last_date; i++) {
      var dd = i > 9 ? i : "0" + i;
      $('#js-select__day').append('<option value="' + dd + '">' + dd + '日</option>');
    }
  });

  $('#js-select__year').val('1990').attr('selected', 'true');
  $('#js-select__month').val('01').attr('selected', 'true');
  $('#js-select__day').val('01').attr('selected', 'true');

});
//

//lesson-list page hover
jQuery(document).ready(function() {
  jQuery('.tutor').hover(function() {
    jQuery('.p-lesson').addClass('tutor_bg_animation');
    jQuery('.p-lesson').removeClass('tutor_bg_animation-out');
  }, function() {
    jQuery('.p-lesson').removeClass('tutor_bg_animation');
    jQuery('.p-lesson').addClass('tutor_bg_animation-out');
  });
});
jQuery(document).ready(function() {
  jQuery('.student').hover(function() {
    jQuery('.p-lesson').addClass('student_bg_animation');
    jQuery('.p-lesson').removeClass('student_bg_animation-out');
  }, function() {
    jQuery('.p-lesson').removeClass('student_bg_animation');
    jQuery('.p-lesson').addClass('student_bg_animation-out');
  });
});

//scroll event
$(function() {
  $(document).ready(function() {
    scrollAnimation()
  });
  $(window).scroll(function() {
    scrollAnimation();
  });

  function scrollAnimation() {
    $('.scroll-animation').each(function() {
      let POS = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > POS - windowHeight + 100) {
        $(this).addClass('is-animated');
      }
    });
  }
});
//


//のコピー用
$('.js-copybtn').on('click', function() {
  var text = $(this).parent().find('.js-copytext').text();
  var textarea = $('<textarea></textarea>');
  textarea.text(text);
  $(this).append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  if (!$(this).hasClass('is-show')) {
    $(this).addClass('is-show');
    $(this).next('.js-copyalert').fadeIn().delay(1500).fadeOut(300);
  }
  setTimeout(function() {
    $('.js-copybtn').removeClass('is-show');
  }, 1500);
});
//


//popup localStorage
(function($) {
  var nowDate = new Date();
  if (localStorage.getItem('saveEventTimePopup')) {
    var saveDate = localStorage.getItem('saveEventTimePopup', saveDate);
    var savedDate = new Date(saveDate);
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;
    var interval = nowDate.getTime() - savedDate.getTime();
    var days = Math.floor(interval / msecPerDay);
    var hours = Math.floor(interval / msecPerHour);
    var minutes = Math.floor(interval / msecPerMinute);
    var seconds = Math.floor(interval / 1000);
    if (days >= 7) {
      document.querySelector('.c-popup__localstorage').style.display = 'block';
      localStorage.removeItem('saveEventTimePopup');
    } else {
      document.querySelector('.c-popup__localstorage').style.display = 'none';
    }
  }
  $('.js-popuop-close').on('click', function() {
    $('.c-popup__localstorage').fadeOut();
  });
  $('.js-popup-localstorage').on('click', function() {
    $('.c-popup__localstorage').fadeOut();
    var saveDate = new Date();
    localStorage.setItem('saveEventTimePopup', saveDate);
  });
})(jQuery);
//

//lesson accordion
(function($) {
  $('.js-sidebar-accordion').on('click', function() {
    $(this).toggleClass('is-open').next().slideToggle();
  });
})(jQuery);
//

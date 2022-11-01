//main page slide
$(document).ready(function() {
  $('.p-main__main-slider').owlCarousel({
    loop: true,
    nav: false,
    center: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
        margin:10,
        merge:true,
      },
      767: {
        items: 1
      }
    }
  })
})
//

$(function() {
  // ハンバーグメニュー用
  $('.js-hambugermenu__button').click(function() {
    if ($('.l-header__logo-wrap__sp-nav-btn').hasClass('is-openMenu')) {
      $('.l-header__nav-sp').animate({ right:'-300px' }, 400);
      $('.l-header__nav-sp__bg').hide();
    } else {
      $('.l-header__nav-sp').animate({ right:'0' }, 400);
      $('.l-header__nav-sp__bg').show();
    }
    $('.l-header__logo-wrap__sp-nav-btn').toggleClass('is-openMenu');
    $('body, html').toggleClass('isFixed');
  });
  $('.l-header__nav-sp__bg').click(function() {
    $('.js-hambugermenu__button').click();
  });
});


$(function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
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
$(function(){
    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1);
    var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());
    for(var i = 1900 ; i <= year ; i++) {
        $('#js-select__year').append('<option value="' + i + '">' + i + '年</option>');
    }
    for(var i=1; i <= 12; i++) {
        var mm = i > 9 ? i : "0"+i ;
        $('#js-select__month').append('<option value="' + mm + '">' + mm + '月</option>');
    }
    for(var i=1; i <= 31; i++) {
        var dd = i > 9 ? i : "0"+i ;
        $('#js-select__day').append('<option value="' + dd + '">' + dd+ '日</option>');
    }


    // 日(変更)：選択された年・月に合わせて、適した日の値を選択肢にセットする
    $('#js-select__year,#js-select__month').change(function() {
      selected_year = $('#js-select__year').val();
      selected_month = $('#js-select__month').val();

      // 現在の年・月が選択された場合、日の選択肢は 1~現在の日付 に設定
      // それ以外の場合、各月ごとの最終日を判定し、1~最終日 に設定
      if (selected_year == year && selected_month == month ) {
          var last_date = date;
      }else{
          // 2月：日の選択肢は1~28日に設定
          // ※ ただし、閏年の場合は29日に設定
          if (selected_month == 2) {
              if((Math.floor(selected_year%4 == 0)) && (Math.floor(selected_year%100 != 0)) || (Math.floor(selected_year%400 == 0))){
                  last_date = 29;
              }else{
                  last_date = 28;
              }

          // 4, 6, 9, 11月：日の選択肢は1~30日に設定
          }else if(selected_month == 4 || selected_month == 6 || selected_month == 9 || selected_month == 11 ){
              last_date = 30;

          // 1, 3, 5, 7, 8, 10, 12月：日の選択肢は1~31日に設定
          }else{
              last_date = 31;
          }
      }

      $('#js-select__day').children('option').remove();
      for (var i = 1; i <= last_date; i++) {
          var dd = i > 9 ? i : "0"+i ;
          $('#js-select__day').append('<option value="' + dd + '">' + dd+ '日</option>');
      }
  });

  $('#js-select__year').val('1990').attr('selected', 'true');
  $('#js-select__month').val('01').attr('selected', 'true');
  $('#js-select__day').val('01').attr('selected', 'true');

});
//

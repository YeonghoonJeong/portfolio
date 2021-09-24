$(function() {
  // var a = $('.board_wrap .board_list .board_slider ul li:first-child a p').text();
  // //alert(a.length)
  // var b = a.substr(0,70)
  // //alert(b.length)
  // var c  = b.concat('...')
  // $('.board_wrap .board_list .board_slider ul li:first-child a p').text(c)

  $('.mo_gnb_btn').click(function() {
    $('#gnb').show();
    $('header').css({'position' : 'fixed', 'width' : '100%', 'height' : '100%', 'background' : '#FFF'});
    $('#header .util a.eng').css({'display' : 'block'});
  })

  //#header .search_wrap
  $('.util .search_wrap button').click(function() {
    $('form').show();
  });

  //visual_slider
  $('.visual_slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'visual_dot'
  })

  $('.business_wrap .tabs li a').click(function() {
    var tab_btn = $(this).parent();

    $('.business_wrap .tabs li').removeClass('on')
    tab_btn.addClass('on')

    //alert(tab_btn.index())
    var n = tab_btn.index()
    $('.contents_wrap').children('.content').hide()
    $('.contents_wrap').children('.content').eq(n).show()
  })

  $('.news_slide').slick({
    slidesToShow : 3,
    prevArrow : $('.news .prev'),
    nextArrow : $('.news .next'),
    responsive: [{
      breakpoint : 1199,
      settings : {
        slidesToShow : 1
      }
    }]
  })

  $('.campaign_slide').slick({
    slidesToShow : 3,
    prevArrow : $('.campaign .prev'),
    nextArrow : $('.campaign .next'),
    responsive: [{
      breakpoint : 1199,
      settings : {
        slidesToShow : 1
      }
    }]
  })

  //.family_site
  $('.family_site button').click(function() {
    $(this).next().toggle();
  })



})
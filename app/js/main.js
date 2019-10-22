$(function(){

  $('.slider-top__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
  });

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
  });


  
    $('ul.tabs').delegate('li:not(.current)', 'click', function () {
        act(this);
    })
    $('.prev').click(function(){
        var i=$('.current').index();
        var obj=$('.tabs > li');
        i=(i<1)? obj.length-1: i-1;
        act(obj.get(i));
    });
    $('.next').click(function(){
        var i=$('.current').index();
        var obj=$('.tabs > li');
        i=++i%obj.length;
        act(obj.get(i));
    });
    function act(Obj){
        $(Obj).addClass('current').siblings().removeClass('current')
            .parents('div.fashion__inner').find('div.box').eq($(Obj).index())
            .show().siblings('div.box').hide();
    };



  
});
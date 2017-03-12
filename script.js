//animate subpages
$(window).scroll(function(){
    if($(this).scrollTop() > 120){
        $('.intro').addClass('animated fadeInUp');
    }
    else{
        $('.intro').removeClass('animated fadeInUp');
    }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 120){
        $('.team').addClass('animated fadeInUp');
    }
    else{
        $('.team').removeClass('animated fadeInUp');
    }
});

//animate the navigation bar
$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('header').addClass('shrink');
    }
    else{
        $('header').removeClass('shrink');
    }
});

//animate "what I did"
$(window).scroll(function(){
    if($(this).scrollTop() > 120){
        $('#did').addClass('animated fadeInUp');
    }
    else{
        $('#did').removeClass('animated fadeInUp');
    }
});

//animate projects div
$(window).scroll(function(){
    if($(this).scrollTop()>200){
        $('.projects').addClass('animated fadeInUp');
    }
    else{
        $('.projects').removeClass('animated fadeInUp');
    }
});

//animate "what I can do"
$(window).scroll(function(){
    if($(this).scrollTop() > 800){
        $('#cando').addClass('animated fadeInUp');
    }
    else{
        $('#cando').removeClass('animated fadeInUp');
    }
});

//animate skill div
$(window).scroll(function(){
    if($(this).scrollTop()>1000){
        $('.trunk').addClass('animated fadeInUp');
    }
    else{
        $('.trunk').removeClass('animated fadeInUp');
    }
});


//animate the three rotating balls
var path = anime.path('path');

anime({
  targets: 'div#green',
  translateX: path,
  translateY: path,
  rotate: path,
  duration: 60000,
  loop: true,
  easing: 'linear',
});

anime({
  targets: 'div#blue',
  translateX: path,
  translateY: path,
  rotate: path,
  duration: 40000,
  loop: true,
  easing: 'linear'
});

anime({
  targets: 'div#yellow',
  translateX: path,
  translateY: path,
  rotate: path,
  duration: 50000,
  loop: true,
  easing: 'linear',
});

anime({
  targets: 'path',
  opacity: 0,
  duration: 4000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo',
});

//remove animation when window size is small

(function($) {
    var $window = $(window)

    $window.resize(function resize(){
        if ($window.width() < 600) {
            return $('.small').addClass('invisible');
        }

        $('.small').removeClass('invisible');
    }).trigger('resize');
})(jQuery);


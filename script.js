//animate the navigation bar

$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('nav').addClass('shrink');
    }
    else{
        $('nav').removeClass('shrink');
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
  duration: 20000,
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



//animate the skills section

var offset = $('div#research').offset().top/2;

$(document).on('scroll',function(){
   if($(document).scrollTop() > offset){
       $('div#coding-side').addClass('sidebar-coding');
       $('div#research-side').addClass('sidebar-research');
       $('div#design-side').addClass('sidebar-design');
       $('div#research').addClass('skillball');
       $('div#design').addClass('skillball');
       $('div#coding').addClass('skillball');
       $('h2#cando').addClass('skillball');
       
   } 
    else{
        $('div#research-side').removeClass('sidebar-research');
        $('div#design-side').removeClass('sidebar-design');
        $('div#coding-side').removeClass('sidebar-coding');
        $('div#research').removeClass('skillball');
        $('div#design').removeClass('skillball');
        $('div#coding').removeClass('skillball');
        $('h2#cando').removeClass('skillball');
    }
});

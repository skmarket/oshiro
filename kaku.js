$(function(){
  let carUl = $('.carousel > ul');
  $('.carousel > span').on('click', function(){
    if($(this).hasClass('next')){
      carUl.animate({'margin-left':'-100%'}, 1000, function(){
        carUl.css('margin-left', '0');
        carUl.append($('.carousel > ul > li:first-child'));
      });
    } else{
      carUl.prepend($('.carousel > ul > li:last-child'));
      carUl.css('margin-left', '-100%');
      carUl.animate({'margin-left':'0'}, 1000);
    }
  });
});
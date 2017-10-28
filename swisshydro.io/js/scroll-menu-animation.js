$(document).scroll(function() {
  var cutoff = $(window).scrollTop();

  $('section').each(function(){

      if($(this).offset().top + $(this).height() > cutoff){

          /*$('section').removeClass('current');
          $(this).addClass('current');*/
          var id = $(this).attr('id');
          $('.main-menu-item').removeClass('main-menu-active');
          $('.sidemenu-item').removeClass('main-menu-active');
          if(id == "tokensales" || id == "tokensale2"){
            $('.menu_tokensale').addClass('main-menu-active');
          }else{
            $('.menu_'+id).addClass('main-menu-active');
          }

          return false; // stops the iteration after the first one on screen
      }
  });
});

$(document).ready(function() {

  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  },3000);
});

$(document).ready(function() {
    $('.flamingo').hover(
        /* mouseover */
        function(){
            $(this).stop().animate({
                    top : $('.outer').position().top
            }, 300);
        },
        /* mouseout*/
        function(){
            $(this).stop().animate({
                top : $('.outer').position().top + 120
            }, 300);
        }
    );
});

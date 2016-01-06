
$(document).ready(function() {
        $('.intro').css({ opacity: 1});

        // $('body').css('display', 'none');
        // $('body').fadeIn(1000);

});
setInterval(function() {
  $(".logo-property")
  // .velocity('fadeIn', {duration: 500, easing: easeOut, delay: 3})
  // .velocity({ blur: 10 }, 1200);

})

//timecard fade in on scroll animation
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var right_of_object = $(this).offset().left + $(this).outerWidth();
            var right_of_window = $(window).scrollLeft() + $(window).width();
            /* If the object is completely visible in the window, fade it it */
            if(right_of_object < 1200){
              $(this).velocity({'opacity':'1'},100);
            }
            else if( right_of_window > right_of_object ){

                $(this).velocity({'opacity':'1', 'margin-left':'50px'},800);
            }
        });
    });

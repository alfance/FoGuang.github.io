$( document ).ready(function() {
    $('.random').css("border","3px solid red");
    // // $('.timeline-each').css('opacity','0.5');
    // // $("h1, h2, p").addClass("blue");
    //  $("div").css("border","3px solid red");
  var audio1 = document.getElementById("audio1_1");
  $('body').css('backgroundImage','url("../../img/layout/slide-bg.png")');
;});

  // $('body').css('display', 'none');
        // $('body').fadeIn(1000);

//timecard fade in on scroll animation
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          var right_of_object = $(this).offset().left + $(this).outerWidth();
          var right_of_window = $(window).scrollLeft() + $(window).width();
          /* If the object is completely visible in the window, fade it it */
          if(right_of_object < right_of_window){
            $(this).animate({'opacity':'1'},500);
            setTimeout(
              function()
              {$('.timeline-img').fadeIn(500);
                //do something special
              }, 5000);

          }
          else if( right_of_window > right_of_object ){

              $(this).animate({'opacity':'1'},800);
          }
      });
  });

//closing for the doc ready function

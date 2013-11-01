function UpdateTableHeaders() {
   $(".persist-area").each(function() {
   
       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           floatingHeader = $(".floatingHeader", this);
           skillsHeader = $('.persist-header.techskills').eq(0),
           experienceHeader = $('.persist-header.work-experience').eq(0),
           aboutmeHeader = $('.persist-header.aboutme').eq(0),

           skillsFloatingHeader = $('.persist-header.techskills.floatingHeader');
           experienceFloatingHeader = $('.persist-header.work-experience.floatingHeader');
           aboutmeFloatingHeader = $('.persist-header.aboutme.floatingHeader');
       
       if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {

           floatingHeader.css({
            "visibility": "visible"
           });

           
           skillsHeader.css({
            "visibility": "hidden"
           });


           if(experienceFloatingHeader.css('visibility') == 'visible') {
            experienceHeader.css({
            "visibility": "hidden"
           });
        }

            if(aboutmeFloatingHeader.css('visibility') == 'visible') {
            aboutmeHeader.css({
            "visibility": "hidden"
           });

        }
       
       } else {
           
           floatingHeader.css({
            "visibility": "hidden"
           }); 

           if($.trim(skillsFloatingHeader.css('visibility')) == 'hidden') {
          skillsHeader.css('visibility','visible');
          };

        if($.trim(experienceFloatingHeader.css('visibility')) == 'hidden') {
          experienceHeader.css('visibility','visible');
          };

          if($.trim(aboutmeFloatingHeader.css('visibility')) == 'hidden') {
          aboutmeHeader.css('visibility','visible');
          };
       };
   });
}

// DOM Ready      
$(function() {

   var clonedHeaderRow;

   $(".persist-area").each(function() {
       clonedHeaderRow = $(".persist-header", this);
       clonedHeaderRow
         .before(clonedHeaderRow.clone())
         .css("width", clonedHeaderRow.width())
         .addClass("floatingHeader");
         
   });
   
   $(window)
    .scroll(UpdateTableHeaders)
    .trigger('scroll');
});


(function() {
  
  var $window = $(window);
  var $arrow = $('.arrow');


  $arrow.hide();
  var isVisible = false;
  $window.scroll(function(){
     var shouldBeVisible = $window.scrollTop()>200;
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $arrow.fadeIn("slow");
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $arrow.fadeOut("slow");
    }
});

})();







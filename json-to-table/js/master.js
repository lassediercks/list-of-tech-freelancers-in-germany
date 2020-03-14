$(window).scroll(function() {
   if($(window).scrollTop() >= 100) {
      $('.entry-btn').addClass('in-view');
   } else {
      $('.entry-btn').removeClass('in-view');
   }
});


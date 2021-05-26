$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
    }
});



jQuery(document).ready(function() {
          
    var btn = $("#button");
  
    $(window).scroll(function() {
      if ($(window).scrollTop() < 200) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });

//   $(document).ready(function(){
//     // Delay the action by 10000ms
//     setTimeout(function(){
//        // Display the div containing the class "bottomdiv"
//        $(".header-title").show();
//     }, 1200);
//  });

    

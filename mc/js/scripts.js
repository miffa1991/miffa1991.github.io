jQuery(document).ready(function() {  
  jQuery("#dslc-theme-content-inner").children("p").css("display", "none");
  jQuery(".entry-content").children("p").css("display", "none");

  var height = jQuery(".da-img").width() / 1.5584;
  jQuery(".da-img").css("height", height);
  jQuery(".da-img").css("background-size", "100%");
  jQuery(".da-img").css("background-repeat", "no-repeat");
  jQuery(".da-slide").css("height", height);
  jQuery(".da-slider").css("height", height);

  // console.log(jQuery(".da-img").width(), ' x ', height);
    var marker = true;

    function countScroll() {
        // function code here ...
        marker = false;
    }

    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 600) {
        jQuery(function ($) {
          if (marker) {
            countScroll();
            
            $('.timer').each(count);

            function count(options) {
              var $this = $(this);
              options = $.extend({}, options || {}, $this.data('countToOptions') || {});
              $this.countTo(options);
            }
          }
        });
      }
    });

    // jQuery('a[href^="#"]').click(function(){
    jQuery('a[href^="#about"], a[href^="#projects"], a[href^="#advantage"], a[href^="#work"], a[href^="#partners"], a[href^="#contacts"]').click(function(){
      var el = jQuery(this).attr('href');
      var height = jQuery(el).offset().top;
      height -= 130;
      jQuery('body').animate({
      scrollTop: height}, 1500);
      return false;
    });

    jQuery("#homePage").click(function(){
      window.location.replace("/");
    });
    jQuery("a[href^='#advantage']").click(function(){
      window.location.replace("/#advantage");
    });
    jQuery("a[href^='#projects']").click(function(){
      window.location.replace("/#projects");
    });
    jQuery("a[href^='#contacts']").click(function(){
      window.location.replace("/#contacts");
    });
    //.button').click(function()

    // jQuery('.contact-form').submit(function(e) {
    //   $.post( 
      
    //   "/wp-content/themes/mytheme/submit.php",  
    //   { 
    //     name: jQuery('[name="name"]').val(),
    //     phone: jQuery('[name="phone"]').val()
    //   }, 
    
    //   function( data ) { //ïîñëå îòïðàâêè äàííûõ
    //     jQuery( ".result" ).html(data);
    //     window.location.replace("/thank_you");
    //   }
      
    //   );
    // });

    jQuery('.carousel').carousel({
      interval: 6000
    });
    // console.log("5");
    // new WOW().init();
    // console.log("7");
/****************/
    // jQuery('[type="button"]').click(function() {
  		// $.post(   
  		// "sendEmailPHP.php", //url  
  		// { //äàííûå èç ôîðìû
    // 		email: jQuery('[name="email"]').val(),
    // 		name: jQuery('[name="name"]').val(),
    // 		message: jQuery('[name="comment"]').val()
  		// }, 
  
  		// function( data ) { 
    // 		jQuery( ".result" ).html(data);
  			  
  		// });
    // });
});

jQuery(window).resize(function() {
  var height = jQuery(".da-img").width() / 1.5584;
  jQuery(".da-img").css("height", height);
  jQuery(".da-slide").css("height", height); 
  jQuery(".da-slider").css("height", height);
  // console.log(jQuery(".da-img").width(), ' x ', height);
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  $(document).ready(function() {    
    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 750) {
            $('.bottomMenu').fadeIn();
        } else {
            $('.bottomMenu').fadeOut();
        }
    
    });

    $("#work-btn").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-0
            }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('#nav-icon').toggleClass('open');        
    });
    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
    $('.list-group>a').on('click', function(){
        $('#wrapper').toggleClass('toggled');

    });

    $(".nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
        
    });
    $(".nav-services").click(function(){            
        $('html, body').animate({
                scrollTop: $("#services").position().top-0
            }, 1000);
        
    });
    $(".drop-link").click(function(){            
            $('.nav-services').addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-about').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".nav-packages").click(function(){            
        $('html, body').animate({
                scrollTop: $("#packages").position().top-0
            }, 1000);
        
    });
    $(".nav-location").click(function(){            
        $('html, body').animate({
                scrollTop: $("#location").position().top-0
            }, 1000);
        
    });
    $(".nav-about").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about").position().top-0
            }, 1000);
        
    });
    $(".nav-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-0
            }, 1000);
           });
   
    $(".web-nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
            $(this).addClass('active');
            $('.nav-services').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-about').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".web-nav-services").click(function(){            
        $('html, body').animate({
                scrollTop: $("#services").position().top-0
            }, 1000);
            $(this).addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-about').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".drop-link").click(function(){            
            $('.nav-services').addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-about').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".web-nav-packages").click(function(){            
        $('html, body').animate({
                scrollTop: $("#packages").position().top-0
            }, 1000);
            $(this).addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-services').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-about').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".web-nav-location").click(function(){            
        $('html, body').animate({
                scrollTop: $("#location").position().top-0
            }, 1000);
            $(this).addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-services').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-about').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".web-nav-about").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about").position().top-0
            }, 1000);
            $(this).addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-services').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-contact').removeClass('active');
    });
    $(".web-nav-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-0
            }, 1000);
            $(this).addClass('active');
            $('.nav-home').removeClass('active');
            $('.nav-services').removeClass('active');
            $('.nav-packages').removeClass('active');
            $('.nav-location').removeClass('active');
            $('.nav-about').removeClass('active');
    });


    $(".worship").click(function(){            
        $('html, body').animate({
                scrollTop: $("#worship").position().top-0
            }, 1000);
    });
    $(".bridal").click(function(){            
        $('html, body').animate({
                scrollTop: $("#bridal").position().top-0
            }, 1000);
    });
    $(".wedding").click(function(){            
        $('html, body').animate({
                scrollTop: $("#wedding").position().top-0
            }, 1000);
    });
    $(".reveal").click(function(){            
        $('html, body').animate({
                scrollTop: $("#reveal").position().top-0
            }, 1000);
    });
    $(".baby").click(function(){            
        $('html, body').animate({
                scrollTop: $("#baby").position().top-0
            }, 1000);
    });
    $(".sports").click(function(){            
        $('html, body').animate({
                scrollTop: $("#sports").position().top-0
            }, 1000);
    });
    $(".graduation").click(function(){            
        $('html, body').animate({
                scrollTop: $("#graduation").position().top-0
            }, 1000);
    });
    $(".funeral").click(function(){            
        $('html, body').animate({
                scrollTop: $("#funeral").position().top-0
            }, 1000);
    });
    $(".ceremonies").click(function(){            
        $('html, body').animate({
                scrollTop: $("#ceremonies").position().top-0
            }, 1000);
    });
    $(".serve-btn").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-0
            }, 1000);
    });
    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".panel-heading").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hide.bs.collapse', function() {
        $(this).prev(".panel-heading").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });
      $("#descBtn").click(function() {
        $('#description').removeClass("hide").addClass("show");
        $('#descBtn').removeClass("bg-tab");
        $('#reviews').removeClass("show").addClass("hide");
        $('#revBtn').addClass("bg-tab");
      });

      $("#revBtn").click(function() {
        $('#reviews').removeClass("hide").addClass("show");
        $('#revBtn').removeClass("bg-tab");
        $('#description').removeClass("show").addClass("hide"); 
        $('#descBtn').addClass("bg-tab");
      });
   

    $("side-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
    });
    $("side-shop").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-0
            }, 1000);
    });
    $("side-reviews").click(function(){            
        $('html, body').animate({
                scrollTop: $("#reviews").position().top-0
            }, 1000);
    });
    $("side-about").click(function(){            
        $('html, body').animate({
                scrollTop: $("#about").position().top-100
            }, 1000);
    });
    $("side-mission").click(function(){            
        $('html, body').animate({
                scrollTop: $("#mission").position().top-20
            }, 1000);
    });
    $("side-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-70
            }, 1000);
    });

    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
    });
    $(".serve-btn").click(function(){            
        $('.modal').modal('hide');
    });
    
     // Hide Header on on scroll down
     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('header').outerHeight();
     
     $(window).scroll(function(event){
         didScroll = true;
     });
     
     setInterval(function() {
         if (didScroll) {
             hasScrolled();
             didScroll = false;
         }
     }, 250);
     
     function hasScrolled() {
         var st = $(this).scrollTop();
         
         // Make sure they scroll more than delta
         if(Math.abs(lastScrollTop - st) <= delta)
             return;
         
         // If they scrolled down and are past the navbar, add class .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight){
             // Scroll Down
             $('header').removeClass('nav-down').addClass('nav-up');
         } else {
             // Scroll Up
             if(st + $(window).height() < $(document).height()) {
                 $('header').removeClass('nav-up').addClass('nav-down');
             }
         }
         
         lastScrollTop = st;
     };
})



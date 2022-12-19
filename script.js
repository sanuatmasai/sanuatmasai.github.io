 

GitHubCalendar(".calendar", "sanuatmasai", { responsive: true, tooltips: true});
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // GitHubCalendar(".calendar", "sanuatmasai", { responsive: true });

    // GitHubCalendar(".calendar", "sanuatmasai", { responsive: true });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Backend Developer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java Backend Developer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // $(document).ready(function () {
    //     var owl = $('.carousel');
    //     owl.owlCarousel({
    //         items: 3,
    //         loop: true,
    //         margin: 20,
    //         autoplay: true,
    //         slideTransition: 'linear',
    //         autoplayTimeout: 1000,
    //         autoplaySpeed: 20000,
    //         autoplayHoverPause: true,
    //         autoplayHoverPause: true
    //     });
    // });





    // $('.carousel').owlCarousel({
        // margin: 20,
        // autoplay: true,
        // autoplayHoverPause: false,
        // responsive: {
        //     0:{
        //         items: 1,
        //         nav: false
        //     },
        //     600:{
        //         items: 2,
        //         nav: false
        //     },
        //     1000:{
        //         items: 3,
        //         nav: false
        //     }
        // }
    // });


    window.addEventListener('scroll',function(){
        reveal('.right');
        reveal('.left')
      });
      
      function reveal(x){
          let reveals = document.querySelectorAll(x);
      
          for (let i = 0; i < reveals.length; i++) {
      
              let windowwidth = window.innerWidth;
              let revealtop = reveals[i].getBoundingClientRect().top;
              let revealpoint = 600;
              
              if(revealtop < windowwidth - revealpoint){
                  reveals[i].classList.add('active');
              }else{
                  reveals[i].classList.remove('active');
              }
          }
      }
      
      window.addEventListener('scroll',reveal3);
      
      function reveal3(){
          let reveals = document.querySelectorAll('.down');
      
          for (let i = 0; i < reveals.length; i++) {
      
              let windowheight = window.innerHeight;
              let revealtop = reveals[i].getBoundingClientRect().top;
              let revealpoint = 350;
              
              if(revealtop < windowheight - revealpoint){
                  reveals[i].classList.add('scrolldown');
              }else{
                  reveals[i].classList.remove('scrolldown');
              }
          }
      }
      
      
      window.addEventListener('scroll',reveal2);
      
      function reveal2(){
          let reveals = document.querySelectorAll('.slideup');
      
          for (let i = 0; i < reveals.length; i++) {
      
              let windowheight = window.innerHeight;
              let revealtop = reveals[i].getBoundingClientRect().top;
              let revealpoint = 160;
              
              if(revealtop < windowheight - revealpoint){
                  reveals[i].classList.add('scrollup');
              }else{
                  reveals[i].classList.remove('scrollup');
              }
          }
      }
      
      
      window.addEventListener('scroll',()=>{
        let x = document.querySelector('.iconsticky');
        x.classList.toggle('arrow',window.scrollY > 500);
      })
      
      
      // mediaquery navbar first size javacript ///
      
      const ham = document.querySelector(".ham");
      const title = document.querySelector(".title");
      
      ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        title.classList.toggle("active");
      } )
      
      document.querySelectorAll(".remove-active").forEach(n => n.addEventListener("click", () => {
        ham.classList.remove("active");
        title.classList.remove("active");
      }));
});

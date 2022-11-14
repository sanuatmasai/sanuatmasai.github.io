 

GitHubCalendar(".calendar", "sanuatmasai", { responsive: true });
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
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 20000,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    // GitHubCalendar(".calendar", "sanuatmasai@2023", { responsive: true });
});
// GitHubCalendar(".calendar", "sanuatmasai@2023", { responsive: true });
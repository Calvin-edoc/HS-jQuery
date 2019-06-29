$(document).ready(function () {
    // 下拉式選單 begin
    $('.dropdown').click(function (e) { 
        e.stopPropagation();
        
        $(this).parent().find('.dropdown_open').slideToggle();        
        $(this).toggleClass('active')
        $(this).parent().siblings().find('.dropdown').removeClass('active');
        $(this).parent().siblings().find('.dropdown_open').hide();      
    });

    $('html').click(function(){
        $('.dropdown_open').hide();
        $('.dropdown').removeClass('active');
    });
    // 下拉式選單 end

    // Swiper begin
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect:'cube',
        cubeEffect: {                       
            shadow: false,
        },
        autoplay: {
            delay: 2000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        })
    // Swiper end
    
    $('.back').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},700);
    });
        
});
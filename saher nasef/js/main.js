$(function() {
    'use strict';
    // adjust slider height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winH - (upperH + navH));
    // Features Work Shuffle
    $('.Features-Work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.parents-imgs .row .col-md').css('opacity', 1);
        } else {
            $('.parents-imgs .row .col-md').css('opacity', '.11');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});

/////////////////////////////
window.addEventListener('scroll', function() {
    document.getElementById('nav').classList.toggle('style', window.scrollY);
    document.getElementById('btn-top').classList.toggle('left', window.scrollY);
});
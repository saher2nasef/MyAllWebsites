// jQuery
$(function() {
    $('.ul ul li a').click(function() {
        $('.ul ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.btnToggle').click(function() {
        $(this).toggleClass('active');
        $('.btnToggle span.other').toggleClass('activs');
        $('.sectionTop nav>div.container .ul').toggleClass('active');
    });
    $('.sectionTop nav>div.container .ul ul li.dropDown a.dropDowns').click(function() {
        $(this).toggleClass('actives');
    });
    $('.sectionTop nav>div.container .ul ul li.dropDown>ul li').click(function() {
        $(this).toggleClass('active');
    });
    $(document).scroll(function() {
        let nav = $('.sectionTop nav');
        nav.addClass('active');
        let btn = $('.top');
        btn.addClass('right');
        if ($(document).scrollTop() == 0) {
            nav.removeClass('active');
            btn.removeClass('right');
        }
    });
    $('.product button').click(function() {
        $('.product').removeClass('active');
        $(this).parentsUntil('.products').addClass('active');
    });

    let ww = $('.skills-progres');
    for (let i = 1; i < ww.length + 1; i++) {
        let data = $('.width-sapn' + i).data('progres');
        $('.width-sapn' + i).css('width', data);
        $('.skills-progres span.span' + i).text(data);
    }
    $('.portfolio ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        if ($(this).text() == 'app') {
            $('.images>div').addClass('remove');
            $('.images div.app').removeClass('remove');
        } else if ($(this).text() == 'all') {
            $('.images>div').removeClass('remove');
        } else if ($(this).text() == 'card') {
            $('.images>div').addClass('remove');
            $('.images div.card1').removeClass('remove');
        } else if ($(this).text() == 'web') {
            $('.images>div').addClass('remove');
            $('.images div.web').removeClass('remove');
        }
    });
});
//
//
// javascript
window.onscroll = () => {
    let section = document.querySelectorAll('.section');
    let navlinks = document.querySelectorAll('ul li a');
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
let loading = document.querySelector('.loading');
window.onload = function() {
    loading.classList.add('active');
};
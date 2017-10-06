window.preventScroll = false;

$(document).ready(function () {
    'use strict';
    
    $('#to-top').on('click', function () {
        $('body').animate({
            scrollTop: 0
        }, 500);
    })
    
});

// window.widgets.offset = {
//     top: $('#widgets').offset().top,
//     left: $('#widgets').offset().left
// }

$(window).on('scroll mousewheel touchmove', function(e) {
    if (window.preventScroll) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }    
});

$(window).on('mousewheel', function (event) {
    console.log(
        // event.originalEvent.deltaY > 0 // Scroll Down
        // event.originalEvent.deltaY < 0 // Scroll Up
    );
    // event.preventDefault();
    // if (event.originalEvent.deltaY > 0) { // Scroll Down
    //     console.log('Down');
    //     $('body').animate({
    //         scrollTop: $(window).scrollTop() + 500
    //     }, 1000)
    // } else {
    //     $('body').animate({
    //         scrollTop: $(window).scrollTop() - 500
    //     }, 1000)
    // }
    // $('body').animate({
    //     scrollTop: $(window).scrollTop() + 200
    // }, 200)
});

$(window).scroll(function (event) {
    'use strict';
    
    let wScroll = $(window).scrollTop();
    let viewport = $(window).height();
    let scrl    = Math.ceil(wScroll / 2);
    
    if (wScroll >= viewport) {
        $('#to-top').fadeIn();
    } else {
        $('#to-top').fadeOut();
    }
    
    setTimeout(function () {
        $('.dropdown').removeClass('show')
    }, 150)
    
    // $('[data-parallax]').each(function (index, elem) {
    //     scrl = (($(this).offset().top - wScroll) / -4)
    //     console.log(scrl);
    //     $(elem).css({
    //         'background-position': '50% calc(50% - '+ scrl +'px)'
    //     });
    // });
    
    // if (wScroll >= $('#widgets').offset().top) {
    //     $('#widgets').addClass('is-fixed');
    //     // console.log(
    //     //     window.widgets.offset.left
    //     // );
    //     $('#widgets').css({
    //         top: 0,
    //         left: window.widgets.offset.left,
    //     })
    // }
    
    // if (wScroll <= window.widgets.offset.top) {
    //     $('#widgets').removeClass('is-fixed');
    // }
    
    // console.log(
    //     scrl
    // );
})
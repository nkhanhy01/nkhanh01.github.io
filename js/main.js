$(document).scroll(function() {
    const currentPos = $(document).scrollTop();
    if(currentPos > 0) {
        $('header').addClass("fixed")
        $(".totop").fadeIn()
    } else {
        $('header').removeClass("fixed")
        $(".totop").fadeOut()
    }
});

$('.totop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
})

//slider
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,  
        nav: true,
        navText: ['<span class="prev"><i class="fas fa-angle-left"></i></span>', '<span class="next"><i class="fas fa-angle-right"></i></span>'],
        
    });
});


$(document).ready(function() {
    $('.accordion-item.active .accordion-body').slideDown();
    $('.accordion-header').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
    });
});
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
            Counter: $(this).text()
    }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                    $(this).text(Math.ceil(now));
            }
    });
});
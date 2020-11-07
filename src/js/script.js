$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/catalog/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/catalog/right.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});
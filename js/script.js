$(document).ready(function(){
    $('.homeslider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: [
        {
        breakpoint: 992,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
        }
        },
        {
        breakpoint: 576,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
        }
        }
        ]
    });
});
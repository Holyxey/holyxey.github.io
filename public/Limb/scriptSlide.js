$('.hx-limb-slider').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '2px',
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 2,
                autoplay: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 1,
                autoplay: true
            }
        }
    ]
});

$('.hx-reviews-slider').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '2px',
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 2,
                autoplay: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 1,
                autoplay: true
            }
        }
    ]
});
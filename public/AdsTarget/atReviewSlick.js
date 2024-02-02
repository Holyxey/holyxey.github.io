$('.hx-at-review-block').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                adaptiveHeight: true,
            }
        }
    ]
});
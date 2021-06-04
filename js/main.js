$(function () {

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 945,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
        ]
    });



    $('.menu__big-btn').on('click', function() {
        $('.menu-list').slideToggle();
      });




});


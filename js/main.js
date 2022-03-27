$(function () {

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplaySpeed: 1000,
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


//-------  Клик по ссылке-------------------------------------------------------

      $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
      
        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
      
        $("#nav a").removeClass("menu-list__link--activ");
        $this.addClass("menu-list__link--activ");
      
      
        // закрытие меню после выбора ссылки/////////////////////////////////////////
        if (menuBtn.classList.contains('active')){
          document.body.classList.remove('_lock');
          menuBtn.classList.remove('active');
          menuList.classList.remove('active');
         }
         ////////////////////////////////////////////////////////////////////////////
      
        $("html, body").animate({
            scrollTop:  blockOffset
        }, 800);
      
      });


// -------------------------------------------------------------------------------
       // Меню бургер///////////////////////////////////////////////////////////
       const menuBtn = document.querySelector('.menu__big-btn');
       const menuList = document.querySelector('.menu-list');
  // делаем проверку
      if(menuBtn) {
  
       menuBtn.addEventListener('click', function(event){
       document.body.classList.toggle('_lock');
       menuBtn.classList.toggle('active');
       menuList.classList.toggle('active');
      
    })
    }
  //////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------

});


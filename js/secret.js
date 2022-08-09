
    $(document).ready(function () {
        $('.cover').slick({
          rtl: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: true
        });
        $('.day').slick({
          slidesToShow: 5,
          slidesToScroll: 5,
          rtl: true,
          arrows: true
        });
        
        $('.marka').slick({
          slidesToShow: 7,
          slidesToScroll: 4,
          rtl: true,
          arrows: false
        });
        
      })
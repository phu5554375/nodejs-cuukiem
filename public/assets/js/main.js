$(document).ready(function(){

	// --
  // breadcrub dropdown columns
  
  $('ul.ht-breadcrumb').find('ul').each(function(){
    var numberOfLi = $(this).children('li').length;
    // console.log(numberOfLi);
    if(numberOfLi > 9 && numberOfLi <= 20){
      $(this).addClass('cl-count-2');
    }
    if(numberOfLi > 20 && numberOfLi <= 30){
      $(this).addClass('cl-count-3');
    }
    if(numberOfLi > 30){
      $(this).addClass('cl-count-3');
    }
  });

  $('ul.ht-subcat-list').find('ul').each(function(){
    var numberOfLi = $(this).children('li').length;
    // console.log(numberOfLi);
    if(numberOfLi > 9 && numberOfLi <= 20){
      $(this).addClass('cl-count-2');
    }
    if(numberOfLi > 20){
      $(this).addClass('cl-count-3');
    }
  });


  // --
  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // // select2
  // $('.select2-form-control').select2();

  // // datepicker
  // $('.datepicker-form-control').datepicker({
  //   orientation: "bottom"
  // });

  // // touchspin
  // $('.touchspin-form-control').TouchSpin({
  //   // 
  // });


  // --
  // fancy
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons : [
      // 'slideShow',
      'fullScreen',
      // 'thumbs',
      // 'share',
      //'download',
      //'zoom',
      'close'
    ],
  });


  // --
  // hotline in bottom
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 120) {
      $('#siteBottomHotline').addClass('show-up');
    }else{
      $('#siteBottomHotline').removeClass('show-up');
    }
  });


  // --
  // product photo album
  $('.sp_product-photo_single-thumbnail').click(function(e){
    e.preventDefault();
    $('.sp_product-photo_single-thumbnail').removeClass('active');
    $(this).addClass('active');

    var dataPhotoView = $(this).find('img').attr('data-photo-view');
    $('#spProductPhotoView').attr('src',dataPhotoView);
  })





  // slick
  // -------------------------
  var itemSlickOptions = { 
    accessibility: true,          // Enables tabbing and arrow key navigation
    adaptiveHeight: false,        // Enables adaptive height for single slide horizontal carousels
    autoplay: false,              // Enables Autoplay
    // autoplaySpeed: 3000
    arrow: true,                  // Prev/Next Arrows
    // asNavFor: #id,
    // appendArrows: $(element),  // Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
    // appendDots: $(element),    // Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-chevron-right"></i></button>',
    centerMode: false,            // Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
    // centerPadding: '50px',     // Side padding when in center mode (px or %)
    cssEase: 'ease-in-out',       // CSS3 Animation Easing
    // customPaging: n/a
    dots: false,                  // Show dot indicators
    dotsClass: 'slick-dots',      // Class for slide indicator dots container ('slick-dots')
    draggable: true,              // Enable mouse dragging
    fade: false,                  // Enable fade
    focusOnSelect: false,         // Enable focus on selected element (click)
    easing: 'linear',             // Add easing for jQuery animate. Use with easing libraries or default easing methods
    // edgeFriction
    infinite: false,              // Infinite loop sliding
    initialSlide: 0,              // Slide to start on
    // lazyLoad: 
    mobileFirst: false,           // Responsive settings use mobile first calculation
    pauseOnFocus: false,          // Pause Autoplay On Focus
    pauseOnHover: false,          // Pause Autoplay On Hover
    pauseOnDotsHover: false,      // Pause Autoplay when a dot is hovered
    // respondTo: 
    // responsive: 
    rows: 1,                      // Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
    // slide                      // Element query to use as slide
    // slidesPerRow: 
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    swipe: true,                  // Enable swiping
    swipeToSlide: true,          // Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
    touchMove: true,             // Enable slide motion with touch
    touchThreshold: 10,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    rtl: false,
    waitForAnimate: true,
    zindex: 999
  };

  var productItemSlickOptions = jQuery.extend(true, {}, itemSlickOptions);
  productItemSlickOptions['slidesToShow'] = 4;   
  productItemSlickOptions['responsive'] = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    },
  ];   
  $('.ht-product-card-slick').slick(
    productItemSlickOptions 
  );

  var productPhotoThumbnailSlickOptions = jQuery.extend(true, {}, itemSlickOptions);
  productPhotoThumbnailSlickOptions['slidesToShow'] = 5;   
  productPhotoThumbnailSlickOptions['responsive'] = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    },
  ];   
  $('.ht-product-photo-thumbnails-slick').slick(
    productPhotoThumbnailSlickOptions
  );

  // home products slick
  var homeFeaturedProductItemSlickOptions = jQuery.extend(true, {}, itemSlickOptions);
  homeFeaturedProductItemSlickOptions['slidesToShow'] = 5;   
  homeFeaturedProductItemSlickOptions['responsive'] = [
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ];
  $('.ht-featured-product-card-slick').slick(
    homeFeaturedProductItemSlickOptions
  );

  // home carousel slick
  var homeCarouselItemSlickOptions = jQuery.extend(true, {}, itemSlickOptions);
  homeCarouselItemSlickOptions['autoplay'] = true;
  homeCarouselItemSlickOptions['autoplaySpeedy'] = 4000;
  homeCarouselItemSlickOptions['dots'] = true;
  homeCarouselItemSlickOptions['fade'] = true;
  homeCarouselItemSlickOptions['infinite'] = true;
  homeCarouselItemSlickOptions['slidesToShow'] = 1;
  $('.ht-home-carousel-card-slick').slick(
    homeCarouselItemSlickOptions
  );

  // home logo brand slick
  var homeLogoBrandItemSlickOptions = jQuery.extend(true, {}, itemSlickOptions);
  // homeLogoBrandItemSlickOptions['infinite'] = true;
  homeLogoBrandItemSlickOptions['autoplay'] = true;
  homeLogoBrandItemSlickOptions['autoplaySpeed'] = 3000;
  homeLogoBrandItemSlickOptions['slidesToShow'] = 6;   
  homeLogoBrandItemSlickOptions['responsive'] = [
    { breakpoint: 1200, settings: { slidesToShow: 6 } },
    { breakpoint: 992, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 4 } },
    { breakpoint: 480, settings: { slidesToShow: 3 } },
  ];
  $('.ht-logo-brand-card-slick').slick(
    homeLogoBrandItemSlickOptions
  );


  // home logo brand slick
  var homeCategoryNavItemSlickOptions = jQuery.extend(true, {}, itemSlickOptions); 
  homeCategoryNavItemSlickOptions['variableWidth'] = true;
  homeCategoryNavItemSlickOptions['infinite'] = true;
  homeCategoryNavItemSlickOptions['slidesToScroll'] = 4;
  $('.ht-category-title-item-slick').slick(
    homeCategoryNavItemSlickOptions
  );

  // home logo brand slick
  var homeFeedbackSlickOptions = jQuery.extend(true, {}, itemSlickOptions);
  homeFeedbackSlickOptions['slidesToScroll'] = 1;
  homeFeedbackSlickOptions['slidesToShow'] = 3;  
  homeFeedbackSlickOptions['responsive'] = [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ];
  $('.ht-feedback-02-slick').slick(
    homeFeedbackSlickOptions
  );



});
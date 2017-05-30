if($('.product__carousel__item').length){
  $('.product__carousel__item').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
}
$('.view-btn').click(function(e) {
  e.preventDefault()
  $('.view-btn').removeClass('active')
  $(this).addClass('active')
  var id = $(this).attr('data-target');
  $('.tab-item').removeClass('active');
  $('' + id).addClass('active')
});

if(('#card-carousel').length){
  $('#card-carousel').bxSlider({
    pagerCustom: '#thumb',
    mode: 'fade',
    controls: false
  });
}
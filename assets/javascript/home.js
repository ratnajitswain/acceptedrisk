$(document).ready(function(){
$('.card-footer-options2').hide();
$('.swiper-slide').on('click', function(){  
    $('.swiper-slide-active .card-footer-options1').toggle(1000);
    $('.swiper-slide-active .card-footer-options2').toggle(1000);
})

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        $('.swiper-slide-active').click()
    }
});

   
})
   
$(document).ready(function(){
    $('.color-palette-btn').on('click', function(){  
        $('.color-palette').toggle(500);
    })
    $('.upload-logo').on('click', function(){
        $('#logofile').click()
    })
})
$(document).ready(function(){
    $('.color-palette-btn').on('click', function(){  
        $('.color-palette').toggle(500);
    })
    $('.upload-logo').on('click', function(){
        $('#logofile').click()
    })
    var theme = {}
var themeLocal = JSON.parse(localStorage.getItem('theme'))



    $('.col-box').on('click', function(){
        var colors = this.id.split('-')
        theme.color1 = colors[0];
        theme.color2 = colors[1];
        theme.color3 = colors[2];
        theme.fontstyle = $('.font-select-op').val()
        $('.col-box').css({"width":"30px","height":"30px"})
        $(this).css({"width":"33px","height":"33px"})
    })
    $('.font-select-op').on('change', function(){
    })
    if(localStorage.getItem('theme')){
        $('body').removeAttr('style')
        let theme = JSON.parse(localStorage.getItem('theme'))
        
        $('body').attr('style', `font-family: ${theme.fontstyle} !important;
         background: linear-gradient(to right,#${theme.color1} 50%,  #${theme.color2} 50%);
         color: #${theme.color3};
        `)
        $('.nav-link').css({  
            "color":"#"+theme.color3,
            "text-decoration":"none"
        });
        $('.navbar').css({"background":"#"+theme.color1})
        $('.navbar-brand').attr("style","color:#"+theme.color3 + "!important")


    }
    $('.color-palette-save-btn').on('click', function(){
        localStorage.removeItem('theme')

        $('body').attr('style', `font-family: ${theme.fontstyle} !important;
         background: linear-gradient(to right,#${theme.color1} 50%,  #${theme.color2} 50%);
         color: #${theme.color3};
        `)
           
           $('.nav-link').css({  
               "color":"#"+theme.color3,
               "text-decoration":"none"
           });
           $('.navbar').css({"background":"#"+theme.color1})
           $('.navbar-brand').attr("style","color:#"+theme.color3 + "!important")
        localStorage.setItem('theme', JSON.stringify(theme))
        console.log(JSON.parse(localStorage.getItem('theme')))
    })
})
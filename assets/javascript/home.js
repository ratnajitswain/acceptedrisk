
$(document).ready(function(){
    $('.carousel').carousel();
   $('.nav-image').on('click',function(){
    if($(this).hasClass('bi bi-list nav-image')){  
        $(this).attr("class","bi bi-x nav-image")
        $('#sidebar1').attr("class","d-flex flex-column flex-shrink-0 p-3 bg-light")
        $('#sidebar2').attr("class","d-flex flex-column flex-shrink-0 bg-light d-none")
        
    }
    else{  
        $(this).attr("class","bi bi-list nav-image")
        $('#sidebar1').attr("class","d-flex flex-column flex-shrink-0 p-3 bg-light d-none")
        $('#sidebar2').attr("class","d-flex flex-column flex-shrink-0 bg-light ")
    }
    
   })
    });

   
    
      // Or with jQuery
   
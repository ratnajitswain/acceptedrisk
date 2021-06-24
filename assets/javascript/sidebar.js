$(document).ready(function(){

    
    $('#sidebar').html('')

    $('#sidebar').html(`
    <div class="  d-flex flex-column flex-shrink-0 p-3 bg-light d-none" id="sidebar1" style="width: 300px; min-height: calc(100vh - 50px);">
        <ul class="nav nav-pills flex-column mb-auto ">
          <li class="nav-item ">
            <a href="#" class="nav-link" aria-current="page">
                <i class="bi bi-house-fill"></i>
              <div class="nav-link-text d-inline-flex">
                Home
              </div>
             
            </a>
          </li>
          <hr>
          <li>
            <a href="#" class="nav-link link-dark">
                <i class="bi bi-pie-chart-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Covid
                  </div>
              
            </a>
          </li>
          <hr>
          <li>
            <a href="#" class="nav-link link-dark">
                <i class="bi bi-pencil-square"></i>
                <div class="nav-link-text d-inline-flex">
                    Policies
                  </div>
             
            </a>
          </li>
          <hr>
          <li>
            <a href="#" class="nav-link link-dark">
                <i class="bi bi-grid-3x3-gap-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Travel
                  </div>
            
            </a>
          </li>
          <hr>
          <li>
            <a href="#" class="nav-link link-dark">
                <i class="bi bi-umbrella-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Weather And Events
                  </div>
             
            </a>
          </li>
          <hr>
          <li>
            <a href="#" class="nav-link link-dark">
                <i class="bi bi-chat-dots-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Social Media And News
                  </div>
              
            </a>
          </li>
          <hr>
          <li>
            <a href="#" class="nav-link link-dark">
                <i class="bi bi-chat-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Investigations
                  </div>
              
            </a>
          </li>
          <hr>
        </ul>
       
        
      </div>

      <div class="d-flex flex-column flex-shrink-0 bg-light" id="sidebar2" style="width: 4.5rem;min-height: calc(100vh - 50px);">
        
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center" id="side1">
            <li class="nav-item ">
                <a href="#" class="nav-link  " aria-current="page">
                    <i class="bi bi-house-fill"></i>
                 
                 
                </a>
              </li>
              <hr>
              <li>
                <a href="#" class="nav-link link-dark">
                    <i class="bi bi-pie-chart-fill"></i>
                   
                  
                </a>
              </li>
              <hr>
              <li>
                <a href="#" class="nav-link link-dark">
                    <i class="bi bi-pencil-square"></i>
                 
                 
                </a>
              </li>
              <hr>
              <li>
                <a href="#" class="nav-link link-dark">
                    <i class="bi bi-grid-3x3-gap-fill"></i>
                  
                
                </a>
              </li>
              <hr>
              <li>
                <a href="#" class="nav-link link-dark">
                    <i class="bi bi-umbrella-fill"></i>
                   
                 
                </a>
              </li>
              <hr>
              <li>
                <a href="#" class="nav-link link-dark">
                    <i class="bi bi-chat-dots-fill"></i>
                    
                  
                </a>
              </li>
              <hr>
              <li>
                <a href="#" class="nav-link link-dark">
                    <i class="bi bi-chat-fill"></i>
                
                  
                </a>
              </li>
              <hr>
          </ul>
        </div>
    
    `);

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
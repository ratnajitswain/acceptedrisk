$(document).ready(function () {

$('body').append('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>')
  $('#sidebar').html('')

  $('#sidebar').html(`
    <div class="  d-flex flex-column flex-shrink-0 p-3 bg-light d-none" id="sidebar1" style="width: 300px; min-height: calc(100vh - 50px);">
        <ul class="nav nav-pills flex-column mb-auto ">
          <li class="nav-item ">
            <a href="/" class="nav-link" aria-current="page">
                <i class="bi bi-house-fill"></i>
              <div class="nav-link-text d-inline-flex">
                Home
              </div>
             
            </a>
            
          </li>
          <hr>
          <li>
            



            <div class="dropdown">
  <a href="#" class="nav-link link-dark dropdown-toggle" type="button" id="Covid" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi bi-pie-chart-fill"></i>  <div class="nav-link-text d-inline-flex">
  Covid
</div>
  </a>
  <ul class="dropdown-menu" aria-labelledby="Covid">
    <li><a href="covidspeeddata.html" class="dropdown-item" type="button">Global Covid Cases</a></li>
    <li><a href="oversight.html" class="dropdown-item" type="button">Oversight</a></li>
    <li><a href="covidspeeddata.html" class="dropdown-item" type="button">Forcasting</a></li>
  </ul>
</div>
               
              
           
          </li>
          <hr>
          <li>
           

            <div class="dropdown">
            <a href="#" class="nav-link link-dark dropdown-toggle" type="button" id="Policies" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-pencil-square"></i>
            <div class="nav-link-text d-inline-flex">
                Policies
              </div>
            </a>
            <ul class="dropdown-menu" aria-labelledby="Policies">
              <li><a href="covidspeeddata.html" class="dropdown-item" type="button">Global Policies</a></li>
              <li><a href="oversight.html" class="dropdown-item" type="button">Reopening Policies</a></li>
             
            </ul>
          </div>
            
          </li>
          <hr>
          <li>
           

            <div class="dropdown">
            <a href="#" class="nav-link link-dark dropdown-toggle" type="button" id="Travel" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-grid-3x3-gap-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Travel
                  </div>
            </a>
            <ul class="dropdown-menu" aria-labelledby="Travel">
              <li><a href="flighttracking.html" class="dropdown-item" type="button">Live Flight Tracking</a></li>
              <li><a href="statewisedata.html" class="dropdown-item" type="button">Statewise Instructions</a></li>
              <li><a href="covidapply.html" class="dropdown-item" type="button">Global Level Instructions</a></li>
            </ul>
          </div>


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
            


            <div class="dropdown">
            <a href="#" class="nav-link link-dark dropdown-toggle" type="button" id="Social" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-chat-dots-fill"></i>
                <div class="nav-link-text d-inline-flex">
                    Social Media And News
                  </div>
            </a>
            <ul class="dropdown-menu" aria-labelledby="Social">
              <li><a href="news.html" class="dropdown-item" type="button">News</a></li>
              <li><a href="messaging.html" class="dropdown-item" type="button">Social Media</a></li>
            </ul>
          </div>
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

  $('.nav-image').on('click', function () {
    if ($(this).hasClass('bi bi-list nav-image')) {
      $(this).attr("class", "bi bi-x nav-image")
      $('#sidebar1').attr("class", "d-flex flex-column flex-shrink-0 p-3 bg-light")
      $('#sidebar2').attr("class", "d-flex flex-column flex-shrink-0 bg-light d-none")
      $('.chat-box').hide(1000);
      $('.color-palette').hide(1000);
    }
    else {
      $(this).attr("class", "bi bi-list nav-image")
      $('#sidebar1').attr("class", "d-flex flex-column flex-shrink-0 p-3 bg-light d-none")
      $('#sidebar2').attr("class", "d-flex flex-column flex-shrink-0 bg-light ")
    }

  })


  $('#sidebar2 li').on('click', function (){  
    $('.nav-image').click()
  })

});
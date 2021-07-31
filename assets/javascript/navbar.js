$(document).ready(function () {
  $("#navbarContainer").html(`
    <nav class="navbar navbar-light container-fluid">
        <div class="container">
        <a class="navbar-brand d-inline-flex" href="#">
            <div class="nav-text1">AcuityFluor</div>
         <i class="bi bi-list nav-image"></i>
        </a>
        <div class="d-flex flex-row-reverse">
        <div class="dropdown">
             <a class=" " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
             <img class="nav-imgtop" src="/assets/images/utils/Ellipse 1.png">
        </a>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#profileModal">Profile</a></li>
                <li><a class="dropdown-item" href="adduser.html" target="_blank">Add User</a></li>
                <li><a class="dropdown-item" href="staticaddress.html" target="_blank">Static Address</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
        </div>
            <div class="line nav-imgtop"></div>
            <img class="nav-imgtop notification" src="/assets/images/utils/Group 127.png">
            <a href="messaging.html" target="_blank
            "><img class="nav-imgtop" src="/assets/images/utils/Group 126.png"></a>
            <a href="#"
            "><div class="nav-imgtop notificationSentiment" style="background:#1B6354;color:#00A811;border-radius:50%;width:35px;height:35px;padding:6px"><i class="bi bi-bar-chart-fill"></i></div></a>
        </div>
        </div>
      </nav>





      <div class="notificationCard">
      <div class="notification-rect shadow"></div>
      <ul class="list-group notificationList p-3" id="notificationList">
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      </ul>
      <div id="loadMore" onclick="loadMore()" class="notification-rect shadow">Load More</div>
      </div>






      <div class="notificationCardSentiment">
      <div class="notification-rect shadow"></div>
      <ul class="list-group sentiment p-3" id="notificationListSentiment">
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      <li>
      <a href="#"class="notification-reports " data-bs-toggle="modal" data-bs-target="#notificationModal">
      <span class="notification-head">Twitter Centiment Report</span>
      <br>
      <span class="notification-msg">Your Twitter Centiment Report is Ready</span>
      </a>
      </li>
      </ul>
      <div id="loadMore1" onclick="loadMore1()" class="notification-rect shadow">Load More</div>
      </div>









      <div class="modal fade" id="notificationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="profileModal" style="color:black;" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
          <div class="col-4 p-5">
          <img src="">
          </div>
          <div class="col-8">
          <ul class="list-unstyled">
          <li>Sankalp</li>
          <li>Sankalp@gmail.com</li>
          </ul>
          </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         
        </div>
      </div>
    </div>
  </div>

    

    `);
  $(".modal").on("shown.bs.modal", function (e) {
    $(".notificationCard").hide();
    $(".notificationCardSentiment").hide();
  });
  $(".notification").on("click", () => {
    $(".notificationCard").toggle(1000);
  });

  $("#notificationList li").hide();
  $("#notificationList li:lt(" + 1 + ")").show();

  $("#notificationListSentiment li").hide();
  $("#notificationListSentiment li:lt(" + 1 + ")").show();

  $(".notificationSentiment").on("click", () => {
      
    $(".notificationCardSentiment").toggle(1000);
  });

  $(".sentiment li").hide();
  $(".sentiment li:lt(" + 1 + ")").show();
});

var x = 1;

function loadMore() {
  $(".notificationList li").show();
  $("#loadMore").attr("onclick", "showLess()");
  $("#loadMore").html("Show Less");
}

function showLess() {
  $("#loadMore").attr("onclick", "loadMore()");
  $("#loadMore").html("Load More");
  $(".notificationList li")
    .not(":lt(" + x + ")")
    .hide();
}

function loadMore1() {
  $("#notificationListSentiment li").show();
  $("#loadMore1").attr("onclick", "showLess1()");
  $("#loadMore1").html("Show Less");
}

function showLess1() {
  $("#loadMore1").attr("onclick", "loadMore1()");
  $("#loadMore1").html("Load More");
  $("#notificationListSentiment li")
    .not(":lt(" + x + ")")
    .hide();
}

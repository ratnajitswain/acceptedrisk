
  $(document).ready(function(){
    $('.audio-container').html(`
    
    <audio id="msgtune" >
  <source src="/assets/audio/msgtune.mp3" type="audio/mpeg">
</audio>
    `)

  })
 
    

  fetchTime = () => {
    var d = new Date();

    var dd =
      d.getDate().toString().length != 2 ? "0" + d.getDate() : d.getDate();
    var mm =
      d.getMonth().toString().length != 2 ? "0" + d.getMonth() : d.getMonth();
    var yyyy = d.getFullYear();
    var hh =
      d.getHours().toString().length != 2 ? "0" + d.getHours() : d.getHours();
    var min =
      d.getMinutes().toString().length != 2
        ? "0" + d.getMinutes()
        : d.getMinutes();
    var time = dd + "-" + mm + "-" + yyyy + "   " + hh + ":" + min;
    return time;
  };


send = () => {
    
    var v = $(".chat-main-box-input input").val();
    message(v,'end')
    var x = document.getElementById('msgtune')
    x.play()
    setTimeout(() =>{
        respond()
    },1000)
}

respond = () =>{
    var v = "sorry i don't have time to replay"
message(v,'start')
}

message = (v,position) => {
    var time = fetchTime()
    
    $(
      ".chat-message-container"
    ).append(`<div class="d-flex justify-content-${position}">
                               
    <div class="chat-user1 p-2 mt-4">${v}</div>
    
</div>
<div class="chat-time d-flex justify-content-${position} mt-2">
${time}
</div>`);

    $(".chat-main-box-input input").val("");

    $(".chat-main-box-container").scrollTop(
        $(".chat-message-container").height()
      );
}

// Exec after load DOM
$(document).ready(function(){
  $("#loading").css({"position": "fixed", "width": "100vw", "height": "100vh", "background-color": "white", "z-index": "99"});

// Header navigation toggle
  $(".h-link-c label").click(function(){
    var clicked = $(this).index();
    $("input[id*=tog]").each(function(index){
      if (clicked != index) {
        $(this).attr('checked', false);
      }
    })
  })

});

$(window).load(function(){
// Fade out Loading-page after load.
  $('#loading').fadeOut();
});

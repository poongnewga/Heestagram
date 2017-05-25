// Exec after load DOM
$(document).ready(function(){
  $("#loading").css({"position": "fixed", "width": "100vw", "height": "100vh", "background-color": "white", "z-index": "99"});

});

$(window).load(function(){
// Fade out Loading-page after load.
  $('#loading').fadeOut();
});

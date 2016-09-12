function refresh_countdown() {
  $('.countdown').each(function() {
    var now = (new Date()).getTime();
    var end = (new Date($(this).attr('enddate'))).getTime();
    var diff = Math.round((end - now) / 1000);

    if (diff) {

      var days = Math.floor(diff / (3600 * 24))
      diff = diff - (days * (3600 * 24));
      var hours   = Math.floor(diff / 3600);
      diff = diff - (hours * 3600);
      var minutes = Math.floor(diff / 60);
      diff = diff - (minutes * 60);
      var seconds = diff;

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}

      var body = $(this).attr("title") + " : <br />" + days + " jours " + hours + "H " + minutes + "mn " + seconds + "sec";
      $(this).html(body);

      window.setTimeout(refresh_countdown, 500);
    }
    else {
      $(this).remove();
    }
  });
}

$(window).on('load', function() {
  // $.get( "http://www.timeapi.org/utc/now", function( data ) {
  //   alert(new Date(data));
  // });

  refresh_countdown();
});
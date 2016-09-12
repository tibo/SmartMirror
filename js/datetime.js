function refresh_datetime() {
  $('.datetime').each(function() {
    var now = new Date();
    var date = $.format.date(now, "ddd dd MMMM");
    var time = $.format.date(now, "HH:mm:ss");

    var body = "<big>" + time + "</big><br /><small>" + date + "</small>";
    $(this).html(body);

    window.setTimeout(refresh_datetime, 500);
  });
}

$(window).on('load', function() {
  refresh_datetime();
});
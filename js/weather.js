function refresh_weather() {
  $('.weather').each(function() {
    var div = $(this);
    var location = $(this).attr('location')
    $.getJSON( "http://api.wunderground.com/api/bbdb5ad11fc237c1/conditions/q/"+location+".json", function( data ) {
      var city = data['current_observation']['display_location']['city'];
      var temp = data['current_observation']['temp_c'];
      var icon = data['current_observation']['icon_url'];
      var body = "<small>" + city +"</small><br/><img src='"+icon+"' />&nbsp;" + temp + "&deg;";
      div.html(body);
    });
  })
}

$(window).on('load', function() {
  

  refresh_weather();
});
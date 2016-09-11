function refresh_weather() {
  $('.weather').each(function() {
    var div = $(this);
    var location = $(this).attr('location')
    $.getJSON( "http://api.wunderground.com/api/bbdb5ad11fc237c1/conditions/q/"+location+".json", function( data ) {
      var city = data['current_observation']['display_location']['city'];
      var temp = data['current_observation']['temp_c'];
      var icon = data['current_observation']['icon_url'].replace('/k/','/i/');

      $.getJSON( "http://api.wunderground.com/api/bbdb5ad11fc237c1/forecast/q/"+location+".json", function( data ) {
        var day = data['forecast']['simpleforecast']['forecastday'][0];
        var low = day['low']['celsius'];
        var high = day['high']['celsius'];
        var body = "<small>" + city +"</small><br/><img src='"+icon+"' />&nbsp;" + temp + "&deg; <small>("+ low + "&deg;/" + high + "&deg;)</small>";
        div.html(body);
      });

    });
  })
}

$(window).on('load', function() {
  

  refresh_weather();
});
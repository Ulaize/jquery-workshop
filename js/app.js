// Write your code here!

jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
    function(res) {
        var lat = res.results[0].geometry.location.lat;
        var lng = res.results[0].geometry.location.lng;
        $('h2').after('<p>Find ISS here: ' + lat + ' ' + lng +'</p>');

    }
);
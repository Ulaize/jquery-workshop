var $img = $('#iss-position');

jQuery.getJSON('http://api.open-notify.org/iss-now.json?callback=?').then(
    function(res) {
        console.log(res);
        var lat = res.iss_position.latitude;
        var lng = res.iss_position.longitude;
        console.log(lat+' '+lng);
        var googleMapsUrl = ("https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=13&size=500x400&maptype=roadmap&markers=color:green%7Clabel:G%7C40.711614,-74.012318&key=AIzaSyCFYgUuLsL7hhJEXH2FKSkbqlXb5DRUfmc");
        $img.attr('src', googleMapsUrl);
    }
);

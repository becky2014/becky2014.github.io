var map;

function initialize() {
    var mapOptions = {
        zoom: 14, 
        center: new google.maps.LatLng(42.052, -87.683)
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initialize);

function Submit() {
    search_text = document.getElementById("search");
    // ignore

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(42.052, -87.683),
        map: map,
        title: "Trader Joe's"
    });

    // don't visit this page twice or this will look silly. shouldn't affect functionality though. 
    // maybe this can be fixed later, code already exists for preferences.js

    google.maps.event.addListener(marker, "click", function() {
        search = document.location.search;
        if (search != "") {
            search = "&" + search.substring(1);
        }
        document.location = "search_food.html?loc=traderjoes" + search;
    });

    var infowindow = new google.maps.InfoWindow({
         content: "<img src='http://prestonhollow.advocatemag.com/wp-content/uploads/2011/05/Trader-Joes.jpg' width='150' height='150'><br><p>Trader Joe's Evanston</p>"
    });

    infowindow.open(map, marker);

}

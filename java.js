function initMap() {
    var bangkok = {lat: 13.7563, lng: 100.5018};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: bangkok
    });

    var marker = new google.maps.Marker({
        position: bangkok,
        map: map
    });
}
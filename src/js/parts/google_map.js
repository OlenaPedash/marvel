function initMap() {
    map = new google.maps.Map(document.getElementById('locateMap'), {
        zoom: 14,
        center: { lat: 47.816011, lng: 35.170238 },
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
    marker = new google.maps.Marker({
        position: { lat: 47.816011, lng: 35.170238 },
        map: map,
        icon: './../img/beetroot-map-marker.png'
    });
}
var myLating = {lat: 38.3460, lng: -0.4907}

var mapOptions = {
    center: myLating,
    zoom: 7,
}

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
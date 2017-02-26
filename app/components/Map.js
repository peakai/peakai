let map_wrapper = 'map_container';
let longitude = 55.168571;
let latitude = -4.057392;

let markers = [
  {
    long: 56.7968571,
    lat: -5.0057392,
    title: "Ben Nevis"
  },
  {
    long: 54.4542261,
    lat: -3.2137907,
    title: "Scafell Pike"
  },
  {
    long: 53.0685072,
    lat: -4.0784653,
    title: "Snowdon"
  },
]

function initialize() {
  let mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(longitude, latitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };

  let map = new google.maps.Map(document.getElementById(map_wrapper), mapOptions);

  markers.map((mountain) => {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(mountain.long, mountain.lat),
      map: map,
      icon: "dist/marker.png"
    });

    let infowindow = new google.maps.InfoWindow({
      content: mountain.title
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
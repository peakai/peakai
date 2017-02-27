const mapWrapper = 'map_container';
const longitude = 55.168571;
const latitude = -4.057392;

const markers = [
  {
    long: 56.7968571,
    lat: -5.0057392,
    title: 'Ben Nevis',
    height: 1345

  },
  {
    long: 54.4542261,
    lat: -3.2137907,
    title: 'Scafell Pike',
    height: 978
  },
  {
    long: 53.0685072,
    lat: -4.0784653,
    title: 'Snowdon',
    height: 1085
  },
];

function initialize() {
  const mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(longitude, latitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };

  const map = new google.maps.Map(document.getElementById(mapWrapper), mapOptions);

  markers.map((mountain) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(mountain.long, mountain.lat),
      map: map,
      icon: require('../dist/img/marker.png')
    });

    const infowindow = new google.maps.InfoWindow({
      content: mountain.title + '<br>' + mountain.height + ' m'
    });

    google.maps.event.addListener(marker, 'click', () => infowindow.open(map, marker));
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

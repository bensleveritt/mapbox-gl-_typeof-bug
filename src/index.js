var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuc2xldmVyaXR0IiwiYSI6IkVkeFVMT2MifQ.AzWHmj8l5m7F1BGTFFTeZw';

var map = new mapboxgl.Map({
  container: 'root',
  style: 'mapbox://styles/mapbox/streets-v9'
});

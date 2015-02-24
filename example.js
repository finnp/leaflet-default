var map = require('./')()

var L = require('leaflet')
L.marker([0,0])
  .bindPopup('Null Island!')
  .addTo(map)
var L = require('leaflet')
var createMap = require('leaflet-map')


function leafletDefault(opts) {
  opts = opts || {}
  var map = createMap()
  map.setView([0,0], 3)

  if(!(opts.tiles === false)) {
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  }
  
  return map
}

module.exports = leafletDefault
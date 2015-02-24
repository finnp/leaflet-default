# leaflet-default
[![NPM](https://nodei.co/npm/leaflet-default.png)](https://nodei.co/npm/leaflet-default/)

Create a full screen leaflet map just like that:

```js
var map = require('leaflet-default')()
```

Then use broserify to create your bundle. Or just use beefy to skip creating a html page.


If you want to add a point just do

```js
var L = require('leaflet')
L.marker([0,0])
  .bindPopup('Null Island!')
  .addTo(map)
```
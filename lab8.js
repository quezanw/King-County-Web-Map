$(document).ready(function() {
  var map = L.map('map', {
    center: [47.630000, -122.315111],
    zoom: 11
  });

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

  /*
  $.getJSON("https://opendata.arcgis.com/datasets/b4cf82cdfa2b437eb51ccbfe980aa39e_2549.geojson", function(data) {
    console.log("this data works: " + data);
    L.geoJson(data, {style:
      function() {
        return {
          fillColor: 'red',
          weight: 1,
          opacity: 1,
          color: 'black',
          fillOpacity: 0.90
        };
      }

    }).addTo(map);
  });
  */

});

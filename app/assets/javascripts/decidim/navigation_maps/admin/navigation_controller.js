// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require leaflet
//= require leaflet-geoman.min
//= require_self

$(function() {
  var image = new Image();
  image.src = $('#map').data('map');
  
  var map = L.map('map', {
    minZoom: -1,
    maxZoom: 2,
    crs: L.CRS.Simple,
    center: [image.height/2,image.width/2],
    zoom: -1,
  });
  
  var bounds = [[0,0], [image.height,image.width]];
  L.imageOverlay(image.src, bounds).addTo(map);
  var blueprint = $('#map').data('blueprint');
  for (area in blueprint) {
    var geoarea = blueprint[area];
    new L.GeoJSON(geoarea).addTo(map);
  }
  
  map.invalidateSize();
});
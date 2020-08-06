let mymap;
let lyrOSM;
let mrkCurrentLocation;
let panControl;
let zoomSlider;
let measure;
let scale;
let ctlLegend;
let Basemaps;
let osm2;
let minimap

mymap = L.map('mapdiv', { center: [52.22758, 16.82593], zoom: 13 });

//link to the map preview
lyrOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//displaying the map in the browser
mymap.addLayer(lyrOSM);


// keypress 'l' = my location
mymap.on('keypress', function (e) {
    if (e.originalEvent.key == "l") {
        mymap.locate();
    }
});

mymap.on('locationfound', function (e) {
    mrkCurrentLocation = L.circleMarker(e.latlng).addTo(mymap);
    mymap.setView(e.latlng, 12);
});

mymap.on('locationerror', function (e) {
    console.log(e);
    alert("Location was not found");
});


scale = L.control.scale({ imperial: false }).addTo(mymap);



// PLUGINS
panControl = L.control.pan().addTo(mymap);
zoomSlider = L.control.zoomslider().addTo(mymap);

// plugin where can you measere for example section of the road
measure = L.control.polylineMeasure({ position: 'bottomleft', unit: 'metres', showBearings: true, clearMeasurementsOnStop: false, showClearControl: false, showUnitControl: false }).addTo(mymap);


// Map layers
lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik');
lyrTopo = L.tileLayer.provider('OpenTopoMap');
lyrImagery = L.tileLayer.provider('Esri.WorldImagery');
lyrMtbMap = L.tileLayer.provider('MtbMap');
lyrBandW = L.tileLayer.provider('Stamen.TonerLite');
mymap.addLayer(lyrOSM);

Basemaps = {
    "Street Map": lyrOSM,
    "Topograpical Map": lyrTopo,
    "Ortofotomapa": lyrImagery,
    "MtbMap": lyrMtbMap,
    "Stamen.TonerLite": lyrBandW,

};

ctlLegend = L.control.layers(Basemaps).addTo(mymap);

// Mini map

osm2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(mymap);






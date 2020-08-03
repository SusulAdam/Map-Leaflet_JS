let mymap;
let lyrOSM;
let mrkCurrentLocation;
let panControl;
let zoomSlider;
let measure;

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

panControl = L.control.pan().addTo(mymap);
zoomSlider = L.control.zoomslider().addTo(mymap);

measure = L.control.polylineMeasure({ position: 'bottomleft', unit: 'metres', showBearings: true, clearMeasurementsOnStop: false, showClearControl: false, showUnitControl: false }).addTo(mymap);



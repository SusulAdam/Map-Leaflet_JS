// let mymap;
// let lyrOSM;
// let mrkCurrentLocation;

// $(document).ready(function () {
//     mymap = L.map('mapdiv', { center: [52.22758, 16.82593], zoom: 13 });

//     //link to the map preview
//     lyrOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//     //displaying the map in the browser
//     mymap.addLayer(lyrOSM);

//     // click l = my location
//     mymap.on('keypress', function (e) {
//         if (e.originalEvent.key == "l") {
//             mymap.locate();
//         }
//     });

//     mymap.on('locationfound', function (e) {
//         mrkCurrentLocation = L.circleMarker(e.latlng).addTo(mymap);
//         mymap.setView(e.latlng, 12);
//     });

//     mymap.on('locationerror', function (e) {
//         console.log(e);
//         alert("Location was not found");
//     });

// });


document.addEventListener("DOMContentLoaded", function () {

    mymap = L.map('mapdiv', { center: [52.22758, 16.82593], zoom: 13 });

    //link to the map preview
    lyrOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    //displaying the map in the browser
    mymap.addLayer(lyrOSM);


    //    my.on.addEventListener('keypress', function(){
    //        if ()
    //    })


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

});

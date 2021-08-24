
    "use strict";
function weatherCall(lon, lat) {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: weatherMapAccess,
        lat: lat || 29.4252,
        lon: lon || -98.4916,
        units: 'imperial',
        exclude: 'hourly,minutely'
    }).done(function (data) {
        logData(data);
    }).fail(function (error) {
        console.log(error);
    });
}
weatherCall();


// function backgroundImages(data){
//     switch (data.current.weather[0]){
//         case "Clear":
//             document.body.style.backgroundImage = "url{'/img/clearsky.jpg'}";
//         break;
//         case "Rain":
//         case "mist":
//             document.body.style.backgroundImage = "url{'/img/rain.jpg'}";
//         break;
//         default:
//             break;
//     }
//    backgroundImages();
//
// }
    function logData(data){
        console.log(data);
        // console.log(data.daily[0].humidity);
        // console.log(data.daily[0].temp);
        // console.log(data.daily[0].weather[0]);
        // console.log(data.daily[0].pressure);
        // console.log(data.current.dt);
        // console.log(data.daily[0].wind_deg);
        // let date = getDate(data);
        // let date1 = getDate1(data);
        var card = `
          <div class="card blue-grey darken-1">
            <div class="card-content orange-text">
                <span class="card-title">Today's Weather</span>
                <p class="content">${getDate(data.daily[0].dt)}</p>
                <p class="content">Temperature: ${data.current.temp}</p>
                <p class="content">Humidity: ${data.current.humidity}</p>
                <p class="content">Outlook: ${data.current.weather[0].description}</p>
                
            </div>
            <div class="card-action">
                
            </div>
        </div>
        `
        var card2 = `
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Day 1 Weather</span>
                <p class="content">${getDate(data.daily[1].dt)}</p>
                <p class="content">Temperature: ${data.daily[1].temp.day}</p>
                <p class="content">Humidity: ${data.daily[1].humidity}</p>
                <p class="content">Outlook: ${data.daily[1].weather[0].description}</p>
                
            </div>
            <div class="card-action">
                
            </div>
        </div>
        `
        var card3 = `
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Day 2 Weather</span>
                <p class="content">${getDate(data.daily[2].dt)}</p>
                <p class="content">Temperature: ${data.daily[2].temp.day}</p>
                <p class="content">Humidity: ${data.daily[2].humidity}</p>
                <p class="content">Outlook: ${data.daily[2].weather[0].description}</p>
                
            </div>
            <div class="card-action">
                
            </div>
        </div>
        `
        var card4 = `
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Day 3 Weather</span>
                <p class="content">${getDate(data.daily[3].dt)}</p>
                <p class="content">Temperature: ${data.daily[3].temp.day}</p>
                <p class="content">Humidity: ${data.daily[3].humidity}</p>
                <p class="content">Outlook: ${data.daily[3].weather[0].description}</p>
                
            </div>
            <div class="card-action">
                
            </div>
        </div>
        `
        var card5 = `
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Day 4 Weather</span>
                <p class="content">${getDate(data.daily[4].dt)}</p>
                <p class="content">Temperature: ${data.daily[4].temp.day}</p>
                <p class="content">Humidity: ${data.daily[4].humidity}</p>
                <p class="content">Outlook: ${data.daily[4].weather[0].description}</p>
                
            </div>
            <div class="card-action">
                
            </div>
        </div>
        `;

        $("#card-container").html(card)
        $("#card-container2").html(card2)
        $("#card-container3").html(card3)
        $("#card-container4").html(card4)
        $("#card-container5").html(card5)
    }

    // function renderCard(data){
    //     var temperature = data.daily[0].temp;
    //     var humidity= data.daily[0].humidity;
    //     var description= data.daily[0].weather[0];
    //     var pressure= data.daily[0].pressure;
    //     var date=data.current.dt;
    //     document.getElementsByClassName("content");
    //
    // }
    // renderCard(data.daily[0].temp);
$("#searchBtn").on("click", function(){
    // console.log("clicked me");
   var input = $("#searchBar")
    // console.log(input[0].value);
   var location= input[0].value
   var coordinatesPromise = getCoordinates(location)
    coordinatesPromise.then(response => {
       var coordinates= response;
        console.log(coordinates);
        marker.setLngLat(coordinates);
        map.flyTo({
            center: [coordinates[0],coordinates[1]]
        })
       weatherCall(coordinates[0],coordinates[1]);
    })
})
    function getCoordinates(location){
        return geocode(location,mapboxAccess)

    }
    // function onDrag(address){
    //     var address = ondragend();
    //     return reverseGeocode(address,mapboxAccess);
    //
    // }
    // onDrag();

    // get current time/date
    function getDate(time){
    let date = new Date(time * 1000).toLocaleDateString();
    return date;
}
//     function getDate(data) {
//         for (var i = 0; i < 5; i++) {
//             let date = new Date(data.daily[i].dt * 1000).toLocaleDateString();
//             // return date;
//         }
//         return date;
        // console.log(getDate1());
    // }
// getDate1(data);

    //get wind direction
//     function windCardinalDirection(data){
//         var degrees = data.current.wind_deg
//         let cardinalDirection = '';
//     if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
//     cardinalDirection = "N";
// } else if (degrees > 11.25 && degrees  <= 33.75) {
//     cardinalDirection = "NNE";
// } else if (degrees > 33.75 && degrees <= 56.25) {
//     cardinalDirection = "NE";
// } else if (degrees > 56.25 && degrees <= 78.75) {
//     cardinalDirection = "ENE";
// } else if (degrees > 78.75 && degrees <= 101.25) {
//     cardinalDirection = "E";
// } else if (degrees > 101.25 && degrees <= 123.75) {
//     cardinalDirection = "ESE";
// } else if (degrees > 123.75 && degrees <= 146.25) {
//     cardinalDirection = "SE";
// } else if (degrees > 146.25 && degrees <= 168.75) {
//     cardinalDirection = "SSE";
// } else if (degrees > 168.75 && degrees <= 191.25) {
//     cardinalDirection = "S";
// } else  if (degrees > 191.25 && degrees <= 213.75) {
//     cardinalDirection = "SSW";
// } else if (degrees > 213.75 && degrees <= 236.25)  {
//     cardinalDirection = "SW";
// } else if (degrees > 236.25 && degrees <= 258.75) {
//     cardinalDirection = "WSW";
// } else if (degrees > 258.75 && degrees <= 281.25) {
//     cardinalDirection = "W";
// } else if (degrees > 281.25 && degrees <= 303.75) {
//     cardinalDirection = "WNW";
// } else if (degrees > 303.75 && degrees <= 326.25) {
//     cardinalDirection = "NW";
// } else if (degrees > 326.75 && degrees <= 348.75) {
//     cardinalDirection = "NNW";
// }
//         console.log(cardinalDirection);
// }
// windCardinalDirection();




    //geocode
    function geocode(search, mapboxAccess) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + mapboxAccess)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }


    //reverse geocode
    function reverseGeocode(coordinates, mapboxAccess) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + mapboxAccess)
            .then(function (res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function (data) {
                return data.features[0].place_name;
            });
    }
// this function appends leading zeroes, for example if you need a
// month in the format 08 instead of 8, or a time like 08:00 instead
// of 8:00
//         function appendLeadingZeroes(n){
//             if(n <= 9){
//                 return "0" + n;
//             }
//             return n;
//         }


    mapboxgl.accessToken = mapboxAccess
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center:[-98.4916, 29.4252],
    zoom:10
});
// map.setZoom(10);
// map.setStyle('mapbox://styles/mapbox/satellite-v7');

    // map marker
    var marker = new mapboxgl.Marker({
        color: '#282fbd',
        draggable: true
    })
        .setLngLat([-98.4916,29.4252])
        .addTo(map);
    marker.on('dragend', function onDragEnd() {
        const coordinates = marker.getLngLat();
        weatherCall(coordinates.lng, coordinates.lat);
    })
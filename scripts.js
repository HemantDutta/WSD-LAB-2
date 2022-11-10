//Getting div element for displaying location
let x = document.getElementById("#demo");

//getLocation() function
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "<h3>Geolocation is not supported by your browser</h3>"
    }
}


function showPosition(position) {
    x.innerText = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}


//Handling Error
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User Denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "<h3>Location information is not available!</h3>"
            break;
        case error.TIMEOUT:
            x.innerHTML = "<h3>Request Timeout!</h3>"
            break;
        case error.UNKNOWN_ERR:
            x.innerHTML = "<h3>An unknown error occurred!</h3>"
            break;
    }
}
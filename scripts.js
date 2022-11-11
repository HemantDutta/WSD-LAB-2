//Getting div element for displaying location
let x = document.getElementById("demo"); //when using getElementById, no need to place a # before the id name

//getLocation() function
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "<h3>Geolocation is not supported by your browser</h3>"
    }
}

//displaying position in div
// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
// }

//Displaying position using google maps api
function showPosition(position) {
    latt = position.coords.latitude; //storing latitude value found using geolocation
    long = position.coords.longitude; //storing longitude value found using geolocation

    let lattlong = new google.maps.LatLng(latt, long);
    let myOptions = {
        center: lattlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
    }
    let maps = new google.maps.Map(document.getElementById('demo'), myOptions);
    let markers = new google.maps.Marker({position: lattlong, map:maps, title:"You are here!"});
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


//Canvas Moving Function: image place
function canvasMove() {
    let can = document.getElementById('myCanvas');
    let ctx = can.getContext("2d");
    let img = document.getElementById('canvas_img');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 10, 10, 280, 130);
    if(window.innerWidth > 992){
        can.style.transform = "translateX(-54%)";
    }
    img.style.display = "none";
    document.getElementById('place').setAttribute("disabled", "");
    document.getElementById('remove').removeAttribute("disabled");
    document.getElementById('canvas_text').innerText = "Click this button to remove the image!"
}

//Canvas Moving Function: image remove
function canvasRemove() {
    let can = document.getElementById('myCanvas');
    let ctx = can.getContext("2d");
    ctx.clearRect(0, 0, can.width, can.height);
    can.style.transform = "translateX(0%)";
    document.getElementById('canvas_img').style.display = "block";
    document.getElementById('remove').setAttribute("disabled", "");
    document.getElementById('place').removeAttribute("disabled");
    document.getElementById('canvas_text').innerText = "Click this button to place the image!"
}

function changeColor() {
    let color = document.getElementById("color").value;
    let form  = document.getElementById("html5_form_content");
    form.style.background = color;
    if(color == "#000000") {
        form.style.color = "white";
    }
    if(color == "#ffffff") {
        form.style.color = "black";
    }
}

function scrollWindow() {
    if(window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 50);
            scrollWindow();
        }, 10);
    }
};


$(window).scroll(function () {
    if($(window).scrollTop() >= 50) {
        $('#navbar').css('background-color', '#6C4AB6');
    }
    else {
        $('#navbar').css('background-color', 'transparent');
    }
})
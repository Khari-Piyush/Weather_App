console.log("System Working");

const API_KEY = 'd1845658f92b31c64bd94f06f7188c9c';

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C `

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    try{
        // let latitude = 15.3333;
        // let longitude = 74.0833;
        let city = "Delhi";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json();
        console.log("Weather data:->" + data);

        renderWeatherInfo(data);
    }
    catch(err){
        console.log("City not Found",err);
    }
}

async function getCustomWeatherDetails(){
    try{
        let latitude = 15.3333;
        let longitude = 74.0833;
    
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
        let data = await result.json();
        console.log(data);
    }
    catch(err){
        console.log("Location Not Found",err);
    }

}



function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No location found");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
    console.log(lat);
    console.log(longi);

}
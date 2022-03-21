var inputCity = document.querySelector("#cityName")

function searchCity (city){
    fetch ("http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&appid=b3353fc64354c9fbf62bd339178f2411")

    .then(response =>{
        return response.json()
    })
    .then(response => {
        console.log(response);

        var lat = response[0].lat
        var lon = response[0].lon 

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&appid=b3353fc64354c9fbf62bd339178f2411")
        .then (response =>{
            return response.json()
        })
        .then(response =>{
            console.log(response);
            
        var current = response.current.weather[0].main 
        var temp = response.current.temp
        var uvi = response.current.uvi
        var humidity = response.current.humidity
        var wind = response.current.wind_speed

        })

    })
    .catch(err => {
        console.error(err);
    })
}


searchButton.addEventListener("click", function(){
    searchCity(inputCity.value) 
    });

   
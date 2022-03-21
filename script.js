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

        var maxTemp1 = response.daily[1].temp.max
        var minTemp1 = response.daily[1].temp.min
        var uvi1 = response.daily[1].uvi
        var humidity1 = response.daily[1].humidity
        var wind1 = response.daily[1].wind_speed

        var maxTemp2 = response.daily[2].temp.max
        var minTemp2 = response.daily[2].temp.min
        var uvi2 = response.daily[2].uvi
        var humidity2 = response.daily[2].humidity
        var wind2 = response.daily[2].wind_speed

        var maxTemp3 = response.daily[3].temp.max
        var minTemp3 = response.daily[3].temp.min
        var uvi3 = response.daily[3].uvi
        var humidity3 = response.daily[3].humidity
        var wind3 = response.daily[3].wind_speed

        var maxTemp4 = response.daily[4].temp.max
        var minTemp4 = response.daily[4].temp.min
        var uvi4 = response.daily[4].uvi
        var humidity4 = response.daily[4].humidity
        var wind4 = response.daily[4].wind_speed

        var maxTemp5 = response.daily[5].temp.max
        var minTemp5 = response.daily[5].temp.min
        var uvi5 = response.daily[5].uvi
        var humidity5 = response.daily[5].humidity
        var wind5 = response.daily[5].wind_speed

        document.querySelector("#current").textContent = current
        document.querySelector("#temp").textContent = temp
        document.querySelector("#uvi").textContent = uvi
        document.querySelector("#humidity").textContent = humidity
        document.querySelector("#wind").textContent = wind

        document.querySelector("#maxTemp1").textContent = maxTemp1
        document.querySelector("#minTemp1").textContent = minTemp1
        document.querySelector("#uvi1").textContent = uvi1
        document.querySelector("#humidity1").textContent = humidity1
        document.querySelector("#wind1").textContent = wind1

        document.querySelector("#maxTemp2").textContent = maxTemp2
        document.querySelector("#minTemp2").textContent = minTemp2
        document.querySelector("#uvi2").textContent = uvi2
        document.querySelector("#humidity2").textContent = humidity2
        document.querySelector("#wind2").textContent = wind2
        
        document.querySelector("#maxTemp3").textContent = maxTemp3
        document.querySelector("#minTemp3").textContent = minTemp3
        document.querySelector("#uvi3").textContent = uvi3
        document.querySelector("#humidity3").textContent = humidity3
        document.querySelector("#wind3").textContent = wind3

        document.querySelector("#maxTemp4").textContent = maxTemp4
        document.querySelector("#minTemp4").textContent = minTemp4
        document.querySelector("#uvi4").textContent = uvi4
        document.querySelector("#humidity4").textContent = humidity4
        document.querySelector("#wind4").textContent = wind4

        document.querySelector("#maxTemp5").textContent = maxTemp5
        document.querySelector("#minTemp5").textContent = minTemp5
        document.querySelector("#uvi5").textContent = uvi5
        document.querySelector("#humidity5").textContent = humidity5
        document.querySelector("#wind5").textContent = wind5

        })

    })
    .catch(err => {
        console.error(err);
    })
}


searchButton.addEventListener("click", function(){
    searchCity(inputCity.value) 
    });

   
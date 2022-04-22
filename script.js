var inputCity = document.querySelector("#cityName")
var warning = document.querySelector(".warning")
var searchResults = []

function searchCity(city) {
    var searchList = document.querySelector("#searchList")
    var searchItem = document.createElement("li")

    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=b3353fc64354c9fbf62bd339178f2411")
        .then(response => {
            searchResults.push(city)
            localStorage.setItem("city", JSON.stringify(searchResults));
            searchItem.textContent= city;
            searchList.appendChild(searchItem);
            return response.json()
        })
        .then(response => {
            console.log(response);

            var lat = response[0].lat
            var lon = response[0].lon

            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&units=imperial&appid=b3353fc64354c9fbf62bd339178f2411")
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    console.log(response);

                    var current = response.current.weather[0].main
                    var temp = response.current.temp+ "°"
                    var uvi = response.current.uvi
                    var humidity = response.current.humidity + "%"
                    var wind = response.current.wind_speed + " MPH"
                    document.querySelector("#current").textContent = current
                    document.querySelector("#temp").textContent = temp
                    document.querySelector("#uvi").textContent = uvi
                    console.log(uvi);
                    if(uvi>=3 && uvi<=6){
                        document.querySelector("#uvi").classList.add("lightWarning")
                    }
                    else if (uvi>=6){
                        document.querySelector("#uvi").classList.add("warning")
                    }
                    document.querySelector("#humidity").textContent = humidity
                    document.querySelector("#wind").textContent = wind

                    for (let i = 1; i < 6; i++) {
                        var maxTemp = response.daily[i].temp.max + "°"
                        var minTemp = response.daily[i].temp.min + "°"
                        var uviForcast = response.daily[i].uvi
                        var humidityForcast = response.daily[i].humidity + "%"
                        var windForcast = response.daily[i].wind_speed + " MPH"
                        document.querySelector("#maxTemp"+i).textContent = maxTemp
                        document.querySelector("#minTemp"+i).textContent = minTemp
                        document.querySelector("#uvi"+i).textContent = uviForcast
                        // if(uvi===6){
                        //     document.querySelector("#uvi"+i).classList.add("warning")
                        // }
                        // else if (uvi>3){
                        //     document.querySelector("#uvi"+i).classList.add("lightWarning")
                        // }
                        document.querySelector("#humidity"+i).textContent = humidityForcast
                        document.querySelector("#wind"+i).textContent = windForcast
                    }
                })

        })
        .catch(err => {
            console.error(err);
        })
}

searchButton.addEventListener("click", function () {
    searchCity(inputCity.value)
});


// function loadCity ()


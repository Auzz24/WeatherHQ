var inputCity = document.querySelector("#cityName")

function latLon (city){
    fetch ("http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&appid=b3353fc64354c9fbf62bd339178f2411")

    .then(response =>{
        return response.json()
    })
    .then(response => {
        console.log(response);

        var lat = response[0].lat
        var lon = response[0].lon 

        var myData={
            lat: lat,
            lon: lon
        }
        console.log(myData);
        localStorage.setItem("mySavedData", JSON.stringify(myData))
    })
    .catch(err => {
        console.error(err);
    })
}

function getData (lat, lon){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=b3353fc64354c9fbf62bd339178f2411")

    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response);
        // var totalCases = response.actuals.cases 
  

        // document.querySelector("#totalDeaths").textContent = totalDeaths
        

    //     var myData = {
    //         totalCases: totalCases
    //    }
       
    //    localStorage.setItem("mySavedData", JSON.stringify())
    })
    .catch(err => {
        console.error(err);
    });
}

searchButton.addEventListener("click", function(){
    latLon(inputCity.value)
    console.log(inputCity.value)
    });

    // searchButton.addEventListener("click", function (){
    //     getData(lat, lon)
    //     }
    //     );
    
    // searchButton.addEventListener("click", function(){
    //     getData(inputState.value)
    //     })
        
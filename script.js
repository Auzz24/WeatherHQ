var inputState = document.querySelector("#stateCode")

function getData (lat, lon){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=32&lon=96&exclude={part}&appid=b3353fc64354c9fbf62bd339178f2411")

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
       
       localStorage.setItem("mySavedData", JSON.stringify(myData))
    })
    .catch(err => {
        console.error(err);
    });
}

searchButton.addEventListener("click", function(){
    getData(inputState.value)
    })
    
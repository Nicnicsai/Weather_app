
(() => {

//API key = 3e37be169bd64e9375bad5937587a45a


    document.getElementById("submitButton").addEventListener('click',function() {

        let city = document.getElementById("city-name").value;

      //  +","+ countryCode  //after city

        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city +"&units=metric" +
            '&appid=' + "3e37be169bd64e9375bad5937587a45a")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data); //fetched information
                console.log(city); //city name value


                for (var i= 0 ; i < 5 ; i++)  {    //loop over five days

                    var temperature = data.list[i].main.temp;
                        console.log(temperature);
                    var description = data.list[i].weather[0].description;
                    console.log(description);

                }


            })

    })


})();
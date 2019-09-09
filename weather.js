(() => {

//API key = 3e37be169bd64e9375bad5937587a45a
// https://openweathermap.org/forecast5

    //add some calculations
    // show next three hours maybe ??

    document.getElementById("submitButton").addEventListener('click', function () {

        let city = document.getElementById("city-name").value;

        //  +","+ countryCode  //after city

        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=metric" +
            '&appid=' + "3e37be169bd64e9375bad5937587a45a")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data); //fetched information
                //console.log(city); //city name value

                for (var i = 0; i < 5; i++) {    //loop over five days

                    var iconId = data.list[i].weather[0].icon;
                    var temperatureMin = data.list[i].main.temp_min;
                    var temperatureMax = data.list[i].main.temp_max;
                    var description = data.list[i].weather[0].description;
                    var today = new Date();
                    today.setDate(today.getDate() + i);
                    var displayDate = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
                    var currentTemp = data.list[i].main.temp;


                    //select template
                    var temp = document.getElementsByTagName("template")[0];
                    //show template
                    var clon = temp.content.cloneNode(true); //clone floats around in memory


                    clon.querySelector(".date").innerHTML = displayDate;
                    clon.querySelector(".weatherImg").setAttribute("src", "http://openweathermap.org/img/wn/" + iconId + "@2x.png");
                    clon.querySelector(".currentTemperature").innerHTML = currentTemp;
                    clon.querySelector(".temperature").innerHTML = temperatureMin + "°" + "/ " + temperatureMax + "°";
                    clon.querySelector(".description").innerHTML = description;


                    // here append clone and therefore becomes element
                    document.getElementById("target").appendChild(clon); // template cloned and put here


                }


            })

    })


})();
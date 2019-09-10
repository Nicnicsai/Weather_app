(() => {

//API key = 3e37be169bd64e9375bad5937587a45a
// https://openweathermap.org/forecast5

    //add some calculations
    // show next three hours maybe ?? Main temperature gemiddelde van drie volgende uren

    var emptyArray = [];

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


               /* for (var i = 0; i < data.list.length; i++) {

                    var stringSlice = (data.list[i].dt_txt).slice(0, 10);
                    console.log(stringSlice);
                }*/

                for (var y = 0; y < 5; y++) {   //loop over five days


                    //var iconId = data.list[y].weather[0].icon;
                    //var temperatureMin = data.list[y].main.temp_min;
                    //var temperatureMax = data.list[y].main.temp_max;
                    // var description = data.list[y].weather[0].description;

                    var today = new Date();
                    var month = (today.getMonth() + 1);
                    var numberDate = today.getDate() + y;
                    var displayDate = today.getFullYear() + "-" + "0" + month + "-" + numberDate;
                    //var currentTemp = data.list[y].main.temp;

                    //select template
                    var temp = document.getElementsByTagName("template")[0];
                    //show template
                    var clon = temp.content.cloneNode(true); //clone floats around in memory


                    clon.querySelector(".date").innerHTML = displayDate;
                    //clon.querySelector(".weatherImg").setAttribute("src", "http://openweathermap.org/img/wn/" + iconId + "@2x.png");
                    //clon.querySelector(".currentTemperature").innerHTML = currentTemp;
                    //clon.querySelector(".temperature").innerHTML = temperatureMin + "°" + "/ " + temperatureMax + "°";
                    //clon.querySelector(".description").innerHTML = description;

                    var weatherDate = clon.querySelector(".date").innerHTML;

                    // here append clone and therefore becomes element
                    document.getElementById("target").appendChild(clon); // template cloned and put here
                    console.log(weatherDate);

                  /*  var arrayJson = data.list[y].dt_txt;
                   if((arrayJson.includes(String(displayDate))) == true){
                       emptyArray = arrayJson;
                   }*/


                }


            })

    })



})();
(() => {

//API key = 3e37be169bd64e9375bad5937587a45a
// https://openweathermap.org/forecast5

    //add some calculations
    // show next three hours maybe ?? Main temperature gemiddelde van drie volgende uren


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

                //EMPTY ARRAYS
                var a = [];
                var b = [];
                var currentDayArray = [];
                var secondDayArray = [];
                var thirdDayArray = [];
                var fourthDayArray = [];
                var fifthDayArray = [];


                for (var i = 0; i < data.list.length; i++) {

                  var unixTimestamp =  data.list[i].dt; //unix timestamp

                    // FROM UNIXTIMESTAMP TO UTC
                   var dateObj = new Date(unixTimestamp * 1000);
                   var  utcString = dateObj.toUTCString();
                   var  time = +(utcString.slice(5, 8)); // day number

                    if(time === 10) {

                        var x = data.list[i];

                        a.push(x);
                    }

                }

                console.log(a);












            })
    })



})();
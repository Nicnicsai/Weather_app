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

                //EMPTY ARRAYS
                var currentDayArray = [];
                var secondDayArray = [];
                var thirdDayArray = [];
                var fourthDayArray = [];
                var fifthDayArray = [];

                var dayOfToday = new Date().getDate();

                for (var i = 0; i < data.list.length; i++) {

                  var unixTimestamp =  data.list[i].dt; //unix timestamp

                    // FROM UNIXTIMESTAMP TO UTC
                   var dateObj = new Date(unixTimestamp * 1000);
                   var  utcString = dateObj.toUTCString();
                   var  time = +(utcString.slice(5, 8)); // day number

                    // MAKE DAY ARRAYS
                    if(time === dayOfToday) {
                        var x = data.list[i];
                        currentDayArray.push(x);
                    }
                    if(time === +(dayOfToday)+1){
                        var m = data.list[i];
                        secondDayArray.push(m);
                    }
                    if(time === +(dayOfToday)+2){
                        var z = data.list[i];
                        thirdDayArray.push(z);
                    }
                    if(time === +(dayOfToday)+3){
                        var a = data.list[i];
                        fourthDayArray.push(a);
                    }
                    if(time === +(dayOfToday)+4){
                        var b = data.list[i];
                        fifthDayArray.push(b);
                    }
                }

                // Math.min(n1, n2, n3, ..., nX)

                var fiveDayArrays = [];
                fiveDayArrays.push([currentDayArray],[secondDayArray],[thirdDayArray],[fourthDayArray],[fifthDayArray]);
                console.log(fiveDayArrays);




               /* for (var y = 0; y < 5; y++) {   //loop over five days
                }*/










            })
    })



})();
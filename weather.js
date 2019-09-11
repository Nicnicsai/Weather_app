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


                var ICONS = [];
                var TEMP = [];
                var MIN = [];
                var MAX = [];
                var DESCRIPTION = [];

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
                //console.log(fiveDayArrays);

                //CURRENT DAY

                var currentMinTemp = [];
                var currentMaxTemp = [];

                TEMP.unshift(Math.round(fiveDayArrays[0][0][0].main.temp));  //TEMP CURRENT DAY
               ICONS.unshift(fiveDayArrays[0][0][0].weather[0].icon); //ICON CURRENT  (10d)
                //console.log(fiveDayArrays[0][0][0].weather[0].description); //DESCRIPTION CURRENT
                DESCRIPTION.unshift(fiveDayArrays[0][0][0].weather[0].description);


                for (var current= 0; current < fiveDayArrays.length; current++) {

                    //console.log(fiveDayArrays[0][0][current].main.temp_min);
                    currentMinTemp.push(fiveDayArrays[0][0][current].main.temp_min);
                    //console.log(fiveDayArrays[0][0][current].main.temp_max);
                    currentMaxTemp.push(fiveDayArrays[0][0][current].main.temp_max);
                }


                var minToday = Math.round(Math.min(currentMinTemp[0],currentMinTemp[1],currentMinTemp[2],currentMinTemp[3],currentMinTemp[4]));
                var maxToday = Math.round(Math.max(currentMaxTemp[0],currentMaxTemp[1],currentMaxTemp[2],currentMaxTemp[3],currentMaxTemp[4]));

               // console.log(minToday, maxToday); //15 & 18 Antwerp    // MIN and Max today

                MIN.unshift(minToday);
                MAX.unshift(maxToday);



                //console.log(fiveDayArrays[1][0][0].main.temp_min);


                // temperature averages next four days

                var minTemp = [];
                var maxTemp = [];



                //FOUR DAYS
                for (var y = 1; y < 5; y++) {   //loop over four days

                    ICONS.push(fiveDayArrays[y][0][4].weather[0].icon);
                   console.log(fiveDayArrays[y][0][4].weather[0].icon); //ICONS (03d)
                    DESCRIPTION.push(fiveDayArrays[y][0][4].weather[0].description); //description (scattered clouds)

                        for (var eightLoop = 0; eightLoop < 8; eightLoop++) {
                            //console.log(fiveDayArrays[y][0][eightLoop].main.temp_min);
                            minTemp.push(fiveDayArrays[y][0][eightLoop].main.temp_min);
                            maxTemp.push(fiveDayArrays[y][0][eightLoop].main.temp_max);
                        }
                }

                console.log(ICONS);

                //MIN and MAX // FOUR Days

               var minTemp_dayTwo = Math.min(minTemp[0], minTemp[1],minTemp[2], minTemp[3],
                    minTemp[4], minTemp[5],minTemp[6],minTemp[7]);
               var minTemp_dayThree = Math.min(minTemp[8], minTemp[9],minTemp[10], minTemp[11],
                    minTemp[12], minTemp[13],minTemp[14],minTemp[15]);
               var minTemp_dayFour = Math.min(minTemp[16], minTemp[17],minTemp[18], minTemp[19],
                    minTemp[20], minTemp[21],minTemp[22],minTemp[23]);
               var minTemp_dayFive = Math.min(minTemp[24], minTemp[25],minTemp[26], minTemp[27],
                    minTemp[28], minTemp[29],minTemp[30],minTemp[31]);

               MIN.push(minTemp_dayTwo, minTemp_dayThree, minTemp_dayFour, minTemp_dayFive);

              // console.log(minTemp_dayTwo, minTemp_dayThree, minTemp_dayFour, minTemp_dayFive);

                var maxTemp_dayTwo = Math.max(maxTemp[0], maxTemp[1],maxTemp[2], maxTemp[3],
                    maxTemp[4], maxTemp[5],maxTemp[6],maxTemp[7]);
                var maxTemp_dayThree = Math.max(maxTemp[8], maxTemp[9],maxTemp[10], maxTemp[11],
                    maxTemp[12], maxTemp[13],maxTemp[14],maxTemp[15]);
                var maxTemp_dayFour = Math.max(maxTemp[16], maxTemp[17],maxTemp[18], maxTemp[19],
                    maxTemp[20], maxTemp[21],maxTemp[22],maxTemp[23]);
                var maxTemp_dayFive = Math.max(maxTemp[24], maxTemp[25],maxTemp[26], maxTemp[27],
                    maxTemp[28], maxTemp[29],maxTemp[30],maxTemp[31]);

                MAX.push(maxTemp_dayTwo, maxTemp_dayThree, maxTemp_dayFour, maxTemp_dayFive);



               // console.log(maxTemp_dayTwo, maxTemp_dayThree, maxTemp_dayFour, maxTemp_dayFive);

                //AVERAGE for four days

                var averageTemp_dayTwo = Math.round((minTemp_dayTwo + maxTemp_dayTwo)/2);
                var averageTemp_dayThree = Math.round((minTemp_dayThree + maxTemp_dayThree)/2);
                var averageTemp_dayFour = Math.round((minTemp_dayFour + maxTemp_dayFour)/2);
                var averageTemp_dayFive = Math.round((minTemp_dayFive + maxTemp_dayFive)/2);

                TEMP.push(averageTemp_dayTwo,averageTemp_dayThree,averageTemp_dayFour,averageTemp_dayFive);


               // console.log(averageTemp_dayTwo,averageTemp_dayThree,averageTemp_dayFour,averageTemp_dayFive);

                console.log(TEMP);
                console.log(MIN);
                console.log(MAX);
                console.log(DESCRIPTION);

                //Make arrays to loop over 5 days











            })
    })



})();
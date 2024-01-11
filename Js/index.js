let card = document.getElementById('card');
let searchInput = document.getElementById('search');

function windDirection(){
    
}
    (async function () {
        var country = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b5450c60689b495294a143526240301&q=cairo&q=07112&days=3`)   
        var countryResult = await country.json();
    
        if (country.status == 200) {
            console.log(countryResult);
        let countryName = countryResult.location.name; //---> اسم المدينه
        let tempToday = (countryResult.current.temp_c); //----> درجة الحراره اليوم
        let humidityToday = (countryResult.current.humidity); //----> الرطوبه اليوم
        let speedWindToday = (countryResult.current.vis_km); //----> سرعة الرياح اليوم
        let directionWindToday = (countryResult.current.wind_dir); // اتجاه الرياح اليوم
        let weatherType = countryResult.current.condition.text; //----> حالة الطقس 1
        let weatherIcon = countryResult.current.condition.icon; //----> الايكون اليوم 1

        let direction = ""
        let directionArray = ['n' , 'nne' , 'ne' , 'ene' , 'e' ,'ese', 'se' ,'sse' , 's' ,'ssw', 'sw' ,'wsw', 'w' ,'wnw', 'nw' , 'nnw' ]
        for (let i = 0; i < directionArray.length; i++) {
            if (directionWindToday.toLowerCase() == directionArray[0]){
                direction = 'North'
            }
            else if(directionWindToday.toLowerCase() == directionArray[1]){
                direction = 'North-northeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[2]){
                direction = 'Northeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[3]){
                direction = 'East-northeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[4]){
                direction = 'East'
            }
            else if(directionWindToday.toLowerCase() == directionArray[5]){
                direction = 'East-southeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[6]){
                direction = 'Southeast '
            }
            else if(directionWindToday.toLowerCase() == directionArray[7]){
                direction = 'South-southeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[8]){
                direction = 'South'
            }
            else if(directionWindToday.toLowerCase() == directionArray[9]){
                direction = 'South-southwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[10]){
                direction = 'Southwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[11]){
                direction = 'West-southwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[12]){
                direction = 'West'
            }
            else if(directionWindToday.toLowerCase() == directionArray[13]){
                direction = 'West-northwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[14]){
                direction = 'Northwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[15]){
                direction = 'North-northwest'
            }
        }
        
    
        let weatherIcon2 = countryResult.forecast.forecastday[1].day.condition.icon; //----> الايكون اليوم 2
        let weatherType2 = countryResult.forecast.forecastday[1].day.condition.text; //----> حالة الطقس 2
        let maxTempToday2 = countryResult.forecast.forecastday[1].day.maxtemp_c; //----> درجة الحراره اليوم 2 العظمي
        let minTempToday2 = countryResult.forecast.forecastday[1].day.mintemp_c; //----> درجة الحراره اليوم 2 الصغري
    
        let weatherIcon3 = countryResult.forecast.forecastday[2].day.condition.icon; //----> الايكون اليوم 3
        let weatherType3 = countryResult.forecast.forecastday[2].day.condition.text; //----> حالة الطقس 3
        let maxTempToday3 = countryResult.forecast.forecastday[2].day.maxtemp_c; //----> درجة الحراره اليوم 2 العظمي
        let minTempToday3 = countryResult.forecast.forecastday[2].day.mintemp_c; //----> درجة الحراره اليوم 2 الصغري
    
        const dateNumber = countryResult.forecast.forecastday[0].date
        const date = new Date(`${dateNumber}`)
        const dayOfWeek = date.getDay()
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[dayOfWeek];
        let day = dayName; // اليوم
        const dayName2 = days[dayOfWeek+1];
        let day2 = dayName2; // 2 اليوم
        const dayName3 = days[dayOfWeek+2];
        let day3 = dayName3; // 3 اليوم
    
    
        const monthOfYear = date.getMonth()
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = months[monthOfYear]
        let month = monthName;
    
        const dayOfMonth = date.getDate()
        let dayNum = dayOfMonth;
    
    
        // clock
    
    let hourHand = document.querySelector('.hoursHand')
    let minuteHand = document.querySelector('.minutesHand')
    let secondHand = document.querySelector('.secondsHand')
    function clockTick(){
        let clockNumber = new Date()
        let seconds = clockNumber.getSeconds() / 60
        let minutes = (seconds + clockNumber.getMinutes()) / 60
        let hours = (minutes + clockNumber.getHours()) / 12
    
    rotateClockHand(secondHand , seconds)
    rotateClockHand(minuteHand , minutes)
    rotateClockHand(hourHand , hours)
    }
    
    
    function rotateClockHand(element , rotation) {
        element.style.setProperty('--rotate' , rotation * 360)
    }
    setInterval(clockTick , 1000)
    
    // -----------------------------------------
    
    card.innerHTML = `
    <div class="col-lg-4 ">
    <div  class="text-white firstCard shadow rounded-3 pb-2">
        <header class="rounded-top-3 d-flex flex-wrap align-items-center justify-content-between p-3">
            <p class="dayHead m-0">${day}</p>
            <p class="dateHead m-0">${dayNum + " " + month}</p>
        </header>
        <div class="body px-3">
            <p class="mt-4 text-dark fs-1">${countryName}</p>
            <div class="d-flex flex-wrap justify-content-center align-items-center">
                <h2 class="deg my-3 w-50 me-auto">${tempToday}<sup>o</sup>C</h2>
                <div class="w-25">
                    <img class="w-100"src=${weatherIcon} alt="">
                </div>
            </div>
            <p class="weatherType rounded-3 my-4">${weatherType}</p>
            <div class="footer d-flex flex-wrap justify-content-start align-items-center mb-4">
                <div class="text-black me-3 mb-2"><i class="fa-solid fa-umbrella me-1"></i>${humidityToday}%</div>
                <div class="text-black me-3 mb-2"><i class="fa-solid fa-wind  me-1"></i>${speedWindToday} km/h</div>
                <div class="text-black me-3 mb-2"><i class="fa-regular fa-compass me-1"></i>${direction}</div>
            </div>
        </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div  class="text-white secondCard shadow rounded-3 pb-2 h-100">
            <header class="rounded-top-3 d-flex align-items-center justify-content-center p-3">
                <p class="dayHead m-0">${day2}</p>
            </header>
            <div class="body px-3 d-flex flex-column justify-content-center align-items-center">
                <div class="my-2">
                    <img src="${weatherIcon2}" alt="">
                </div>
                <h3>${maxTempToday2}<sup>o</sup>C</h3>
                <h4>${minTempToday2}<sup>o</sup></h4>
                <p class="weatherType rounded-3 my-4">${weatherType2}</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 ">
        <div  class="text-white firstCard shadow rounded-3 pb-2 h-100">
            <header class="rounded-top-3 d-flex align-items-center justify-content-center p-3">
                <p class="dayHead m-0">${day3}</p>
            </header>
            <div class="body px-3 d-flex flex-column justify-content-center align-items-center">
                <div class="my-2">
                    <img src="${weatherIcon3}" alt="">
                </div>
                <h3>${maxTempToday3}<sup>o</sup>C</h3>
                <h4>${minTempToday3}<sup>o</sup></h4>
                <p class="weatherType rounded-3 my-4">${weatherType3}</p>
            </div>
        </div>
    </div>
        
    `
    
        }
        else {
            console.log('Error 404');
        }
        
    })()


//**************


searchInput.addEventListener('keyup' , function () {
    (async function () {
        var country = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b5450c60689b495294a143526240301&q=${searchInput.value}&q=07112&days=3`)   
        var countryResult = await country.json();
    
        console.log(countryResult);
        let countryName = countryResult.location.name; //---> اسم المدينه
        let tempToday = (countryResult.current.temp_c); //----> درجة الحراره اليوم
        let humidityToday = (countryResult.current.humidity); //----> الرطوبه اليوم
        let speedWindToday = (countryResult.current.vis_km); //----> سرعة الرياح اليوم
        let directionWindToday = (countryResult.current.wind_dir); // اتجاه الرياح اليوم
        let weatherType = countryResult.current.condition.text; //----> حالة الطقس 1
        let weatherIcon = countryResult.current.condition.icon; //----> الايكون اليوم 1

        let direction = ""
        let directionArray = ['n' , 'nne' , 'ne' , 'ene' , 'e' ,'ese', 'se' ,'sse' , 's' ,'ssw', 'sw' ,'wsw', 'w' ,'wnw', 'nw' , 'nnw' ]
        for (let i = 0; i < directionArray.length; i++) {
            if (directionWindToday.toLowerCase() == directionArray[0]){
                direction = 'North'
            }
            else if(directionWindToday.toLowerCase() == directionArray[1]){
                direction = 'North-northeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[2]){
                direction = 'Northeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[3]){
                direction = 'East-northeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[4]){
                direction = 'East'
            }
            else if(directionWindToday.toLowerCase() == directionArray[5]){
                direction = 'East-southeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[6]){
                direction = 'Southeast '
            }
            else if(directionWindToday.toLowerCase() == directionArray[7]){
                direction = 'South-southeast'
            }
            else if(directionWindToday.toLowerCase() == directionArray[8]){
                direction = 'South'
            }
            else if(directionWindToday.toLowerCase() == directionArray[9]){
                direction = 'South-southwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[10]){
                direction = 'Southwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[11]){
                direction = 'West-southwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[12]){
                direction = 'West'
            }
            else if(directionWindToday.toLowerCase() == directionArray[13]){
                direction = 'West-northwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[14]){
                direction = 'Northwest'
            }
            else if(directionWindToday.toLowerCase() == directionArray[15]){
                direction = 'North-northwest'
            }
        }
    
        let weatherIcon2 = countryResult.forecast.forecastday[1].day.condition.icon; //----> الايكون اليوم 2
        let weatherType2 = countryResult.forecast.forecastday[1].day.condition.text; //----> حالة الطقس 2
        let maxTempToday2 = countryResult.forecast.forecastday[1].day.maxtemp_c; //----> درجة الحراره اليوم 2 العظمي
        let minTempToday2 = countryResult.forecast.forecastday[1].day.mintemp_c; //----> درجة الحراره اليوم 2 الصغري
    
        let weatherIcon3 = countryResult.forecast.forecastday[2].day.condition.icon; //----> الايكون اليوم 3
        let weatherType3 = countryResult.forecast.forecastday[2].day.condition.text; //----> حالة الطقس 3
        let maxTempToday3 = countryResult.forecast.forecastday[2].day.maxtemp_c; //----> درجة الحراره اليوم 2 العظمي
        let minTempToday3 = countryResult.forecast.forecastday[2].day.mintemp_c; //----> درجة الحراره اليوم 2 الصغري
    
        const dateNumber = countryResult.forecast.forecastday[0].date
        const date = new Date(`${dateNumber}`)
        const dayOfWeek = date.getDay()
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[dayOfWeek];
        let day = dayName; // اليوم
        const dayName2 = days[dayOfWeek+1];
        let day2 = dayName2; // 2 اليوم
        const dayName3 = days[dayOfWeek+2];
        let day3 = dayName3; // 3 اليوم
    
    
        const monthOfYear = date.getMonth()
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = months[monthOfYear]
        let month = monthName;
    
        const dayOfMonth = date.getDate()
        let dayNum = dayOfMonth;
    
        // -----------------------------------------
        card.innerHTML = `
    <div class="col-lg-4 ">
    <div  class="text-white firstCard shadow rounded-3 pb-2">
        <header class="rounded-top-3 d-flex flex-wrap align-items-center justify-content-between p-3">
            <p class="dayHead m-0">${day}</p>
            <p class="dateHead m-0">${dayNum + " " + month}</p>
        </header>
        <div class="body px-3">
            <p class="mt-4 text-dark fs-1">${countryName}</p>
            <div class="d-flex flex-wrap justify-content-center align-items-center">
                <h2 class="deg my-3 w-50 me-auto">${tempToday}<sup>o</sup>C</h2>
                <div class="w-25">
                    <img class="w-100"src=${weatherIcon} alt="">
                </div>
            </div>
            <p class="weatherType rounded-3 my-4">${weatherType}</p>
            <div class="footer d-flex flex-wrap justify-content-start align-items-center mb-4">
                <div class="text-black me-3 mb-2"><i class="fa-solid fa-umbrella me-1"></i>${humidityToday}%</div>
                <div class="text-black me-3 mb-2"><i class="fa-solid fa-wind  me-1"></i>${speedWindToday} km/h</div>
                <div class="text-black me-3 mb-2"><i class="fa-regular fa-compass me-1"></i>${direction}</div>
            </div>
        </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div  class="text-white secondCard shadow rounded-3 pb-2 h-100">
            <header class="rounded-top-3 d-flex align-items-center justify-content-center p-3">
                <p class="dayHead m-0">${day2}</p>
            </header>
            <div class="body px-3 d-flex flex-column justify-content-center align-items-center">
                <div class="my-2">
                    <img src="${weatherIcon2}" alt="">
                </div>
                <h3>${maxTempToday2}<sup>o</sup>C</h3>
                <h4>${minTempToday2}<sup>o</sup></h4>
                <p class="weatherType rounded-3 my-4">${weatherType2}</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 ">
        <div  class="text-white firstCard shadow rounded-3 pb-2 h-100">
            <header class="rounded-top-3 d-flex align-items-center justify-content-center p-3">
                <p class="dayHead m-0">${day3}</p>
            </header>
            <div class="body px-3 d-flex flex-column justify-content-center align-items-center">
                <div class="my-2">
                    <img src="${weatherIcon3}" alt="">
                </div>
                <h3>${maxTempToday3}<sup>o</sup>C</h3>
                <h4>${minTempToday3}<sup>o</sup></h4>
                <p class="weatherType rounded-3 my-4">${weatherType3}</p>
            </div>
        </div>
    </div>
        
    `
    
    })()
})



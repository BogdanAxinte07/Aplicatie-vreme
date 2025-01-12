//primim o valoare reprezentand m/s si retrunant km/h
function windToKmPerHour (meterPerSec){
    return (meterPerSec * 3600) /1000
}


//baza iconitei generam link ul acesteia
function getWeatherIcon(iconCode){
    return `http:openweathermap.org/img/wn/${iconCode}@2x.png`;
}


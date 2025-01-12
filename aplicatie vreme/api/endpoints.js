const API_KEY = "0bb892ee3ff2acace79378cf456c281f";
//construim link urile serverelor de la care vom primi date
function getCurrentWeatherEndpoint(city){
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}



function getForecastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`

}
import React from 'react'

function getDirection(degrees) {
    if(degrees >= (360-45) && degrees <= 45){
        return "North";
    }
    if(degrees >= 46 && degrees <= 135){
        return "East";
    }
    if(degrees >= 136 && degrees <= 225){
        return "South";
    }
    if(degrees >= 226 && degrees <= 315){
        return "West";
    }
}
const WeatherInfo = (props) => {
    const weather = props.propsData
    const direction = getDirection(weather.wind.deg)
  return (
    <div className = 'WeatherComp'>
        <h3>Current Weather</h3>
        <p>Location: {weather.name}, {weather.sys.country}</p>
        <p>Temp: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Windspeed: {weather.wind.speed}</p>
        <p>Wind direction: {direction}</p>
        <p>Wind bearing: {weather.wind.deg}°</p>
    </div>
  )
}

export default WeatherInfo;
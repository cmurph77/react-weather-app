import React from 'react'

const WeatherInfo = (props) => {
    const weather = props.propsData;
  return (
    <div className = 'WeatherComp'>
        <h3>Current Weather</h3>
        <p>Location: {weather.name}, {weather.sys.country}</p>
        <p>Temp: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Windspeed: {weather.wind.speed}</p>
        <p>Wind direction: {weather.wind.deg} degrees</p>
    </div>
  )
}

export default WeatherInfo;
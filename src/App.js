import './App.css';
import { useState } from 'react';

const api = {
  key: '9d54b4134840423050e9a3f21b40dc15',
  base: 'https://api.openweathermap.org/data/2.5/'

}

function App() {
  const[search,setSearch] = useState("");
  const[weather,setWeather] = useState("");


  const searchPressed = () => {
    console.log("Searching for:" + search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result)
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h2>Welcome to Cians Weather App</h2>

        {/* Search Box*/}
        <div>
          <input  
                type="text" 
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} >Search</button>
         </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <p>Location: {weather.name}, {weather.sys.country}</p>
            <p>Temp: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Windspeed: {weather.wind.speed}</p>
            <p>Wind direction: {weather.wind.deg} degrees</p>

          </div>
        ) : (
          <div>
            <p>Please search for a City above</p>
          </div>
        )}
  

      </header>
    </div>
  );
}

export default App;

import '../styling/App.css';
import { useState } from 'react';
import WeatherInfo from '../components/WeatherInfo';
import Navbar from '../components/Navbar';
const api = {
  key: '9d54b4134840423050e9a3f21b40dc15',
  base: 'https://api.openweathermap.org/data/2.5/'

}

function WeatherPage() {
  const[search,setSearch] = useState("");
  const[weather,setWeather] = useState("");

  function searchPressed() {
    console.log("Searching for:" + search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  }

  return (
      <div className="weatherPage">
        <Navbar></Navbar>
        <img alt= "sun and cloud" height="100"src='https://www.pngmart.com/files/12/Sun-And-Cloud-PNG-HD.png'/>
        <h1>Weather App</h1>
        {/* Search Box*/}
        <div>
          <input  
                className='search-box'
                type="text" 
                placeholder="Search for a City/Town..."
                onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className='button'>Search</button>
         </div>
        {/* displays weather results or prompts user to search for a city*/}
        {typeof weather.main !== "undefined" ? (
          <div>
            <WeatherInfo propsData = {weather}/>
          </div>
        ) : (
          <div>
            <p>Please search for a City above</p>
          </div>
        )}
      </div>
  );
}

export default WeatherPage;

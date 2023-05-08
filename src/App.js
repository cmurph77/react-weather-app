import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: '9d54b4134840423050e9a3f21b40dc15',
  base: 'https://api.openweathermap.org'

}


const searchPressed = () => {
  console.log("serach pressen")
}

function App() {
  const[search,setSearch] = useState("");

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

        {/* Location*/}

        {/* Temperature F/C*/}

        {/* */}

      </header>
    </div>
  );
}

export default App;

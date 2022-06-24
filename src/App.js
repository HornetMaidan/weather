import React, {useState} from "react";
import axios from "axios";


function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=51de2a1323a86b017d8b673599244e64`;

    const searchLocation = () => {
        document.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                axios.get(url).then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
            setLocation(' ')
            }
        })
    }

  return (
    <div className="app">
        <div  className="search">
            <input value={location}
                   onChange={event => setLocation(event.target.value)}
                   onKeyPress={searchLocation}
                   placeholder="Enter location..."
                   type="text"/>
        </div>
      <div className="container">
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                <h1>32 C</h1>
            </div>
            <div className="description">
                <p>Clear</p>
            </div>
        </div>
        <div className="bottom">
            <div className="feels">
                <p>Feels like</p>
                <p className="bold">34 C</p>
            </div>
            <div className="humidity">
                <p>Humidity</p>
                <p className="bold">30%</p>
            </div>
            <div className="wind">
                <p>Average wind speed</p>
                <p className="bold">4 m/s</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import axios from "axios";


function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=211de115dbf5f6b4857807001bd350e3`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }

  return (
    <div className="app">
        <div  className="search">
            <input value={location}
                   onChange={event => setLocation(event.target.value)}
                   onKeyPress={searchLocation}
                   placeholder='Enter Location'
                   type="text" />
        </div>
      <div className="container">
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                <h1>{data.main ? <h1>{Math.round(data.main.temp - 273)}C</h1> : null}</h1>
            </div>
            <div className="description">
                <p>{data.main ? <h1>{data.weather[0].main}m/s</h1>: null}</p>
            </div>
        </div>
        <div className="bottom">
            <div className="feels">
                <p>Feels like</p>
                <h1>{data.main ? <h1>{Math.round(data.main.feels_like - 273)}C</h1> : null}</h1>
            </div>
            <div className="humidity">
                <p>Humidity</p>
                <h1>{data.main ? <h1>{data.main.humidity}%</h1>: null}</h1>
            </div>
            <div className="wind">
                <p>Average wind speed</p>
                <h1>{data.main ? <h1>{data.wind.speed}m/s</h1>: null}</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

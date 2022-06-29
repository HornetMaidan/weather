import React, {useState} from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=211de115dbf5f6b4857807001bd350e3`;

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
                <p>{data.city ? <p>{data.city.name}</p> : null}</p>
            </div>
            <div className="temp">
                <h1>{data.list ? <h1>{Math.round(data.list[0].main.temp - 273)}C</h1> : null}</h1>
            </div>
            <div className="description">
                <p>{data.list ? <h2>{data.list[0].weather.description}</h2>: null}</p>
            </div>
        </div>
          <h2>{data.list ? <h2>5-day forecast</h2> : null}</h2>
          <div className="forecast">
              <h4>{data.list ? <h4>Tomorrow: {Math.round(data.list[8].main.temp -273)}C, {data.list[8].weather[0].description}</h4> : null}</h4>
              <h4>{data.list ? <h4>{data.list[16].dt_txt.slice(5,10)}: {Math.round(data.list[16].main.temp -273)}C, {data.list[16].weather[0].description}</h4> : null}</h4>
              <h4>{data.list ? <h4>{data.list[24].dt_txt.slice(5,10)}: {Math.round(data.list[24].main.temp -273)}C, {data.list[24].weather[0].description}</h4> : null}</h4>
              <h4>{data.list ? <h4>{data.list[32].dt_txt.slice(5,10)}: {Math.round(data.list[32].main.temp -273)}C, {data.list[32].weather[0].description}</h4> : null}</h4>
              <h4>{data.list ? <h4>{data.list[39].dt_txt.slice(5,10)}: {Math.round(data.list[39].main.temp -273)}C, {data.list[39].weather[0].description}</h4> : null}</h4>
          </div>
        <div className="bottom">
            <div className="feels">
                <p>Feels like</p>
                <h1>{data.list ? <h2>{Math.round(data.list[0].main.feels_like - 273)}C</h2> : null}</h1>
            </div>
            <div className="humidity">
                <p>Humidity</p>
                <h1>{data.list ? <h2>{data.list[0].main.humidity}%</h2>: null}</h1>
            </div>
            <div className="wind">
                <p>Average wind speed</p>
                <h1>{data.list ? <h2>{data.list[0].wind.speed}m/s</h2>: null}</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

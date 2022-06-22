import React, {useState} from "react";
import axios from "axios";

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=houston&appid=51de2a1323a86b017d8b673599244e64`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
            <div className="location">
                <p>Houston</p>
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
                <p>34 C</p>
            </div>
            <div className="humidity">
                <p>30%</p>
            </div>
            <div className="wind">
                <p>4 m/s</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

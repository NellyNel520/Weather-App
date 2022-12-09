import React, {useState} from "react";
import axios from "axios";
function App() {

  //const url =`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=3997caa0c78ac5c6369c74fce17ab49f`
  //const url =`https://api.openweathermap.org/data/2.5/weather?q=dallas&APPID=3997caa0c78ac5c6369c74fce17ab49f`
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Bronx</p>
          </div>
          <div className="temp">
          <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>50°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>10 MPH</p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;

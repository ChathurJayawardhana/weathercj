import { useEffect, useState } from "react";
import cold from "./assets/cold.jpg";
import hot from "./assets/hot.jpg";
import Description from "./components/Description";
import { getFormatedWeatherData } from "./Weatherservice";

function App() {
  
  const [city,setCity] = useState("paris");
  const [weather,setWeather] = useState(null);
  const [units,setUnits] = useState("metric");
  const [bg, setBg] = useState(hot);

useEffect(() => {
   const fetchWeatherData = async () => {
    const data = await getFormatedWeatherData(city,units);
    setWeather(data);

    const threshold = units === "metric" ? 20 : 60;
    if (data.temp <= threshold) setBg(cold);
    else setBg(hot);
   };
   fetchWeatherData();
},[units,city])

const handleUnitsClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText.slice(1);

  const isCelsius = currentUnit === "C";
  button.innerText = isCelsius ? "°F" : "°C";
  setUnits(isCelsius ? "metric" : "imperial");
};

const enterKeyPressed = (e) => {
  if (e.keyCode === 13) {
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }
};

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      
      <div className="overlay">

          {weather && (
            <div className="container">
            <div className="section section__inputs">
            <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>
  
            <div className="section section__temperature">
             <div className="icon">
                     <h3>{`${weather.name},${weather.country}`}</h3>
                     <img src={weather.iconURL} alt=""/>
                     <h3>{weather.description}</h3>
             </div>
  
             <div className="temerature">
               <h1>{`${weather.temp.toFixed()} ${units 
              === "metric" ? "C" : "F"}`}</h1>
             </div>
            </div>
  
            {/* bottem section*/}
            <Description weather={weather} units={units}/>
          </div>
          )}

        
      </div>
    </div>
  );
}

export default App;

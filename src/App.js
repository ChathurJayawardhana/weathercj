import { useEffect } from "react";
import cold from "./assets/cold.jpg";
import hot from "./assets/hot.jpg";
import Description from "./components/Description";
import { getFormatedWeatherData } from "./Weatherservice";

function App() {

useEffect(() => {
   const fetchWeatherData = async () => {
    const data = await getFormatedWeatherData("paris");
   };
   fetchWeatherData();
},[])



  return (
    <div className="App" style={{backgroundImage: `url(${cold})`}}>
      
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter Location"/>
            <button>F</button>
          </div>

          <div className="section section__temperature">
           <div className="icon">
                   <h3>London ,GB</h3>
                   <img src="" alt=""/>
                   <h3>Cloudy</h3>
           </div>

           <div className="temerature">
             <h1>34 C</h1>
           </div>
          </div>

          {/* bottem section*/}
          <Description/>
        </div>
      </div>
    </div>
  );
}

export default App;

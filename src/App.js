import winterImage from "./assets/winter.jpg";
import sunImage from "./assets/sun.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import { FaArrowDown } from "react-icons/fa";


function App() {
  const [city, setCity] = useState("Lugoj")
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(sunImage)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units)
      setWeather(data);

      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(winterImage);
      else setBg(sunImage);
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  }

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <>
      <div className="text-center p-3 bg-primary text-white">
        <h1 className="fw-bold fs-3">
          <FaArrowDown />
          TRAVEL "TIME" !
          <FaArrowDown />
        </h1>
      </div>

      <div className="app" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          {
            weather && (
              <div className="container">
                <div className="section section_inputs">
                  <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter city..." />
                  <button onClick={(e) => handleUnitsClick(e)}>°F</button>
                </div>

                <div className="section section_temperature">
                  <div className="icon" />
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weather" />
                  <h3 className="text-capitalize">{weather.description}</h3>
                  <div className="temperature">
                    <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
                  </div>
                </div>
                <Descriptions weather={weather} units={units} />
              </div>
            )
          }
        </div>
      </div>


      <h2 className="text-center fw-bolder fs-3 text-success text-decoration-letter-spacing text-decoration-underline mt-4">Cauta mai jos si vezi ce destinatie te atrage ! E "Vremea" sa calatoresti!</h2>

      <div className="city-destination">
        <a href="city/0"><h5><em>Dubai, Emiratele Arabe Unite</em></h5></a>
        <a href="city/1"><h5><em>Bali, Indonezia</em></h5></a>
        <a href="city/2"><h5><em>Londra, Marea Britanie</em></h5></a>
        <a href="city/3"><h5><em>Roma, Italia</em></h5></a>
        <a href="city/4"><h5><em>Paris, Franța</em></h5></a>
        <a href="city/5"><h5><em>Creta, Grecia</em></h5></a>
        <a href="city/6"><h5><em>Cairo, Egipt</em></h5></a>
      </div>


    </>

  );
}

export default App;

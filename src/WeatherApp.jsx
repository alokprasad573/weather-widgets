import './WeatherApp.css'
import SearchBox from './SearchBox.jsx';
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Azov",
        temp: 7.01,
        maxTemp: 7.01,
        minTemp: 7.01,
        realFeel: 3.37,
        humidity: 52,
        windSpeed: 1.5,
        pressure: 1024,
        description: "Broken Clouds"
    })

    let updateWeatherInfo = (weatherData) => {
        setWeatherInfo(weatherData)
    }

    return (
        <div className="WeatherApp">
            <h1>Weather Widget</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo}></SearchBox>
            <InfoBox weatherInfo={weatherInfo}></InfoBox>
        </div>
    )
}

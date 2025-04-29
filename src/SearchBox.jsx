import {useState} from 'react';
import axios from "axios";
import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ updateWeatherInfo }) {

    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const apiKey = '03d62e86501a7d9b96eb392f230be26e';
    const api = 'https://api.openweathermap.org/data/2.5/weather';

    const getWeatherInfo = async (city) => {
        try {
            let response = await axios.get(`${api}?q=${city}&appid=${apiKey}&units=metric`);
            let data = await response.data;

            console.log(data);

            return {
                city: data.name,
                temp: data.main.temp,
                maxTemp: data.main.temp_max,
                minTemp: data.main.temp_min,
                realFeel: data.main.feels_like,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                pressure: data.main.pressure,
                description: data.weather[0].description
            };
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let weatherData = await getWeatherInfo(city);
            updateWeatherInfo(weatherData);
            setCity('');
            setError(false);
        } catch (error) {
            setError(true);
            
        }
        
    }


    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="Enter City" variant="outlined" required value={city} onChange={handleChange}  />
                &nbsp;&nbsp;&nbsp;
                <br></br><br/>
                <Button variant="contained" type="submit" size="large">Search</Button>
                <br></br>
            </form>
            {error ? <p><b>No such places exist</b></p> : null}
        </div>
    );
};
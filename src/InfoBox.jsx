import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function InfoBox({ weatherInfo }) {
    let weather_url;
    let weather_icon;

    let rain_url = "https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?w=600&auto=format&fit=crop&q=60";
    let sunny_url = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop";
    let thunderstorm_url = "https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=1972&auto=format&fit=crop";
    let cold_url = "https://plus.unsplash.com/premium_photo-1670430003598-50c3d2967942?w=600&auto=format&fit=crop";

    if (weatherInfo.humidity > 80 && weatherInfo.temp < 20) {
        weather_url = cold_url;
        weather_icon = <AcUnitIcon />; // Cold weather icon
    } else if (weatherInfo.humidity > 60 && weatherInfo.temp > 25) {
        weather_url = rain_url;
        weather_icon = <CloudySnowingIcon />; // Rainy weather icon
    } else if (weatherInfo.temp > 30 && weatherInfo.humidity < 50) {
        weather_url = sunny_url;
        weather_icon = <WbSunnyIcon />; // Sunny weather icon
    } else if (weatherInfo.windSpeed > 50) {
        weather_url = thunderstorm_url;
        weather_icon = <ThunderstormIcon />; // Thunderstorm icon
    } else {
        weather_url = "https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?q=80&w=1976&auto=format&fit=crop";
        weather_icon = <WbCloudyIcon />; // Default icon
    }

    return (
        <div className="InfoBox">
            <div className="weatherCard">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={weather_url} title={weatherInfo.description} />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <h2>{weatherInfo.city}&nbsp;&nbsp;{weather_icon}</h2>
                            <p>Temperature = {weatherInfo.temp}&deg;C</p>
                            <p>Max = {weatherInfo.maxTemp}&deg;C</p>
                            <p>Min = {weatherInfo.minTemp}&deg;C</p>
                            <p>Humidity= {weatherInfo.humidity}%</p>
                            <p>Wind Speed = {weatherInfo.windSpeed} KpH</p>
                            <p>Pressure = {weatherInfo.pressure} hPa</p>
                            <p>Today's weather is <b>{weatherInfo.description}</b> and feels like <b>{weatherInfo.realFeel}&deg;C</b>.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
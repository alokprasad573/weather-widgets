# 🌤️ Weather Widgets

A sleek and modern weather application built with React and Vite. Display real-time weather information through beautiful, interactive widgets.


## ✨ Features

- 📱 Responsive design that works on all devices
- 🌡️ Real-time temperature and weather conditions
- 🌅 Sunrise and sunset times
- 💨 Wind speed and direction
- 📊 Hourly and daily forecasts
- 🌍 Location-based weather updates


## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-widgets.git
cd weather-widgets
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to see your application.

## 📁 Project Structure

```
src/
├── assets/           # Static assets and images
├── App.jsx          # Root application component
├── App.css          # Global styles
├── main.jsx         # Application entry point
├── index.css        # Base styles
├── WeatherApp.jsx   # Main weather application component
├── WeatherApp.css   # Weather app specific styles
├── InfoBox.jsx      # Weather information display component
├── InfoBox.css      # Info box styles
├── SearchBox.jsx    # Location search component
└── SearchBox.css    # Search box styles
```

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [OpenWeather API](https://openweathermap.org/api) - Weather data provider


---

Made with ❤️ by Alok Prasad
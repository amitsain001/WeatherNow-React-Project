// WeatherApp.jsx
import { useState, useEffect , useMemo } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css"; // include the CSS below

// your default initial values (use your existing default)
export default function WeatherApp() {

  // your default initial values
  const [weatherinfo, setWeatherInfo] = useState({
    city: "Delhi",
    temperature: 25,
    tempMin: 22,
    tempMax: 27,
    Humidity: 50,
    feels_like: 26,
    weather: "clear sky",
    pressure: 1012,
    Ground_Level: 1000,
  });  // <-- IMPORTANT: close useState BEFORE useEffect


  // ✅ Now place useEffect OUTSIDE the state object
  useEffect(() => {
    const audio = new Audio("/sounds/birds.mp3");
    audio.loop = false;

    // play audio after first user interaction
    const startAudio = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);

    return () => {
      audio.pause();
      window.removeEventListener("click", startAudio);
    };
}, []);


  // updateInfo will be passed to SearchBox and called when new data arrives
  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // pick background url based on weatherinfo (memoized)
  const backgroundUrl = useMemo(() => {
    const w = (weatherinfo.weather || "").toLowerCase();
    const t = Number(weatherinfo.temperature ?? 0);

    // check weather keywords first (rain/snow/cloud/clear)
    if (w.includes("rain") || w.includes("drizzle") || w.includes("thunder")) {
      return "/images/rain.jpg";
    }
    if (w.includes("snow") || w.includes("sleet")) {
      return "/images/cold.jpg";
    }
    if (w.includes("cloud") || w.includes("overcast")) {
      return "/images/mild.jpg";
    }
    if (w.includes("clear") && (new Date()).getHours() >= 19) {
      // clear at night -> night image
      return "/images/night.jpg";
    }

    // fallback based on temp thresholds
    if (!isNaN(t)) {
      if (t >= 30) return "/images/hot.jpeg";
      if (t >= 20) return "/images/warm.jpg";
      if (t >= 10) return "/images/mild.jpg";
      return "/images/cold.jpg";
    }

    return "/images/default.jpg";
  }, [weatherinfo]);

  return (
    <div
      className="app-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(6,12,30,0.45), rgba(6,12,30,0.15)), url(${backgroundUrl})`,
      }}
    >
      <div className="container">
        <header className="topbar">
          <h1 className="brand">WeatherNow</h1>
          {/* you can add settings icon here */}
        </header>

        <div className="hero-wrap">
          <div className="hero-left">
            {/* large temperature + description */}
            <div className="big-temp">
              <div className="temp-number">{Math.round(weatherinfo.temperature)}°</div>
              <div className="temp-meta">
                <span className="degree-c">°C</span>
                <div className="desc">{weatherinfo.weather}</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* right side icon & small stats */}
            <div className="weather-icon">
              {/* you can show an icon based on weather - using emoji fallback below */}
              <div className="icon-lg">
                {weatherinfo.weather?.toLowerCase().includes("cloud") ? "☁️"
                  : weatherinfo.weather?.toLowerCase().includes("rain") ? "🌧️"
                  : weatherinfo.weather?.toLowerCase().includes("snow") ? "❄️"
                  : "☀️"}
              </div>
            </div>

            <div className="small-stats">
              <div>Feels like: <strong>{Math.round(weatherinfo.feels_like)}°C</strong></div>
              <div>Humidity: <strong>{weatherinfo.Humidity}%</strong></div>
            </div>
          </div>
        </div>

        {/* search box sits inside hero area */}
        <div className="search-row">
          <SearchBox updateInfo={updateInfo} />
        </div>

        {/* Info card / tiles */}
        <InfoBox info={weatherinfo} backgroundUrl={backgroundUrl} />

      </div>
    </div>
  );
}

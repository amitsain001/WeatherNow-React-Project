// InfoBox.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Info.css";

export default function InfoBox({ info, backgroundUrl }) {
  // choose a small hero image for the card top if you want (or reuse background)
  const hero = info.temperature >= 25 ? "/images/hot.jpg" : "/images/mild.jpg";

  return (
    <div className="InfoBox">
      <div className="cardcontainer">
        <Card className="infocard">
            
            <CardMedia
                className="cardmedia"
                component="div"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
            />


          <CardContent>
            <Typography variant="h5" gutterBottom>{info.city}</Typography>

            <div className="allinfo">
              <div className="datablocks temp">
                <i className="fa-solid fa-temperature-half"></i>
                <span className="label">Temperature</span>
                <div className="value">{info.temperature}°C</div>
              </div>

              <div className="datablocks">
                <i className="fa-solid fa-droplet"></i>
                <span className="label">Humidity</span>
                <div className="value">{info.Humidity}</div>
              </div>

              <div className="datablocks">
                <i className="fa-solid fa-temperature-arrow-down"></i>
                <span className="label">Temp Min</span>
                <div className="value">{info.tempMin}°C</div>
              </div>

              <div className="datablocks">
                <i className="fa-solid fa-temperature-arrow-up"></i>
                <span className="label">Temp Max</span>
                <div className="value">{info.tempMax}°C</div>
              </div>

              <div className="datablocks">
                <i className="fa-solid fa-cloud"></i>
                <span className="label">Weather</span>
                <div className="value">{info.weather}</div>
              </div>

              <div className="datablocks">
                <i className="fa-solid fa-wind"></i>
                <span className="label">Pressure</span>
                <div className="value">{info.pressure}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

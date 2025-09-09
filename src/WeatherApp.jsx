import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {

    const [ weatherinfo , setweatherInfo ] = useState ({

        city : "Delhi" ,
        Ground_Level: 982 ,
        Humidity: 43 ,
        feels_like: 38.32 ,
        tempMax: 35.08 ,
        tempMin: 35.08 ,
        temperature: 35.08 ,
        weather: "few clouds" ,
        pressure : 324 ,

    }) ;

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo) ;
    } 

    return (
        <div style = {{ textAlign : "center" }}>
            <h2><i class="fa-solid fa-sun"></i> <b>WeatherNow</b></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css" ;
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    let [ city , setCity ] = useState("") ;
    let [ error , setError ] = useState(false) ;

    const API_URL = "https://api.openweathermap.org/data/2.5/weather" ;
    const API_KEY = "40e036fd3dd4ad2a889248fb1bf97104" ;

    let getWeatherInfo = async() => {

        try {

            let response = await fetch ( `${API_URL}?q=${city}&appid=${API_KEY}&units=metric` ) ;
            let jsonresponse = await response.json() ;

            let result = {

                city : city ,
                temperature : jsonresponse.main.temp ,
                tempMin : jsonresponse.main.temp_min ,
                tempMax : jsonresponse.main.temp_max ,
                Humidity : jsonresponse.main.humidity ,
                feels_like : jsonresponse.main.feels_like ,
                weather : jsonresponse.weather[0].description ,
                Ground_Level : jsonresponse.main.grnd_level ,
                pressure : jsonresponse.main.pressure ,

            } ;

            console.log(result) ;
            return result ;

        } catch ( err ) {
            throw err ;
        }

    }

    let handleInputChange = (evt) => {
        setCity ( evt.target.value ) ;
    }

    let handleSubmit = async(evt) => {

        try {

            evt.preventDefault();
            console.log(city) ;
            setCity("") ;
            let newInfo = await getWeatherInfo() ;
            updateInfo(newInfo) ;
        
        } catch (err) {
            setError(true) ;
        }
    } ;

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>

                <TextField id="city" label="Location" variant="outlined" required value={city} onChange={handleInputChange} style={{color : "white"}} />
                <br></br><br></br>

                <Button variant="contained" type='Submit'>Search</Button>
                <br></br>

                { error && <p style={{color : "red"}}>No such place exist !</p> }

            </form>

        </div>
    )
};
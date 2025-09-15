import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css"

export default function InfoBox ({info}) {

    let HOT_URL = "https://images.fineartamerica.com/images-medium-large-5/summer-sky-with-bright-sun-rike-.jpg" ;
    let COLD_URL = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg" ;
    let RAIN_URL = "https://static.vecteezy.com/system/resources/thumbnails/051/263/379/small/rainy-day-serenity-water-droplets-and-floating-autumn-leaves-photo.jpg" ;

    return (

        <div className="InfoBox">

            <div className='cardcontainer'>

                <Card  className='infocard'>

                    <CardMedia
                        sx={{ height: 140 }}
                        image= {

                            info.Humidity > 85 
                            ? RAIN_URL 
                            : info.temperature > 15
                            ? HOT_URL 
                            : COLD_URL

                        } 

                        title="green iguana"
                    />

                    <CardContent>


                        <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold"}}>

                            {info.city}
                            
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

                            <div className='allinfo'>

                                <div className='datablocks'><i class="fa-solid fa-temperature-low"></i><br></br><span className='dataname'>Temperature</span>  {info.temperature}&deg;C</div>
                                <div className='datablocks'><i class="fa-solid fa-droplet"></i> <br></br> <span className='dataname'>Humidity</span>  <br></br> {info.Humidity}</div>
                                <div className='datablocks'><i class="fa-solid fa-temperature-arrow-down"></i> <br></br><span className='dataname'>Temp Min</span>  {info.tempMin}&deg;C</div>
                                <div className='datablocks'><i class="fa-solid fa-temperature-arrow-up"></i> <br></br> <span className='dataname'>Temp Max</span>  {info.tempMax}&deg;C</div>
                                <div className='datablocks'><i class="fa-solid fa-temperature-empty"></i><br></br><span className='dataname'>Feels Like</span>  {info.feels_like}&deg;C</div>
                                <div className='datablocks'><i class="fa-solid fa-cloud"></i> <br></br> <span className='dataname'>Weather</span> <br></br> {info.weather}</div>
                                <div className='datablocks'><i class="fa-solid fa-arrow-up-from-ground-water"></i> <br></br><span className='dataname'>Ground Level</span>  {info.Ground_Level}</div>
                                <div className='datablocks'><i class="fa-solid fa-wind"></i> <br></br><span className='dataname'>Pressure</span> <br></br> {info.pressure}</div>

                            </div>

                        </Typography>

                    </CardContent>

                </Card>

            </div>

        </div>

    )
} 
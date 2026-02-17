import LocationOn from '@mui/icons-material/LocationOn'
import WaterDrop from '@mui/icons-material/WaterDrop'
import Air from '@mui/icons-material/Air'
import '../styles/weatherDisplay.css'

function WeatherDisplay({data, location }) {

    const {localtime, name} = location;
    const {temp_c,
         condition,
        wind_kph,
        humidity
        } = data;
    const weatherIcon = condition?.icon ? `https:${condition.icon}` : 'src/assets/rainy.svg'
    const weatherText = condition?.text || 'Weather icon'

    const formattedDate = localtime
  ? new Date(localtime.replace(' ', 'T')).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  : '--'

    return (
            <section className='weather-info'>
                <div className="locationDate-container">
                    <div className="location-info">
                        <span className='locationOn'><LocationOn /></span>
                        <h3 className="location-name">{name}</h3>
                    </div>
                    <h4 className="dateAndtime">{formattedDate}</h4>
                </div>
                <div className="weather-summary">
                    <img src={weatherIcon} alt={weatherText} className="weather-img" />
                    <div className='temp-weth'>
                        <h1 className='temperature'>{Math.round(temp_c)} °C</h1>
                        <h3 className='weather-desc'>{condition.text}</h3>
                    </div>
                </div>
                <div className="weather-conditions-container">
                    <div className='condition-item'>
                        <span><WaterDrop /></span>
                        <div className='condition-info'>
                            <h3>Humidity</h3>
                            <h4>{humidity}%</h4>
                        </div>
                    </div>
                    <div className='condition-item'>
                        <span><Air /></span>
                        <div className="condition-info">
                            <h3 className='text'>Wind Speed</h3>
                            <h4 className="">{wind_kph} km/h</h4>
                        </div>

                    </div>
                </div>
            </section>         
    )
}

export default WeatherDisplay;
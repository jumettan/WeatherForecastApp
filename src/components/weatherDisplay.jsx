import SearchIcon from '@mui/icons-material/Search'
import LocationOn from '@mui/icons-material/LocationOn'

import '../styles/weatherDisplay.css'

function WeatherDisplay () {

    return (
        <div className="main-container">
            <header className="input-container">
                <input type="text" placeholder="Search City" className="searchbar" />
                <button className="search-button">
                    <SearchIcon />
                </button>
            </header>
            <section className='weather-info'>
                <div className="locationDate-info">
                    <span><LocationOn/></span>
                    <h3 className="location">Tampere</h3>
                    <h4 className="datetime">Mon, 09 Feb</h4>
                </div>
                <div className='TemperatureWeather-info'>
                        <img src="" alt="Weather Image" />
                    <div>
                            <h3 className='temperature'>30*C</h3>
                         <h4 className='weatherType'>Clouds</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WeatherDisplay;
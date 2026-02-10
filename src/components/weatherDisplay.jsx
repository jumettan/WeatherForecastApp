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
                    <div className="locationDate-container">
                        <div className="location-info">
                        <span className='locationOn'><LocationOn/></span>
                        <h3 className="location-name">Tampere</h3>
                    </div>
                    <h4 className="dateAndtime">Mon, 09 Feb</h4>
                </div>
                <div className="weather-summary">
                    <img src="" alt="IMG" />
                    <div>
                        <h1 className='temperature'>29*</h1>
                        <h3 className='weather-desc'>Clouds</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WeatherDisplay;
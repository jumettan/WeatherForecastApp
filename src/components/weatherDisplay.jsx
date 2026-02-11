import SearchIcon from '@mui/icons-material/Search'
import LocationOn from '@mui/icons-material/LocationOn'
import WaterDrop from '@mui/icons-material/WaterDrop'
import Air from '@mui/icons-material/Air'

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
                    <img src='src/assets/rainy.svg' alt="Rainy" className="weather-img" />
                    <div className='temp-weth'>
                        <h1 className='temperature'>29°C</h1>
                        <h3 className='weather-desc'>Clouds</h3>
                    </div>
                </div>
                <div className="weather-conditions-container">
                    <div className='condition-item'>
                        <span><WaterDrop /></span>
                        <div className='condition-info'>
                            <h3>Humidity</h3>
                            <h4>74%</h4>
                        </div>
                    </div>
                    <div className='condition-item'>
                        <span><Air/></span>
                        <div className="condition-info">
                            <h3 className='text'>Wind Speed</h3>
                            <h4 className="">2.12M/s</h4>
                        </div>

                    </div>
                </div>

                <div className="next-days-info">
                    <div className="grid-container">
                        <div className='slide'>
                            <h3 className='date'>Feb 13</h3>
                            <img src="src/assets/rainy.svg" alt="rainy" />
                            <h4 className='temperature'>25 °C</h4>
                        </div>                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WeatherDisplay;
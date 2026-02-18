import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import './styles/app.css'
import WeatherSlides from './components/WeatherSlides'
import WeatherDisplay from './components/weatherDisplay'
import { useEffect } from 'react';
import { getWeatherData } from './api';

function App() {
  const [city, setCity] = useState('');
    const[searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [hasSearched, setHasSearched] = useState(false)

    useEffect(() => {
      const fetchWeather = async () => {
        if (!city.trim()) {
          setWeatherData(null)
          return
        }

        setLoading(true);
        setError('')
        try{
          const data = await getWeatherData(city)

          if (!data?.current || !data?.forecast?.forecastday?.length || !data?.location) {
            throw new Error('Malformed weather response')
          }

          setWeatherData({
            current: data.current,
            hourly: data.forecast.forecastday[0].day, 
            weekly: data.forecast.forecastday.slice(1),
            location: data.location
          })

        } catch(e) {
          setError(`Error: ${e.message}`)
          setWeatherData(null)
        }
        finally {   
          setLoading(false)
        }
      }
      fetchWeather()
    }, [city])
    return (
      <>
        <div className="main-container">
            <header className="input-container">
                <input type="text" placeholder="Search City" className="searchbar" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="search-button" onClick={() => {
                    const trimmedValue = searchValue.trim();
                    if(!trimmedValue) return;
                      setHasSearched(true);
                      setCity(trimmedValue);
                  }}>
                    <SearchIcon />
                </button>
            </header>
            {loading && <p>Loading weather...</p>}
            {error && <p>{error}</p>}
            {!hasSearched && !loading && !error && (
              <p className="placeholder-message">Search city to get weather information for any city</p>
            )}
            {weatherData && <WeatherDisplay data={weatherData.current} location={weatherData.location} />}
            {weatherData && <WeatherSlides data={weatherData.weekly} />}
        </div>
    </>
  )
}

export default App

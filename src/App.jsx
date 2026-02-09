import { useState } from 'react'
import './App.css'
import WeatherDisplay from './components/weatherDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <WeatherDisplay/>
    </>
  )
}

export default App

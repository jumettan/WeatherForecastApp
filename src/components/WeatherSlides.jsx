import React from 'react'
import '../styles/weatherSlides.css'

function weatherSlides({data = []}) {

  return (
    <>
            <div className="grid-container">
                {data.map((day, index) => {
                    const weekday = new Date(day.date).toLocaleDateString('en-US', {weekday: 'short'})
                    const icon = day?.day?.condition?.icon ? `https:${day.day.condition.icon}` : ''
                    const iconAlt = day?.day?.condition?.text || "weather icon"
                    const temperature = day?.day?.avgtemp_c ?? day?.day?.maxtemp_c ?? day?.day?.mintemp_c

                    return <div className="grid-item" key={index}>
                                <div className='slide'>
                                    <h3 className='date'>{weekday}</h3>
                                    <img src={icon} alt={iconAlt}/>
                        <h4 className='temperature'>{typeof temperature === 'number' ? `${Math.round(temperature)} °C` : '--'}</h4>
                            </div>
                    </div>
            })}
                </div>
     </>   
  );
  
}
export default weatherSlides;
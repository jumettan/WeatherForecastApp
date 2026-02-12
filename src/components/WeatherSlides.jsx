import React from 'react'
import '../styles/weatherSlides.css'

function weatherSlides() {
        const weathers = [
        {
            id: 1,
            date: 'Feb 13',
            img: 'src/assets/rainy.svg',
            temp: '22 °C'
        },
        {
            id: 2,
            date: 'Feb 14',
            img: 'src/assets/rainy.svg',
            temp: '22 °C'
        },
        {
            id: 3,
            date: 'Feb 15',
            img: 'src/assets/rainy.svg',
            temp: '21 °C'
        },
        {
            id: 4,
            date: 'Feb 16',
            img: 'src/assets/rainy.svg',
            temp: '23 °C'
        }
        ];
  return (
    <>
            <div className="grid-container">
                {weathers.map(weathers=> (
                    <div className="grid-item">
                        <div className='slide' key={weathers.id}>
                            <h3 className='date'>{weathers.date}</h3>
                            <img src={weathers.img} alt="weather" />
                        <h4 className='temperature'>{weathers.temp}</h4>
                        </div>
                    </div>
                    ))}
                </div>
     </>   
  );
  
}
export default weatherSlides;
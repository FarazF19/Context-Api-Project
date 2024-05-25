import React from 'react'
import {useWeather} from '../context/Weather'


function Card() {
  const weather = useWeather()
  return (
    <div className='card'>
        <img src={weather.data?.current?.condition?.icon} alt="img" />
        <h1>{weather.data?.current?.temp_c}°C</h1>
        <h5>{weather.data?.location?.name}, {weather.data?.location?.region},{weather.data?.location?.country}</h5>
    </div>
  )
}

export default Card
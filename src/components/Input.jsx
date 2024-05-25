import React from 'react';
import { useWeather } from '../context/Weather';

function Input() {
  const { searchCity, setsearchCity } = useWeather();

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("Input changed, value:", value); // Debugging log
    setsearchCity(value);
  };

  return (
    <input
      className='input'
      value={searchCity}
      onChange={handleChange}
    />
  );
}

export default Input;

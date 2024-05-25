import React from 'react';
import { useWeather } from '../context/Weather';

function Button(props) {
  const { fetchData, searchCity } = useWeather();

  const handleClick = () => {
    console.log("Button clicked, searchCity:", searchCity); // Debugging log
    fetchData(searchCity); // Ensure this is a string
  };

  return (
    <button onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default Button;

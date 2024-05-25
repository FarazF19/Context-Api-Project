import {createContext, useContext, useState} from 'react'
import {getWeatherDataForCity} from '../api'

const WeatherContext= createContext(null);

export const useWeather =()=>{
    return  useContext(WeatherContext)
}

export const WeatherProvider = (props)=>{
    const [data,setdata] = useState(null);
    const [searchCity,setsearchCity] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async (city) => {
        console.log("Fetching data for city:", city); // Debugging log
        if (!city || typeof city !== 'string') {
          console.error("Invalid city parameter:", city);
          setError("Invalid city parameter");
          return;
        }
        setLoading(true);
        setError(null);
        try {
          const response = await getWeatherDataForCity(city);
          setdata(response);
        } catch (err) {
          console.error("Error fetching weather data:", err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      return (
        <WeatherContext.Provider value={{ searchCity, data, setsearchCity, fetchData, loading, error }}>
          {props.children}
        </WeatherContext.Provider>
      );
    };
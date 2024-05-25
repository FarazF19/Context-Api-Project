import { useState } from 'react'
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import {useWeather} from './context/Weather'


function App() {
  const weather= useWeather();
  console.log("weather",weather)

  return (
    <>
      <div className='container'>
       
       <h1>Weather Forecast</h1>
       <Input/>
       <Button onClick={weather.fetchData} value="Search"/>
       <Card/>
       <Button value="Refresh"/>
      </div>
      
    </>
  )
}

export default App

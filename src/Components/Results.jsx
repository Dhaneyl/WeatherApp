import React from 'react'
import { useWeather } from '../hooks'

const kelvin = 273.15
export const Results = () => {

    const {result} = useWeather()
    const {name, main} = result
    console.log(result);
  return (
    <div className='contenedor clima'>
        <h2>The weather of {name} is: </h2>
        <p> {parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
        <div className='temp_min_max'>
        <p>Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
        <p>Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
        </div>
        
    </div>
  )
}

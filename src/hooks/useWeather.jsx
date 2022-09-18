import React, { useContext } from 'react'
import { weatherContext } from '../context'
weatherContext

export const useWeather = () => {
    
  return (
    useContext(weatherContext)
  )
}

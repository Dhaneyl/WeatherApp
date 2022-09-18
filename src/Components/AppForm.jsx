import { Container, Grid } from '@mui/material'
import React from 'react'
import { useWeather, useSubmit } from '../hooks/'


export const AppForm = () => {
   const{search, dataSearch}= useWeather()
   const {city, country} = search
   const {alert, handleSubmit} = useSubmit()
   
  return (
    <div className='contenedor'>
        {alert &&<p style={{color:"red", textAlign:'center'}}>{alert}</p>}
        <form onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor='city'> City</label>
                <input 
                    type="text"
                    id='city'
                    name="city"
                    onChange={dataSearch}
                    value={city}
                />
            </div>
            <div className='campo'>
                <label htmlFor='country'>Country</label>
                <select
                  id='country'
                  name='country'
                  onChange={dataSearch}
                  value={country}
                  className='decorated'
                  
                >
                    <option value="" >Select a country</option>
                    <option value="US">United States</option>
                    <option value="DO">Dominicam Republic</option>
                    <option value="MX">Mexico</option>
                    <option value="UK">United Kingdoms</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                </select>
                <input
                    type="submit"
                    value='Check Weather'
                />
            </div>
        </form>
    </div>
  )
}

import React from 'react'
import { useWeather } from '../hooks'
import { AppForm } from './AppForm'
import { Loading } from './Loading'
import { NotResults } from './NotResults'
import { Results } from './Results'



export const AppWeather = () => {
  const {result, loading, notResult} = useWeather();

  return (
    <>
        <main className='dos-columnas'>
            <AppForm/>

          {/* If there's any data of the city written, then will appears Results
          component in the screen */}
          { 
           loading ? <Loading/> :
          result?.name ? <Results/> : notResult ? <NotResults/> : null}
        </main>
    </>
  )
}

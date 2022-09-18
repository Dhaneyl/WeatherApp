import { AppWeather } from "./Components"
import { WeatherProvider } from "./context"


export const App = () => {
  return (
    <>
    
    <WeatherProvider>
    <header>
      <h1>Weather Finder</h1>
    </header>
      <AppWeather/>
      </WeatherProvider>
    </>
  )
}


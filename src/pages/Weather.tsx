// Reference: Intermediate Question 4 https://codeinterview.io/blog/reactjs-coding-interview-questions/
// Build a weather application that retrieves real-time weather data from any weather API and displays it on the screen. The app should provide a search feature through which users can search for a location by city name or zip code and display the current temperature, humidity, wind speed and other relevant weather data.

import { useWeather } from "../hooks/useWeather"


export default function Weather() {
  const { weatherForecast } = useWeather();

  return (
    <>
      <div>Weather Forecaset</div>
      <div>{weatherForecast.currentWeather.time}</div>
      <div>Current Temprature: {weatherForecast.currentWeather.temperature2m}</div>
      <div>Current Wind Speed: {weatherForecast.currentWeather.windSpeed10m}</div>
    </>
  )
}
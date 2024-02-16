import axios from "axios"
import { CurrentWeather } from "../types/weather";

const OpenMeteo = {
  URI: "https://api.open-meteo.com",
  // getWeatherForecast: async (latitude: number, longitude: number, current: string) => {}
  getWeatherForecast: async () => {
    const { data } = await axios.get(`${OpenMeteo.URI}/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
    const currentWeather: CurrentWeather = {
      time: data.current.time,
      temperature2m: data.current.temperature_2m,
      windSpeed10m: data.current.wind_speed_10m,
    }
    return { currentWeather }
  }
}

export default OpenMeteo;


// {
//   "current": {
//     "time": "2022-01-01T15:00"
//     "temperature_2m": 2.4,
//     "wind_speed_10m": 11.9,
//   },
//   "hourly": {
//     "time": ["2022-07-01T00:00","2022-07-01T01:00", ...]
//     "wind_speed_10m": [3.16,3.02,3.3,3.14,3.2,2.95, ...],
//     "temperature_2m": [13.7,13.3,12.8,12.3,11.8, ...],
//     "relative_humidity_2m": [82,83,86,85,88,88,84,76, ...],
//   }
// }
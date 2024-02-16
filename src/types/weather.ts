export type CurrentWeather = {
  time: string;
  temperature2m: number;
  windSpeed10m: number;
}

export type HourlyWeather = {
  time: string[];
  temperature2m: number[];
  windSpeed10m: number[];
  relativeHumidity2m: number[]; 
}
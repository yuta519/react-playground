import { useEffect, useReducer, useRef } from "react"
import OpenMeteo from "../infras/OpenMeteo";
import { CurrentWeather } from "../types/weather";

type State = {
  currentWeather: CurrentWeather;
}

type Action = {
  type: string;
  payload: any;
}

function reducer(state: State, action: Action){
  switch(action.type){
    case ("UPDATE_CURRENT_WEATHER"):
      return { ...state, currentWeather: action.payload};
    default:
      return state;
  }
}


export const useWeather = () => {
  const [weatherForecast, dispatch] = useReducer(reducer, {currentWeather: {}});
  const isLoading = useRef(false);

  useEffect(() => {
    if (!isLoading.current) {
      (async() => {
        isLoading.current = true;
        const { currentWeather } = await OpenMeteo.getWeatherForecast();
        dispatch({type: "UPDATE_CURRENT_WEATHER", payload: currentWeather})
      })()
    }
    isLoading.current = false
  }, []);

  return { weatherForecast }
}
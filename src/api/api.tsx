import axios from "axios";
import {CurrentWeather} from "../interface/CurrentWeather";

const API_key = '46329390d425d0a34e2d1f8601c85566';

export const getGeoWeather: (props: any) => Promise<CurrentWeather | void> = (props: any) => {
    const lat: number = props.lat;
    const lon: number = props.lon;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${API_key}`;

    return axios.get(url)
        .then(response => {
            let currentWeather = new CurrentWeather(response.data);
            return (currentWeather);
        })
        .catch(err => console.log(err))
};

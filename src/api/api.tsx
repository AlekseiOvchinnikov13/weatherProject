import axios from "axios";
import {CurrentWeather} from "../interface/CurrentWeather";
import {ForecastWeather} from "../interface/ForecastWeather";

const API_key = '46329390d425d0a34e2d1f8601c85566';

/**
 * Получить погоду по текущему местоположению
 * @param props
 */
export const getGeoWeather: (props: any) => Promise<CurrentWeather | void> = (props) => {
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

/**
 * Получить погоду по названию города
 * @param {String} cityName название города
 */
export const getGeoWeatherByName: (cityName: string) => Promise<CurrentWeather | void> = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&units=metric&appid=${API_key}`;

    return axios.get(url)
        .then(response => new CurrentWeather(response.data))
        .catch(() => console.log(`Город ${cityName} не найден.`))
}

/**
 * Получить погоду на 2 дня для города по широте и долготе
 * @param props
 */
export const getGeoWeatherForecast: (props: any) => Promise<ForecastWeather | void> = (props) => {
    const lat: number = props.lat;
    const lon: number = props.lon;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily}&lang=ru&units=metric&appid=${API_key}`;

    return axios.get(url)
        .then(response => new ForecastWeather(response.data))
        .catch(() => console.log('Не удалось получить данные.'))
}

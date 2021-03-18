import {action, observable} from 'mobx'
import {CurrentWeather} from "../interface/CurrentWeather";

class Store {
    @observable currentWeather: CurrentWeather = <CurrentWeather>{};

    @action setCurrentWeather = (weather: CurrentWeather) => {
        this.currentWeather.name = weather.name;
        this.currentWeather.main = weather.main;
        this.currentWeather.weather = weather.weather;
    }

    @observable location : CurrentWeather[] = <CurrentWeather[]>{};

    @action setLocation = (weather: CurrentWeather) => {

    }
}

const WeatherStore = new Store();
export default WeatherStore;

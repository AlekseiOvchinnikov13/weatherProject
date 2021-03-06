import {action, makeAutoObservable, observable} from 'mobx'
import {CurrentWeather} from "../interface/CurrentWeather";
import {ForecastWeather} from "../interface/ForecastWeather";

class Store {
    constructor() {
        makeAutoObservable(this);
    }

    @observable currentWeather: CurrentWeather = {} as CurrentWeather;
    @action setCurrentWeather = (weather: CurrentWeather) => {
        this.currentWeather.id = weather.id;
        this.currentWeather.name = weather.name;
        this.currentWeather.main = weather.main;
        this.currentWeather.weather = weather.weather;
        this.currentWeather.coord = weather.coord;
    };

    @observable locations: CurrentWeather[] = observable.array();
    @action addLocation (weather: CurrentWeather) {
        this.locations.find(element => weather.name === element.name)
            ? console.log(`Карточка погоды в городе ${weather.name} уже добавлена`)
            : this.locations.push(weather);
    };
    @action deleteLocation = (id: Number) => {
        this.locations = this.locations.filter((element) => {
            return element.id !== id;
        });
    };

    @observable selectedCity: string = '';
    @action setSelectedCity = (name: string) => this.selectedCity = name;

    @observable forecast: ForecastWeather = {} as ForecastWeather;
    @action setForecast = (element: ForecastWeather) => {
        this.forecast = element;
    }
    @action clearForecast = () => {
        this.forecast = {} as ForecastWeather;
    }

}

export default new Store();
